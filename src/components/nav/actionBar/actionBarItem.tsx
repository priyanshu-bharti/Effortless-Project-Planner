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
            className={`tooltip tooltip-right font-bold ${
                active ? "tooltip-accent" : "tooltip-primary"
            }`}
            data-tip={label}
        >
            <li
                className={`rounded-md transition-colors duration-150 ${
                    active
                        ? "bg-accent text-neutral"
                        : "hover:bg-primary hover:text-neutral"
                }`}
            >
                <Link href={`/${label.toLowerCase()}`}>{icon}</Link>{" "}
            </li>
        </div>
    );
};

export default ActionBarItem;
