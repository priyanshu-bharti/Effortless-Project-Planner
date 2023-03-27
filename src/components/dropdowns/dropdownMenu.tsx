import { apiCategories } from "@/data/components/apiCategories";
import Link from "next/link";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const DropdownMenu = () => {
    return (
        <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn btn-secondary m-1 w-full sm:w-max -ml-[0px]">
                Choose Category
                <RiArrowDownSLine className="text-xl ml-2" />
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-lg bg-base-300 rounded-box h-80 overflow-y-scroll flex-nowrap scrollbar-hide"
            >
                {apiCategories.entries.map((category) => (
                    <li key={category.slug}>
                        <Link
                            href={`API/?category=${encodeURIComponent(
                                category.name
                            )}`}
                            className="w-max"
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropdownMenu;
