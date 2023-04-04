import { ResourceData } from "@/pages/resources";
import Image from "next/image";
import React, { useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";

const ResourcesCard = ({
    resID = "0A0EEE5B",
    name = "Resource Name",
    description = "Some Description.",
    tags = "Tag",
    url = "#",
}: ResourceData) => {
    const fallbackSrc = "/images/fallbackImage.webp";
    const [imgSrc, setImgSrc] = useState(`/images/thumbs/${resID}.webp`);

    return (
        <div className="card bg-base-200 transition-colors duration-300 hover:bg-base-300 border border-base-300 relative">
            <figure>
                <Image
                    width={800}
                    height={471}
                    src={imgSrc}
                    alt="name"
                    onError={() => {
                        setImgSrc(fallbackSrc);
                    }}
                />
            </figure>
            <div
                className="tooltip tooltip-accent font-bold tooltip-left right-4 top-4 absolute"
                data-tip="Copy URL"
            >
                <button className="btn btn-square btn-accent btn-sm border border-accent-focus">
                    <RiFileCopyLine className="text-lg" />
                </button>
            </div>
            <div className="card-body px-6">
                <h2 className="card-title line-clamp-1">{name}</h2>
                <div className="badge badge-secondary">{tags}</div>
                <p className="line-clamp-2">{description}</p>
                <div className="card-actions pt-2">
                    <a
                        href={url}
                        target="_blank"
                        className="btn btn-secondary border border-secondary-focus"
                    >
                        Visit Website
                    </a>
                    <button className="btn btn-primary border border-primary-focus">
                        Stash this!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResourcesCard;
