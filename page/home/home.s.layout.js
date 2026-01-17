// @ts-check

import { px } from "@zos/utils";
import { COLORS, SCREEN_WIDTH, SCREEN_HEIGHT } from "../utils/constants";
import { align, text_style } from "@zos/ui";

const TOP_BAR_SECTION_HEIGHT = px(80)

export const topBarBackgroundStyles = Object.freeze({
    color: COLORS.LIGHT_GRAY,
    x: px(5),
    y: px(5),
    w: SCREEN_WIDTH - px(10),
    h: TOP_BAR_SECTION_HEIGHT - px(5),
    radius: 10,
})

export const topBarTextStyles = Object.freeze({
    x: px(5),
    y: px(0),
    w: SCREEN_WIDTH - px(10),
    h: TOP_BAR_SECTION_HEIGHT,
    text_size: 32,
    align_h: align.CENTER_H,
    align_v: align.CENTER_V,
    color: COLORS.WHITE,
})

export const bottomButtonStyles = Object.freeze({
    x: px(5),
    y: SCREEN_HEIGHT - TOP_BAR_SECTION_HEIGHT,
    w: SCREEN_WIDTH - px(10),
    h: px(75),
    radius: 10,
    normal_color: COLORS.EMT_BLUE,
    press_color: COLORS.EMT_BLUE,
    text_size: 50,
})

const FAVOURITE_BUTTON_POSITIONS = Object.freeze({
    "TOP_LEFT": { x: px(20), y: px(115) },
    "TOP_RIGHT": { x: px(205), y: px(115) },
    "BOTTOM_LEFT": { x: px(20), y: px(240) },
    "BOTTOM_RIGHT": { x: px(205), y: px(240) },
})

const FAVOURITE_BUTTON_WIDTH = px(165)
const FAVOURITE_BUTTON_HEIGHT = px(100)

/** @param {"TOP_LEFT" | "TOP_RIGHT" |"BOTTOM_LEFT" | "BOTTOM_RIGHT"} position */
export const favouriteButtonBackgroundStyles = (position) => {
    const { x, y } = FAVOURITE_BUTTON_POSITIONS[position];

    return Object.freeze({
        x,
        y,
        w: FAVOURITE_BUTTON_WIDTH,
        h: FAVOURITE_BUTTON_HEIGHT,
        radius: 5,
        text_style: text_style.WRAP,
        text_w: FAVOURITE_BUTTON_WIDTH - px(4),
    })
}
