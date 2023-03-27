import React from "react";
import NavList from "../navList/navList";
import ToggleTheme from "@/components/buttons/toggleTheme";
import { RiMenu4Line, RiMusic2Line, RiTimerFlashLine } from "react-icons/ri";

const Navbar = () => {
    return (
        <nav className="w-full navbar fixed bg-base-300 h-16 z-10">
            <div className="flex-none lg:hidden">
                <label
                    htmlFor="my-drawer-3"
                    className="btn btn-square btn-ghost"
                >
                    <RiMenu4Line className="text-xl" />
                </label>
            </div>
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none ">
                <ul className="btn-group mr-2">
                    {/* <!-- Navbar Buttons --> */}

                    <button className="btn btn-ghost btn-square">
                        <RiMusic2Line className="text-xl" />
                    </button>

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
