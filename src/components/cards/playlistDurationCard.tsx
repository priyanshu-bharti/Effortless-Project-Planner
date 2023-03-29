import { secondsToTimeString } from "@/utils/dateTime";
import React, { useState } from "react";

const PlaylistDurationCard = ({ response, start, end }: any) => {
    const [coding, setCoding] = useState(false);
    const speeds = [1, 1.25, 1.5, 1.75, 2];

    function getRangeLength() {
        if (start || end) {
            return end - start;
        }
        return response.data.videoCount;
    }

    function getAverageLength() {
        if (!coding) {
            return Math.ceil(response.data.totalSeconds / getRangeLength());
        } else {
            return Math.ceil(response.data.totalSeconds / getRangeLength()) * 2;
        }
    }

    return (
        <div className="card bg-base-200 border border-base-300 ">
            <div className="card-body">
                <h2 className="card-title">Playlist Speed Analysis</h2>
                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-2 border-secondary-content">
                        <span className="">
                            I&apos;ll be coding while watching
                        </span>
                        <input
                            onChange={() => setCoding(!coding)}
                            type="checkbox"
                            className="checkbox outline outline-neutral"
                            checked={coding}
                        />
                    </label>
                </div>
                <div className="grid py-2">
                    <h3 className="text-lg font-bold">{`Videos in the Range: ${getRangeLength()}`}</h3>
                </div>

                <div className="grid gap-1.5">
                    <div className="flex">
                        <div className="font-bold w-24 mr-2 mb-4">Avg. Length</div>
                        <div className="">
                            {secondsToTimeString(getAverageLength())}
                        </div>
                    </div>

                    {speeds.map((speed) => (
                        <div key={speed} className="flex">
                            <div className="font-bold w-24 mr-2">{`At ${speed}x`}</div>
                            <div className="">
                                {secondsToTimeString(
                                    !coding
                                        ? Math.ceil(
                                              response.data.totalSeconds / speed
                                          )
                                        : Math.ceil(
                                              response.data.totalSeconds / speed
                                          ) * 2
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlaylistDurationCard;
