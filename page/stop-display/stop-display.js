import { createWidget, widget, deleteWidget, prop } from '@zos/ui'
import { BasePage } from "@zeppos/zml/base-page";
import { log } from '@zos/utils'
import { getText } from '@zos/i18n';

import { GLOBAL_DATA_KEY_FAVOURITES_STORAGE } from '../../shared/constants';
import { generateGetStopTimesRequest } from "../../shared/ipc";
import { lineTimeInformation } from '../components/line-time-information';
import { loadingIndicator } from "../components/loading-indicator";
import { getLineColor } from '../utils/text-detectors';
import { goToErrorPage } from '../utils/navigation';
import { groupBy } from "../utils/group-by";
import { saveButtonStyle, topTextStyle, viewContainerStyle, extraEndSpaceStyle } from 'zosLoader:./[name].[pf].layout.js';

const logger = log.getLogger("StopDisplayPage");

Page(
  BasePage({
    state: {
      /**
       * @type {string | null}
       */
      stopCode: null,

      /**
       * @type {ReturnType<import("../components/loading-indicator").loadingIndicator> | null}
       */
      loadingRef: null,

      /**
       * @type {import("@dubisdev/crtm-api").StopTime[]}
       */
      stopTimes: [],

      /**
       * @type {string}
       */
      stopName: "",

      /**
       * Id reference for the interval that refreshes stop times
       * 
       * @type {number | null}
       */
      intervalId: null,

      stopInfoWidgets: [],

      /**
       * @type {import("../../shared/favourites-storage").FavouritesStorage}
       */
      favouriteStorage: getApp()._options.globalData[GLOBAL_DATA_KEY_FAVOURITES_STORAGE]
    },

    onInit(params) {
      const { stopCode } = JSON.parse(params);

      this.state.stopCode = stopCode;

      this.fetchData(stopCode);

      this.state.intervalId = setInterval(() => {
        this.fetchData(stopCode);
      }, 1000 * 30); // Refresh every 30 seconds

    },

    build() {
      this.state.loadingRef = loadingIndicator()
    },

    drawStopInfo() {
      this.state.stopInfoWidgets.forEach(w => deleteWidget(w));

      this.state.stopInfoWidgets = [];

      const createdWidgets = this.state.stopInfoWidgets;

      const topText = createWidget(widget.TEXT, {
        ...topTextStyle,
        text: `${this.state.stopName}`,
      })

      createdWidgets.push(topText)

      const viewContainer = createWidget(widget.VIEW_CONTAINER, viewContainerStyle)

      createdWidgets.push(viewContainer)

      const byLine = groupBy(this.state.stopTimes, stopTime => stopTime.lineShortDescription);

      [...byLine.entries()].forEach(([line, stopTimes], index) => {
        const widgets = lineTimeInformation({
          viewContainer,
          line,
          stopTimes,
          index,
          lineColor: getLineColor(line, this.state.stopCode)
        })

        createdWidgets.push(...widgets);
      })

      const isSaved = this.state.favouriteStorage.hasFavourite(`${this.state.stopCode}`);

      const saveButtonStyles = saveButtonStyle(byLine.size);

      const buttonSave = viewContainer.createWidget(widget.BUTTON, {
        ...saveButtonStyles,
        text: isSaved
          ? getText("remove-favourite")
          : this.state.favouriteStorage.getFavourites().length === 4
            ? getText("favourites-full")
            : getText("add-to-favourites"),

        click_func: (button_widget) => {
          const isSaved = this.state.favouriteStorage.hasFavourite(`${this.state.stopCode}`);

          if (isSaved) {
            this.state.favouriteStorage.removeFavourite(`${this.state.stopCode}`);

            button_widget.setProperty(prop.MORE, {
              text: getText("add-to-favourites"),
              ...saveButtonStyles,
            });

            return;
          }

          const result = this.state.favouriteStorage.addFavourite({
            id: `${this.state.stopCode}`,
            name: this.state.stopName,
            stopCode: this.state.stopCode || "",
          });

          if (result === "full") {
            button_widget.setProperty(prop.MORE, {
              text: getText("favourites-full"),
              ...saveButtonStyles,
            });

            return;
          }

          button_widget.setProperty(prop.MORE, {
            text: getText("remove-favourite"),
            ...saveButtonStyles,
          });
        }
      })

      createdWidgets.push(buttonSave)

      const extraEndSpace = viewContainer.createWidget(widget.FILL_RECT, extraEndSpaceStyle(byLine.size))

      createdWidgets.push(extraEndSpace)

      const scrollBar = createWidget(widget.PAGE_SCROLLBAR, {
        target: viewContainer,
      })

      createdWidgets.push(scrollBar)
    },

    /**
     * @param {string} code The code stop to search for
     */
    async fetchData(code) {
      try {
        /**
          * @type {import("@dubisdev/crtm-api").StopTimesInfo}
        */
        const data = await this.request(generateGetStopTimesRequest(code))

        const { times, stopName } = data

        times.sort((a, b) => {
          return (new Date(a.time)).getTime() - (new Date(b.time).getTime());
        })

        this.state.stopTimes = times
        this.state.stopName = stopName

        this.state.loadingRef?.delete()

        this.drawStopInfo();

      } catch (err) {
        if (this.state.stopTimes.length > 0) {
          // There is already data, but refreshing failed
          // Just redraw existing data (recalculate time to arrival)
          this.drawStopInfo();
          return;
        }

        if (typeof err === "object" && err !== null && "name" in err) {
          if (err.name === "ResponseMismatchError") {
            return goToErrorPage(getText("stop-not-found"))
          }

          if (err.name === "NetworkError") {
            return goToErrorPage(getText("network-error"))
          }
        }

        logger.error("Error fetching stop times:");
        logger.error(err);

        // Side service not available
        return goToErrorPage(getText("side-service-not-available"))
      }
    },

    onPause() {
      if (this.state.intervalId) {
        clearInterval(this.state.intervalId);
        this.state.intervalId = null;
      }
    },

    onResume() {
      this.state.intervalId = setInterval(() => {
        this.fetchData(this.state.stopCode || "");
      }, 1000 * 30); // Refresh every 30 seconds
    },

    onDestroy() {
      if (this.state.intervalId) {
        clearInterval(this.state.intervalId);
        this.state.intervalId = null;
      }
    }

  })
);
