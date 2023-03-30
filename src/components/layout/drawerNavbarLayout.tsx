import React, { useRef } from "react";
import Navbar from "../nav/navbar/navbar";
import DrawerSidebar from "../nav/drawerNavigation/drawerSidebar";
import ActionBar from "../nav/actionBar/actionBar";

const DrawerNavbarLayout = ({
    children,
    scrollRef,
    bg = "bg-base-100",
}: {
    children: React.ReactNode;
    scrollRef: React.RefObject<HTMLDivElement>;
    bg?: "bg-base-100" | "bg-base-200" | "bg-base-300";
}) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div
                className={`drawer-content flex flex-col scrollbar-hide ${bg}`}
                ref={scrollRef}
            >
                {/* Navigation Bar */}
                <Navbar />
                {/* Content */}
                <div className="flex h-full">
                    <ActionBar />
                    <div className="mt-16 lg:ml-16 w-full flex relative">
                        {children}
                    </div>
                </div>
            </div>
            {/* Sidebar Drawer */}
            <DrawerSidebar />
        </div>
    );
};

export default DrawerNavbarLayout;
