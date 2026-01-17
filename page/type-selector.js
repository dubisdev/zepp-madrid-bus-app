// @ts-check

import { BasePage } from "@zeppos/zml/base-page";
import AutoGUI from "@silver-zepp/autogui"
import { getText } from "@zos/i18n"
import { COLORS, STOP_TYPE } from "./utils/constants";
import { goToCodeSelector } from "./utils/navigation";

Page(
  BasePage({
    build() {
      const gui = new AutoGUI();

      gui.fillRect(COLORS.BLACK)

      gui.newRow()

      gui.text(getText("select-stop-type"));

      gui.newRow()

      gui.button(
        getText("emt"),
        () => goToCodeSelector(STOP_TYPE.EMT),
        { normal_color: COLORS.EMT_BLUE }
      )

      gui.button(
        getText("crtm"),
        () => goToCodeSelector(STOP_TYPE.INTERCITY),
        { normal_color: COLORS.INTERCITY_GREEN }
      )

      gui.newRow()

      gui.fillRect(COLORS.BLACK)

      gui.newRow()

      gui.fillRect(COLORS.BLACK)

      gui.render()
    },
  })
);
