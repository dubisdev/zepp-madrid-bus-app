import { COLORS, STOP_TYPE_PREFIX } from "./constants";

/** @param {string} stopCode */
export const isEmtStop = (stopCode) => stopCode.startsWith(STOP_TYPE_PREFIX.EMT);

/** @param {string} lineName */
export const isNightLine = (lineName) => lineName.startsWith("N");

/**
 * @param {string} lineName 
 * @param {string} stopCode 
 */
export const getLineColor = (lineName, stopCode) => {
    if (isNightLine(lineName)) {
        return COLORS.NIGHT_LINE;
    }

    if (isEmtStop(stopCode)) {
        return COLORS.EMT_BLUE;
    }

    if (lineName.length <= 2) {
        return COLORS.LOCAL_LINE;
    }

    return COLORS.INTERCITY_GREEN;
}
