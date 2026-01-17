// @ts-check

import { align, text_style } from "@zos/ui";
import { px } from "@zos/utils";
import { COLORS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/constants";

export const textStyle = Object.freeze({
    x: px(0),
    y: px(0),
    w: SCREEN_WIDTH,
    h: SCREEN_HEIGHT,
    font_size: 30,
    color: COLORS.WHITE,
    align_h: align.CENTER_H,
    align_v: align.CENTER_V,
    text_style: text_style.WRAP,
})
