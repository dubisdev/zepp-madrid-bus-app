// @ts-check

const FetchEvents = Object.freeze({
    ASK_SIDE_FOR_STOP_TIMES: "ASK_SIDE_FOR_STOP_TIMES",
})

/**
 * @param {string} stopCode 
 */
export const generateGetStopTimesRequest = (stopCode) => {
    return {
        method: FetchEvents.ASK_SIDE_FOR_STOP_TIMES,
        params: { stopCode },
    }
}

/**
 * @param {unknown} request
 * @returns { request is { method: typeof FetchEvents.ASK_SIDE_FOR_STOP_TIMES, params: { stopCode: string } } }
*/
export const isGetStopTimesRequest = (request) => {
    const isValidRequest = typeof request === "object" && !!request && "method" in request

    if (!isValidRequest) return false

    return request.method === FetchEvents.ASK_SIDE_FOR_STOP_TIMES
}
