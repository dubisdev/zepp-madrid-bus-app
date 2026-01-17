// @ts-check

import { align } from "@zos/ui";
import { px } from "@zos/utils";
import { COLORS, SCREEN_WIDTH } from "../utils/constants";

const ROW_HEIGHT = 60

/** @param {number} rowIndex Index of the row being printed */
export const lineGroupStyle = (rowIndex) => Object.freeze({
    x: 0,
    y: px(rowIndex * ROW_HEIGHT),
    w: SCREEN_WIDTH - px(20),
    h: px(ROW_HEIGHT),
    bounce: 0
})

export const lineGroupBackgroundStyle = Object.freeze({
    x: px(0),
    y: px(0),
    w: SCREEN_WIDTH - px(20),
    h: px(ROW_HEIGHT - 5),
    color: COLORS.DARK_GRAY,
    radius: 10,
    align_h: align.CENTER_H,
    align_v: align.CENTER_V
})


export const lineIndicatorBackgroundStyle = Object.freeze({
    x: px(15),
    y: px(8),
    w: px(70),
    h: px(40),
    radius: 10,
    align_h: align.CENTER_H,
    align_v: align.CENTER_V
})

export const lineIndicatorTextStyle = Object.freeze({
    x: px(15),
    y: px(8),
    w: px(70),
    h: px(40),
    color: COLORS.WHITE,
    align_h: align.CENTER_H,
    align_v: align.CENTER_V,
})

export const arrivalTextTimesStyle = Object.freeze({
    x: px(150),
    y: px(0),
    w: SCREEN_WIDTH - px(90),
    h: px(55),
    color: COLORS.WHITE,
    align_h: align.LEFT,
    align_v: align.CENTER_V
})
