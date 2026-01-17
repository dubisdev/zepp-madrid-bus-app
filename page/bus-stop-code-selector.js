// @ts-check

import { createKeyboard, inputType, showToast } from "@zos/ui";
import { BasePage } from "@zeppos/zml/base-page";
import { back } from "@zos/router";
import { getText } from "@zos/i18n";
import { goToStopPage } from "./utils/navigation";
import { STOP_TYPE, STOP_TYPE_PREFIX } from "./utils/constants";

Page(
  BasePage({
    state: {
      /**
       * @type {"EMT" | "INTERCITY" | undefined}
       */
      selectedStopType: undefined
    },

    onInit(params) {
      this.state.selectedStopType = JSON.parse(params).stopType;
    },

    build() {
      showToast({ text: getText("select-stop-code") })

      createKeyboard({
        // Required parameters
        inputType: inputType.NUM,

        onComplete: (_widget, result) => {
          const prefix = STOP_TYPE_PREFIX[this.state.selectedStopType || STOP_TYPE.EMT];

          const fullCode = prefix + result.data

          goToStopPage(fullCode)
        },

        onCancel: () => back(),

        text: "",
      })
    },
  })
);
