import { usePageState } from "@/States/LayoutState";
import React from "react";

const ActionBarItem = ({
    icon,
    active = false,
    label = "Resources",
    pageIndex = 0,
}: {
    icon: JSX.Element;
    active?: boolean;
    label: string;
    pageIndex:number,
}) => {
    const pageChange = usePageState((state)=>state.pageChange) 
    return (
        <div
            className={`tooltip tooltip-right font-bold w-full aspect-square ${
                active ? "tooltip-secondary" : "tooltip-primary"
            }`}
            data-tip={label}
        >

            
            <button className={` btn btn-ghost btn-square text-xl w-full rounded-none ${
    active
        ? "bg-base-200"
        : "hover:bg-primary hover:text-neutral"
}`}
onClick={()=>{
// impliment the zuStand Logic here
pageChange(pageIndex)
}}

>
                        {icon}
                    </button>

        </div>
    );
};

export default ActionBarItem;

{/* <Link
href={`/${label.toLowerCase()}`}
className={`transition-colors duration-150 flex h-full items-center justify-center ${
    active
        ? "bg-base-200"
        : "hover:bg-primary hover:text-neutral"
}`}
>
{icon}
</Link> */}