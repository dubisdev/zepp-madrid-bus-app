// @ts-check

import { getDeviceInfo } from "@zos/device";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = getDeviceInfo()

export const COLORS = {
    EMT_BLUE: 0x0072ce,
    INTERCITY_GREEN: 0x009639,
    NIGHT_LINE: 0x181718,
    LOCAL_LINE: 0x9d1c1c,
    BLACK: 0x000001,
    WHITE: 0xffffff,
    DARK_GRAY: 0x242424,
    LIGHT_GRAY: 0x4f4f4f,
}

export const STOP_TYPE = Object.freeze({
    EMT: "EMT",
    INTERCITY: "INTERCITY",
})

export const STOP_TYPE_PREFIX = Object.freeze({
    [STOP_TYPE.EMT]: "6_",
    [STOP_TYPE.INTERCITY]: "8_",
})

export const PATHS = Object.freeze({
    TYPE_SELECTOR: "page/type-selector",
    CODE_SELECTOR: "page/bus-stop-code-selector",
    STOP: "page/stop-display/stop-display",
    NOT_FOUND: "page/error-displayer/error-displayer",
})
