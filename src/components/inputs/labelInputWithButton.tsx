import Link from "next/link";
import React from "react";

const LabelInputWithButton = ({
    inputLabel = "Label Name",
    buttonLabel = "Button Label",
    errorMessage = "",
    placeholder = "Some Placeholder Text",
    inputRef,
    onButtonClick,
}: {
    onButtonClick: () => Promise<void>;
    inputRef: React.RefObject<HTMLInputElement>;
    inputLabel: string;
    buttonLabel: string;
    errorMessage: string;
    placeholder: string;
}) => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">{inputLabel}</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={placeholder}
                    className="input input-bordered border-base-300 w-full focus:border-primary focus:ring-primary"
                />
                <button onClick={onButtonClick} className="btn btn-primary">
                    {buttonLabel}
                </button>
            </div>
            {errorMessage && (
                <label className="label">
                    <span className="label-text-alt text-error">
                        {errorMessage}
                    </span>
                </label>
            )}
        </div>
    );
};

export default LabelInputWithButton;
