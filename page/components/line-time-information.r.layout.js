// @ts-check

import { align } from "@zos/ui";
import { px } from "@zos/utils";
import { COLORS } from "../utils/constants";

const ROW_HEIGHT = 80

/** @param {number} rowIndex Index of the row being printed */
export const lineGroupStyle = (rowIndex) => Object.freeze({
    x: 0,
    y: px(rowIndex * ROW_HEIGHT),
    w: px(400),
    h: px(ROW_HEIGHT),
    bounce: 0
})

export const lineGroupBackgroundStyle = Object.freeze({
    x: px(0),
    y: px(0),
    w: px(400),
    h: px(ROW_HEIGHT - 5),
    color: COLORS.DARK_GRAY,
    radius: 10,
    align_h: align.CENTER_H,
    align_v: align.CENTER_V
})


export const lineIndicatorBackgroundStyle = Object.freeze({
    x: px(15),
    y: px(12),
    w: px(70),
    h: px(50),
    radius: 10,
    align_h: align.CENTER_H,
    align_v: align.CENTER_V
})

export const lineIndicatorTextStyle = Object.freeze({
    x: px(15),
    y: px(12),
    w: px(70),
    h: px(50),
    color: COLORS.WHITE,
    align_h: align.CENTER_H,
    align_v: align.CENTER_V,
})

export const arrivalTextTimesStyle = Object.freeze({
    x: px(100),
    y: px(0),
    w: px(300),
    h: px(75),
    color: COLORS.WHITE,
    align_h: align.LEFT,
    align_v: align.CENTER_V,
})
