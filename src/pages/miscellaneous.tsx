import React, { useRef } from "react";
import {DrawerNavbarLayout} from "@/components";

const Miscellaneous = () => {
    const divScrollRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <DrawerNavbarLayout scrollRef={divScrollRef}>
                Miscellaneous
            </DrawerNavbarLayout>
        </>
    );
};

export default Miscellaneous;
