// @ts-check

import { align } from "@zos/ui";
import { COLORS } from "../utils/constants";
import { px } from "@zos/utils";

export const topTextStyle = Object.freeze({
    x: px(140),
    y: px(0),
    w: px(200),
    h: px(86),
    font_size: 30,
    color: COLORS.WHITE,
    align_h: align.CENTER_H,
    align_v: align.CENTER_V,
})

export const viewContainerStyle = Object.freeze({
    x: px(40),
    y: px(86),
    w: px(400),
    h: px(400),
    bounce: 0
})

const LINE_ROW_HEIGHT = 80
const SAVE_BUTTON_HEIGHT = 50

/** @param {number} lineAmount */
export const saveButtonStyle = (lineAmount) => Object.freeze({
    y: px((LINE_ROW_HEIGHT * lineAmount) + 15),
    x: px(100),
    w: px(200),
    h: px(SAVE_BUTTON_HEIGHT),
    radius: 10,
    normal_color: COLORS.INTERCITY_GREEN,
    press_color: COLORS.INTERCITY_GREEN,
    align_h: align.CENTER_H,
    align_v: align.CENTER_V,
    color: COLORS.WHITE,
})

/** @param {number} lineAmount */
export const extraEndSpaceStyle = (lineAmount) => Object.freeze({
    y: px(LINE_ROW_HEIGHT * lineAmount + 15 + SAVE_BUTTON_HEIGHT),
    x: px(0),
    w: px(0),
    h: px(40),
})
