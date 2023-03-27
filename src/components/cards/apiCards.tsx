import { ApiData } from "@/pages/resources/API";
import React from "react";

const ApiCards = ({
    api,
    category,
    cors,
    auth,
    description,
    link,
}: ApiData) => {
    return (
        <div className="card bg-base-200 transition-colors duration-300 hover:bg-base-300 border border-base-300">
            <div className="card-body px-6 py-8">
                <h2 className="card-title">{api}</h2>
                <p>
                    <div className=" pb-1 flex gap-2">
                        <span className="badge border border-accent-focus badge-accent">
                            {category.slice(0, 12) +
                                `${category.length > 12 ? "..." : ""}`}
                        </span>
                        {cors.toLowerCase() === "yes" && (
                            <span className="badge border border-primary-focus badge-primary">
                                Cors
                            </span>
                        )}
                        {auth && (
                            <span className="badge border border-secondary-focus badge-secondary">
                                {auth}
                            </span>
                        )}
                    </div>
                    {description}
                </p>

                <div className="card-actions pt-2">
                    <a
                        href={link}
                        target="_blank"
                        className="btn btn-secondary"
                    >
                        Visit Site
                    </a>
                    <button className="btn btn-primary">Stash This!</button>
                </div>
            </div>
        </div>
    );
};

export default ApiCards;
