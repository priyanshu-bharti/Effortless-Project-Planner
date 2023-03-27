import Link from "next/link";
import React from "react";

const ActionBarItem = ({
    icon,
    active = false,
    label = "Resources",
}: {
    icon: JSX.Element;
    active?: boolean;
    label: string;
}) => {
    return (
        <div
            className={`tooltip tooltip-right font-bold w-full aspect-square ${
                active ? "tooltip-secondary" : "tooltip-primary"
            }`}
            data-tip={label}
        >
            <Link
                href={`/${label.toLowerCase()}`}
                className={`transition-colors duration-150 flex h-full items-center justify-center ${
                    active
                        ? "bg-base-200"
                        : "hover:bg-primary hover:text-neutral"
                }`}
            >
                {icon}
            </Link>
        </div>
    );
};

export default ActionBarItem;
