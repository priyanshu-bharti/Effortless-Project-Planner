import { navListData } from "@/data/components/navData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiStarLine } from "react-icons/ri";
import ActionBarItem from "./actionBarItem";
import { useRouter } from "next/router";
import { drawerNavbarLayoutData } from "@/pages/PagesComponentData";
import { usePageState } from "@/States/LayoutState";

const ActionBar = () => {
    const isActivePage = usePageState((state)=>state.activePage)
    return (
        <ul className="hidden lg:flex flex-col items-center bg-base-300 w-16 text-xl fixed h-full mt-16 z-10">
            {drawerNavbarLayoutData.map((item,index) => (
                <ActionBarItem
                    key={item.title}
                    pageIndex={index}
                    icon={item.sideBarMenuIcon}
                    label={item.title}
                    active={
                        index===isActivePage
                    }
                />
            ))}
        </ul>
    );
};

export default ActionBar;
