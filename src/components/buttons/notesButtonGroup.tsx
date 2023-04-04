import React from "react";
import { RiDownload2Line, RiLock2Line, RiSave2Line } from "react-icons/ri";

const NotesButtonGroup = ({ onSave }: { onSave: () => void }) => {
    return (
        <div className="flex gap-3 fixed bottom-4 right-7">
            <div
                className="tooltip font-bold tooltip-accent"
                data-tip="Download"
            >
                <button className="btn btn-sm btn-circle btn-accent border border-accent-focus">
                    <RiDownload2Line className="text-lg" />
                </button>
            </div>

            <div className="tooltip font-bold tooltip-secondary" data-tip="Save">
                <button
                    onClick={onSave}
                    className="btn btn-sm btn-circle btn-secondary border border-secondary-focus"
                >
                    <RiSave2Line className="text-lg" />
                </button>
            </div>
        </div>
    );
};

export default NotesButtonGroup;
