
/** @param {Date} date */
export const getTimeToNowText = (date) => {
    const minutesToNow = Math.round((date.getTime() - new Date().getTime()) / 60000);

    if (minutesToNow <= 0) return ">>>";

    if (minutesToNow > 60) {
        const hours = Math.floor(minutesToNow / 60);

        return `+${hours}h`;
    }

    return `${minutesToNow}min`;
}

/** @param {Date} date */
export const formatDate = (date) => {
    const dateHours = date.getHours().toString().padStart(2, '0');
    const dateMinutes = date.getMinutes().toString().padStart(2, '0');

    return `${dateHours}:${dateMinutes}`
}
