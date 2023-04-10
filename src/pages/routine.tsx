import React, { useRef } from "react";
import {DrawerNavbarLayout} from "@/components";

const Routine = () => {
    const divScrollRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <DrawerNavbarLayout scrollRef={divScrollRef}>
                Routine
            </DrawerNavbarLayout>
        </>
    );
};

export default Routine;
