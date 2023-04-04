import React from "react";
import { RiAddLine } from "react-icons/ri";

const TrailingIconButton = ({
    onClick = () => {},
    label = "Button Label",
    icon = <RiAddLine />,
}: {
    onClick?: any;
    label?: string;
    icon?: JSX.Element;
}) => {
    return (
        <button
            onClick={onClick}
            className="btn btn-primary border border-primary-focus gap-2 [&>svg]:text-xl"
        >
            <p>{label}</p>
            {icon}
        </button>
    );
};

export default TrailingIconButton;
