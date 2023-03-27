import { navListData } from "@/data/components/navData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiStarLine } from "react-icons/ri";
import ActionBarItem from "./actionBarItem";
import { useRouter } from "next/router";

const ActionBar = () => {
    const router = useRouter();

    return (
        <ul className="hidden lg:flex flex-col items-center bg-base-300 w-16 text-xl fixed h-full mt-16 z-10">
            {navListData.map((item) => (
                <ActionBarItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    active={
                        router.route.split("/")[1] === item.label.toLowerCase()
                    }
                />
            ))}
        </ul>
    );
};

export default ActionBar;
