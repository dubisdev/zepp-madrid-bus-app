// @ts-check

import { align, text_style } from "@zos/ui";
import { px } from "@zos/utils";
import { COLORS } from "../utils/constants";

export const textStyle = Object.freeze({
    x: px(0),
    y: px(0),
    w: px(480),
    h: px(480),
    font_size: 30,
    color: COLORS.WHITE,
    align_h: align.CENTER_H,
    align_v: align.CENTER_V,
    text_style: text_style.WRAP,
})
