import React, { useRef } from "react";
import { DrawerNavbarLayout } from "@/components";
const FlashCards = () => {
    const divScrollRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <DrawerNavbarLayout scrollRef={divScrollRef}>
                FlashCards
            </DrawerNavbarLayout>
        </>
    );
};

export default FlashCards;
