import { categoryData } from "@/data/components/categoryData";
import React from "react";
import CategoryItem from "./categoryItem";

const CategoryList = () => {
    return (
        <>
            <li className="menu-title pb-2">
                <span className="">Category</span>
            </li>
            {categoryData.map(({ icon, label, tag }) => (
                <CategoryItem key={label} label={label} icon={icon} tag={tag} />
            ))}
        </>
    );
};

export default CategoryList;
