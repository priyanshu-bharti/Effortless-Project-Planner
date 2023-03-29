import React from "react";
import ScrollTopFAB from "../buttons/scrollTopFAB";

const FourColWrapper = ({
    children,
    sidebarMargin = true,
}: {
    children: React.ReactNode;
    sidebarMargin?: boolean;
}) => {
    return (
        <div
            className={`p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative h-min scrollbar-hide w-full ${
                sidebarMargin && "lg:ml-80"
            }`}
        >
            {children}
        </div>
    );
};

export default FourColWrapper;
