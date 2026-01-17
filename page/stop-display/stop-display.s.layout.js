// @ts-check

import { align } from "@zos/ui";
import { COLORS, SCREEN_WIDTH } from "../utils/constants";
import { px } from "@zos/utils";

const TOP_SECTION_HEIGHT = 50

export const topTextStyle = Object.freeze({
    x: px(0),
    y: px(0),
    w: SCREEN_WIDTH,
    h: px(TOP_SECTION_HEIGHT),
    font_size: 30,
    color: COLORS.WHITE,
    align_h: align.CENTER_H,
    align_v: align.CENTER_V,
})

export const viewContainerStyle = Object.freeze({
    x: px(10),
    y: px(TOP_SECTION_HEIGHT),
    w: SCREEN_WIDTH - px(20),
    h: px(400),
    bounce: 0
})

const LINE_ROW_HEIGHT = 60
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
    h: px(20),
})
