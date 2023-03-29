import React from "react";

const PlaylistRangeCard = ({
    startCounterRef,
    endCounterRef,
}: {
    startCounterRef: React.RefObject<HTMLInputElement>;
    endCounterRef: React.RefObject<HTMLInputElement>;
}) => {
    return (
        <div className="card bg-base-200">
            <div className="card-body">
                <h2 className="card-title">Specify Range (Optional)</h2>
                <p>
                    Want to calculate duration for only a portion of the
                    playlist? enter the fields below.
                </p>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Range Start</span>
                    </label>
                    <input
                        ref={startCounterRef}
                        min={0}
                        defaultValue={0}
                        type="number"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Range End</span>
                    </label>
                    <input
                        ref={endCounterRef}
                        min={0}
                        defaultValue={0}
                        type="number"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                    />
                    <label className="label">
                        <span className="label-text">
                            Leave the value 0 to calculate the duration of
                            entire playlist.
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PlaylistRangeCard;
