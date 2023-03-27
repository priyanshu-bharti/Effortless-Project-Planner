import React, { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

const ScrollTopFAB = ({
    divRef,
}: {
    divRef: React.RefObject<HTMLDivElement>;
}) => {
    return (
        <div
            className="tooltip tooltip-primary font-bold tooltip-left bottom-4 right-6 fixed z-10"
            data-tip="Scroll to Top"
        >
            <button
                onClick={() =>
                    divRef.current!.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    })
                }
                className="btn btn-accent btn-circle text-xl text-neutral border shadow-md border-accent-focus"
            >
                <RiArrowUpLine />
            </button>
        </div>
    );
};

export default ScrollTopFAB;
