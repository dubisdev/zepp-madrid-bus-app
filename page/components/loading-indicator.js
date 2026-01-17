import AutoGUI from "@silver-zepp/autogui"
import { getText } from "@zos/i18n";

export const loadingIndicator = () => {
    const gui = new AutoGUI();

    const loadingTrad = getText("load")

    const loadingText = gui.text(`${loadingTrad} `);

    const intervalId = setInterval(() => {
        const currentText = loadingText.getProperties("text")

        if (currentText.endsWith("...")) {
            loadingText.update({ text: `${loadingTrad} ` });

            return
        }

        loadingText.update({ text: currentText + "." });
    }, 500);

    gui.render()

    return {
        delete: () => {
            clearInterval(intervalId);
            gui.removeWidget(loadingText);
        }
    }
}
