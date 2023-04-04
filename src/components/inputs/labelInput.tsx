import React from "react";

const LabelInput = ({
    title = "Input Title",
    placeholder = "Type Placeholder...",
    value,
    setValue,
}: {
    title?: string;
    placeholder?: string;
    value: string;
    setValue: any;
}) => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text font-bold">{title}</span>
            </label>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className="input bg-base-200 input-bordered w-full border-base-300 focus:outline-primary focus:ring-primary font-bold placeholder:text-base-content placeholder:text-opacity-50 placeholder:font-medium"
            />
        </div>
    );
};

export default LabelInput;
