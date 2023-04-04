import { google, youtube_v3 } from "googleapis";
const youtube = google.youtube("v3");
import { DateTime } from "luxon";
import { P_CONSTANTS } from "../constants";

export async function getBasicPlaylistInfo(key: string, id: string) {
    const res = await youtube.playlists.list({
        key: key,
        part: ["snippet"],
        id: [id],
    });

    return {
        title: res.data.items![0].snippet?.title as string,
        creator: res.data.items![0].snippet?.channelTitle as string,
        thumbnail: res.data.items![0].snippet?.thumbnails?.medium
            ?.url as string,
        updated: DateTime.fromISO(
            res.data.items![0].snippet?.publishedAt as string
        )
            .setLocale("en-gb")
            .toLocaleString(),
    };
}

export function getPlaylistIdFromURL(URL: string) {
    return URL.split("list=").at(1) as string;
}

export function getCurrentAPIKey() {
    const API_KEY = process.env.API_KEY?.split(",");
    const today = new Date().getDay();
    return API_KEY?.at(today) as string;
}

export async function getPlaylistItems(URL: string, nextPageToken: any) {
    const res = await youtube.playlistItems.list({
        key: getCurrentAPIKey(),
        part: ["contentDetails", "snippet"],
        playlistId: getPlaylistIdFromURL(URL),
        maxResults: 500,
        pageToken: nextPageToken,
    });

    return res;
}

export async function getTotalVideoDuration(
    videoIds: string[],
    start: number | null | undefined,
    end: number | null | undefined
) {
    let totalSeconds = 0;
    let durationSeconds = 0;
    // Check lower bound
    if (start) {
        start = start > 0 ? start : 0;
    }
    // Check Upper Bound
    if (end) {
        end > videoIds.length ? end : videoIds.length;
    }
    // Check same values be 0
    if (start === 0 && end === 0) end = videoIds.length;
    // Check same values be other than 0
    if (start && end) {
        if (end < videoIds.length - 1) {
            end = start === end ? start + 1 : end;
        }
        if (end === videoIds.length) {
            start = start === end ? start - 1 : start;
        }
        if (start > end && end < videoIds.length) {
            start = start > 0 ? end - 1 : 0;
        }
    }

    const res = await youtube.videos.list({
        key: getCurrentAPIKey(),
        part: ["contentDetails"],
        id: videoIds.slice(start ?? 0, end ?? videoIds.length),
    });

    res.data.items!.forEach((item: any) => {
        const hour =
            item.contentDetails.duration
                ?.match(P_CONSTANTS.regex.hours)?.[0]
                ?.replace("H", "") || 0;
        const min =
            item.contentDetails.duration
                ?.match(P_CONSTANTS.regex.minutes)?.[0]
                ?.replace("M", "") || 0;
        const sec =
            item.contentDetails.duration
                ?.match(P_CONSTANTS.regex.seconds)?.[0]
                ?.replace("S", "") || 0;
        durationSeconds =
            parseInt(hour) * 3600 + parseInt(min) * 60 + parseInt(sec);
        totalSeconds += durationSeconds;
    });

    return totalSeconds;
}

export async function getPlaylistDurationSeconds(
    URL: string,
    start?: number | null | undefined,
    end?: number | null | undefined
) {
    let totalSeconds = 0;
    let videoCount = 0;
    let videoIds: string[] = [];
    let nextPageToken: any = null;

    while (true) {
        videoIds = [];
        const res = await getPlaylistItems(URL, nextPageToken);

        res.data.items!.forEach((item) => {
            videoIds.push(item.contentDetails!.videoId as string);
            videoCount++;
        });

        totalSeconds += await getTotalVideoDuration(videoIds, start, end);

        nextPageToken = res.data.nextPageToken;
        if (!nextPageToken) {
            break;
        }
    }

    return { totalSeconds, videoCount };
}

export async function youtubePlaylistDuration(
    URL: string,
    rangeStart: number | undefined | null = 0,
    rangeEnd: number | undefined | null = null
) {
    const playlistInfo = await getBasicPlaylistInfo(
        getCurrentAPIKey(),
        getPlaylistIdFromURL(URL)
    );

    const data = await getPlaylistDurationSeconds(URL, rangeStart, rangeEnd);

    return {
        info: playlistInfo,
        data: data,
    };
}
