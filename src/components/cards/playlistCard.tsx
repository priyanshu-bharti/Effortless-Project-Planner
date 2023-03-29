import Image from "next/image";
import React from "react";

const PlaylistCard = ({ response, url }: any) => {
    return (
        <div className="card bg-base-200 border border-base-300 ">
            <figure>
                <Image
                    width={800}
                    height={471}
                    src={response.info.thumbnail}
                    alt="Thumbnail"
                    className="object-cover w-full aspect-video"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{response.info.title}</h2>
                <p>{response.info.creator}</p>
                <a
                    href={url}
                    className="btn btn-accent border border-accent-focus w-max"
                    target="_blank"
                >
                    Watch Playlist
                </a>
            </div>
        </div>
    );
};

export default PlaylistCard;
