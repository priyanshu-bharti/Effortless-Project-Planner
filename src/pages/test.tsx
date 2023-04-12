import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { PageOne, PageThree, PageTwo } from "./page_One";
import { usePageState } from "@/States/LayoutState";
import { DrawerNavbarLayoutData, drawerNavbarLayoutData } from "./PagesComponentData";


const Test = () => {
    const divScrollRef = useRef<HTMLDivElement>(null);
    const DrawerNavbarLayout = dynamic(import("../components/layout/drawerNavbarLayout"),{ssr:false})
    const pages:DrawerNavbarLayoutData[] = drawerNavbarLayoutData
    const currentActivePage = usePageState((state)=>state.activePage);
    return (
        <>
            <DrawerNavbarLayout scrollRef={divScrollRef} >
                {pages[currentActivePage].component}
            </DrawerNavbarLayout>
        </>
    );
};

export default Test;

