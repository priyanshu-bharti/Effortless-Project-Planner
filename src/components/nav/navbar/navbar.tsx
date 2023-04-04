import React from "react";
import NavList from "../navList/navList";
import ToggleTheme from "@/components/buttons/toggleTheme";
import { RiMenu4Line, RiMusic2Line, RiTimerFlashLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full navbar fixed bg-base-300 h-16">
            <div className="flex-none lg:hidden">
                <label
                    htmlFor="my-drawer-3"
                    className="btn btn-square btn-ghost"
                >
                    <RiMenu4Line className="text-xl" />
                </label>
            </div>
            <div className="flex-1 px-2 mx-2 font-bold text-xl">
                <Link href="/resources" className="flex items-center gap-2">
                    <Image
                        src="/Logo.svg"
                        width={28}
                        height={28}
                        alt="Logo"
                        className=""
                    />
                    Effortless
                </Link>
            </div>
            <div className="flex-none ">
                <ul className="btn-group mr-2">
                    {/* <!-- Navbar Buttons --> */}

                    <label
                        htmlFor="music-player"
                        className="btn btn-ghost btn-square"
                    >
                        <RiMusic2Line className="text-xl" />
                    </label>

                    <button className="btn btn-ghost btn-square">
                        <RiTimerFlashLine className="text-xl" />
                    </button>

                    <ToggleTheme />
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
