import { categoryData } from "@/data/components/categoryData";
import React from "react";
import CategoryList from "./categoryList";
import { useRouter } from "next/router";

const CategoryBar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="shrink-0 hidden menu lg:flex lg:w-80 p-4 bg-base-200 fixed h-full gap-2 flex-nowrap overflow-y-scroll scrollbar-hide">
            {children}
        </div>
    );
};

export default CategoryBar;
