import React, { useRef } from "react";
import DrawerNavbarLayout from "@/components/layout/drawerNavbarLayout";
import ThreeColWrapper from "@/components/layout/threeColWrapper";
import Link from "next/link";

const PlaylistDuration = () => {
    const divScrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <DrawerNavbarLayout scrollRef={divScrollRef}>
                <ThreeColWrapper sidebarMargin={false}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full col-span-full"
                    />
                    <Link href={``} className="btn">
                        Get Duration
                    </Link>
                </ThreeColWrapper>
            </DrawerNavbarLayout>
        </>
    );
};

export default PlaylistDuration;
