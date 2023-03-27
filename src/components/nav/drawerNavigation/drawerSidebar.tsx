import React from "react";
import NavList from "../navList/navList";
import { categoryData } from "@/data/components/categoryData";
import CategoryItem from "@/components/aside/categoryItem";
import CategoryList from "@/components/aside/categoryList";
import { useRouter } from "next/router";

const DrawerSidebar = () => {
    const router = useRouter();

    return (
        <div className="drawer-side scrollbar-hide">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100">
                {/* <!-- Sidebar content here --> */}
                <NavList />
                {/* Category list */}
                {router.route.split("/")[1] === "resources" && <CategoryList />}
            </ul>
        </div>
    );
};

export default DrawerSidebar;
