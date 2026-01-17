// @ts-check

import { getText } from "@zos/i18n";
import { push } from "@zos/router";
import { createWidget, deleteWidget, widget } from "@zos/ui";

import {
    bottomButtonStyles,
    topBarBackgroundStyles,
    topBarTextStyles,
    favouriteButtonBackgroundStyles,
} from "zosLoader:./[name].[pf].layout.js";

import { GLOBAL_DATA_KEY_FAVOURITES_STORAGE } from "../../shared/constants";
import { isEmtStop } from "../utils/text-detectors";
import { PATHS, COLORS } from "../utils/constants";
import { goToStopPage } from "../utils/navigation";

export const HomeUI = {
    state: {
        favouriteWidgets: [],
    },

    onResume() {
        this.printFavourites()
    },

    onPause() {
        this.state.favouriteWidgets.forEach(widget => deleteWidget(widget));

        this.state.favouriteWidgets = [];
    },

    build() {
        // Top bar
        createWidget(widget.FILL_RECT, topBarBackgroundStyles)

        createWidget(widget.TEXT, {
            text: getText("your-bus-stops"),
            ...topBarTextStyles
        })

        // Add favourite button
        createWidget(widget.BUTTON, {
            text: "+",
            click_func: () => push({ url: PATHS.TYPE_SELECTOR }),
            ...bottomButtonStyles
        })

        this.printFavourites();
    },

    printFavourites() {
        /**
         * @type {import("../../shared/favourites-storage").FavouritesStorage}
         */
        const favouritesStorage = getApp()._options.globalData[GLOBAL_DATA_KEY_FAVOURITES_STORAGE];

        const favourites = favouritesStorage.getFavourites();

        const [fav1, fav2, fav3, fav4] = favourites;

        if (fav1) {
            const isEmt = isEmtStop(fav1.stopCode);
            const color = isEmt ? COLORS.EMT_BLUE : COLORS.INTERCITY_GREEN;

            const firstFav = createWidget(widget.BUTTON, {
                normal_color: color,
                press_color: color,
                text: fav1.name,
                click_func: () => goToStopPage(fav1.stopCode),
                ...favouriteButtonBackgroundStyles("TOP_LEFT"),
            })

            this.state.favouriteWidgets.push(firstFav);
        }

        if (fav2) {
            const isEmt = isEmtStop(fav2.stopCode);
            const color = isEmt ? COLORS.EMT_BLUE : COLORS.INTERCITY_GREEN;

            const secondFav = createWidget(widget.BUTTON, {
                normal_color: color,
                press_color: color,
                text: fav2.name,
                click_func: () => goToStopPage(fav2.stopCode),
                ...favouriteButtonBackgroundStyles("TOP_RIGHT")
            })

            this.state.favouriteWidgets.push(secondFav);
        }

        if (fav3) {
            const isEmt = isEmtStop(fav3.stopCode);
            const color = isEmt ? COLORS.EMT_BLUE : COLORS.INTERCITY_GREEN;

            const thirdFav = createWidget(widget.BUTTON, {
                normal_color: color,
                press_color: color,
                text: fav3.name,
                click_func: () => goToStopPage(fav3.stopCode),
                ...favouriteButtonBackgroundStyles("BOTTOM_LEFT")
            })

            this.state.favouriteWidgets.push(thirdFav);
        }

        if (fav4) {
            const isEmt = isEmtStop(fav4.stopCode);
            const color = isEmt ? COLORS.EMT_BLUE : COLORS.INTERCITY_GREEN;

            const forthFav = createWidget(widget.BUTTON, {
                normal_color: color,
                press_color: color,
                text: fav4.name,
                click_func: () => goToStopPage(fav4.stopCode),
                ...favouriteButtonBackgroundStyles("BOTTOM_RIGHT")
            })

            this.state.favouriteWidgets.push(forthFav);
        }
    }
}
