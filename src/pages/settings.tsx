import React, { useRef } from "react";
import {DrawerNavbarLayout} from "@/components";

const Settings = () => {
    const divScrollRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <DrawerNavbarLayout scrollRef={divScrollRef}>
                Settings
            </DrawerNavbarLayout>
        </>
    );
};

export default Settings;
