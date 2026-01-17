// @ts-check

import { px } from "@zos/utils";
import { COLORS, SCREEN_WIDTH } from "../utils/constants";
import { align, text_style } from "@zos/ui";

const TOP_BAR_SECTION_HEIGHT = px(80)

export const topBarBackgroundStyles = Object.freeze({
    color: COLORS.LIGHT_GRAY,
    x: px(0),
    y: px(0),
    w: SCREEN_WIDTH,
    h: TOP_BAR_SECTION_HEIGHT,
})

export const topBarTextStyles = Object.freeze({
    x: px(0),
    y: px(0),
    w: SCREEN_WIDTH,
    h: TOP_BAR_SECTION_HEIGHT,
    text_size: 32,
    align_h: align.CENTER_H,
    align_v: align.BOTTOM,
    color: COLORS.WHITE,
})

export const bottomButtonStyles = Object.freeze({
    x: px(0),
    y: px(400),
    w: SCREEN_WIDTH,
    h: px(80),
    normal_color: COLORS.EMT_BLUE,
    press_color: COLORS.EMT_BLUE,
    text_size: 50,
})

const FAVOURITE_BUTTON_POSITIONS = Object.freeze({
    "TOP_LEFT": { x: px(50), y: px(130) },
    "TOP_RIGHT": { x: px(250), y: px(130) },
    "BOTTOM_LEFT": { x: px(50), y: px(250) },
    "BOTTOM_RIGHT": { x: px(250), y: px(250) },
})

const FAVOURITE_BUTTON_WIDTH = px(180)
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
