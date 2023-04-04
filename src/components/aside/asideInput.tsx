import React from "react";

const AsideInput = ({
    value,
    handler = () => {},
    label = "Search",
    placeholder = "Type search token...",
}: {
    value: string;
    handler?: any;
    label?: string;
    placeholder?: string;
}) => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text-alt font-bold opacity-40">
                    {label}
                </span>
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className="input input-bordered border-base-300 w-full transition-colors duration-300"
                value={value}
                onChange={(e) => handler(e.target.value)}
            />
            
        </div>
    );
};

export default AsideInput;
