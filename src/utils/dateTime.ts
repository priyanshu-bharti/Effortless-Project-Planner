import { Duration } from "luxon";

export function secondsToTimeString(totalSeconds: number) {
    const duration = Duration.fromObject({ seconds: totalSeconds });
    const [hours, minutes, seconds] = duration.toFormat("hh:mm:ss").split(":");

    return `${hours === "00" ? "" : `${hours}h, `} ${
        minutes === "00" ? "" : `${minutes}m, `
    } ${seconds}s`;
}
