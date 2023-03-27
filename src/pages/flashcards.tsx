import React, { useRef } from "react";
import DrawerNavbarLayout from "@/components/layout/drawerNavbarLayout";

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
