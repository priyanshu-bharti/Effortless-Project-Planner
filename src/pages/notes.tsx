import React, { useRef } from "react";
import DrawerNavbarLayout from "@/components/layout/drawerNavbarLayout";

const Notes = () => {
    const divScrollRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <DrawerNavbarLayout scrollRef={divScrollRef}>
                Notes
            </DrawerNavbarLayout>
        </>
    );
};

export default Notes;
