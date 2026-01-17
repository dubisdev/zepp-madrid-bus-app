// @ts-check

import { BasePage } from "@zeppos/zml/base-page";
import { createWidget, widget } from '@zos/ui'

// @ts-ignore
import { textStyle } from 'zosLoader:./[name].[pf].layout.js'

Page(
    BasePage({
        state: { errorText: "" },

        onInit(params) {
            const { errorText } = JSON.parse(params);

            this.state.errorText = errorText;
        },

        build() {
            createWidget(widget.TEXT, {
                text: this.state.errorText,
                ...textStyle
            })
        },

        onDestroy() { }
    })
);
