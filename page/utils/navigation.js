import { replace, push } from "@zos/router";
import { PATHS } from "./constants";

/** @param {string} errorText */
export const goToErrorPage = (errorText) => replace({ url: PATHS.NOT_FOUND, params: { errorText } })

/** @param {"EMT" | "INTERCITY"} type */
export const goToCodeSelector = (type) => {
    push({
        url: PATHS.CODE_SELECTOR,
        params: { stopType: type }
    });
}

/** @param {string} stopCode */
export const goToStopPage = (stopCode) => {
    push({ url: PATHS.STOP, params: { stopCode } });
}
