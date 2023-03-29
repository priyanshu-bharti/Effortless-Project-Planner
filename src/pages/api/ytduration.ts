import { youtubePlaylistDuration } from "@/services/youtubePlaylistDuration/playlistUtils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { URL, rangeStart, rangeEnd } = req.body;

    if (req.method !== "POST") {
        res.status(405).send({ message: "Only POST requests allowed" });
        return;
    }

    try {
        const data = await youtubePlaylistDuration(URL, rangeStart, rangeEnd);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: "Invalid Playlist Request" });
    }
}
