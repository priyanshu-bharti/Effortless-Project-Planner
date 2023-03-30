import React, { useRef, useState } from "react";
import DrawerNavbarLayout from "@/components/layout/drawerNavbarLayout";
import LabelInputWithButton from "@/components/inputs/labelInputWithButton";
import ThreeColWrapper from "@/components/layout/threeColWrapper";
import PlaylistCard from "@/components/cards/playlistCard";
import PlaylistDurationCard from "@/components/cards/playlistDurationCard";
import PlaylistRangeCard from "@/components/cards/playlistRangeCard";

const PlaylistDuration = () => {
    const divScrollRef = useRef<HTMLDivElement>(null);
    const playlistInputRef = useRef<HTMLInputElement>(null);
    const startCounterRef = useRef<HTMLInputElement>(null);
    const endCounterRef = useRef<HTMLInputElement>(null);

    const [url, setUrl] = useState("");
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    async function handleClick() {
        setResponse(null);
        setError(null);

        // get api route from the env variable
        const route = (process.env.NEXT_PUBLIC_API_ROUTE as string) || "";

        const body = JSON.stringify({
            URL: playlistInputRef.current?.value,
            rangeStart: parseInt(startCounterRef.current?.value as string),
            rangeEnd: parseInt(endCounterRef.current?.value as string),
        });

        console.log(body);

        try {
            const response = await fetch(route, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: body,
            });

            const data = await response.json();
            setUrl(playlistInputRef.current?.value as string);
            data.error ? setError(data.error) : setResponse(data);
            console.log(data);
        } catch (error) {
            console.log(error);
            setError("Something went wrong");
        }
    }

    return (
        <>
            <DrawerNavbarLayout bg="bg-base-200" scrollRef={divScrollRef}>
                <ThreeColWrapper sidebarMargin={false}>
                    <div className="col-span-full flex gap-4 items-center">
                        {/* Label Input */}
                        <LabelInputWithButton
                            onButtonClick={handleClick}
                            inputRef={playlistInputRef}
                            inputLabel="Youtube Playlist URL"
                            buttonLabel="Get Duration"
                            placeholder="https://www.youtube.com/playlist?list=PLNqp92_EXZBJ4CBroxVBJEpAXoz1g-naZ"
                            errorMessage={error}
                        />
                    </div>
                    <PlaylistRangeCard
                        startCounterRef={startCounterRef}
                        endCounterRef={endCounterRef}
                    />
                    {response && !error && (
                        <>
                            <PlaylistCard response={response} url={url} />
                            <PlaylistDurationCard
                                response={response}
                                start={parseInt(
                                    startCounterRef.current?.value as string
                                )}
                                end={parseInt(
                                    endCounterRef.current?.value as string
                                )}
                            />
                        </>
                    )}
                </ThreeColWrapper>
            </DrawerNavbarLayout>
        </>
    );
};

export default PlaylistDuration;
