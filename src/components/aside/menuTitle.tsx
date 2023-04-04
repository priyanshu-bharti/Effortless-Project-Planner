import React from "react";

const MenuTitle = ({ title }: { title: string }) => {
    return (
        <li className="menu-title">
            <span className="px-1">{title}</span>
        </li>
    );
};

export default MenuTitle;
