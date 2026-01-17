// @ts-check

import { widget } from '@zos/ui'
import { formatDate, getTimeToNowText } from '../utils/time';

import {
    lineGroupBackgroundStyle,
    lineGroupStyle,
    lineIndicatorBackgroundStyle,
    lineIndicatorTextStyle,
    arrivalTextTimesStyle
    // @ts-ignore
} from 'zosLoader:./[name].[pf].layout.js';

/**
 * 
 * @param {{
 *  viewContainer: any,
 *  line: string,
 *  lineColor: number,
 *  index: number,
 *  stopTimes: import("@dubisdev/crtm-api").StopTime[]
 *  }} param0 
 */
export const lineTimeInformation = ({ viewContainer, line, stopTimes, lineColor, index }) => {
    const createdWidgets = [];

    const row = viewContainer.createWidget(widget.GROUP, lineGroupStyle(index))

    createdWidgets.push(row)

    const square = row.createWidget(widget.FILL_RECT, lineGroupBackgroundStyle)

    createdWidgets.push(square)

    // LINE INDICATOR BACKGROUND
    const info1 = row.createWidget(widget.FILL_RECT, {
        color: lineColor,
        ...lineIndicatorBackgroundStyle
    })

    createdWidgets.push(info1)

    const info2 = row.createWidget(widget.TEXT, {
        ...lineIndicatorTextStyle,
        text: line,
    })

    createdWidgets.push(info2)

    const nextArrivalDate = new Date(stopTimes[0].time);

    const timeText = getTimeToNowText(nextArrivalDate);

    // We take two next times
    const nextTimes = stopTimes.slice(1, 3).map(st => {
        const date = new Date(st.time);
        return formatDate(date);
    }).join(" | ");

    // // NEXT ARRIVAL TIME
    const timeText1 = row.createWidget(widget.TEXT, {
        text: `${timeText} (${formatDate(nextArrivalDate)})${nextTimes ? " | " + nextTimes : ''}`,

        ...arrivalTextTimesStyle,
    })

    createdWidgets.push(timeText1)

    return createdWidgets;
}
