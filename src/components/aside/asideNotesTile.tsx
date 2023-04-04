import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { stripHtml } from "string-strip-html";
import type { Note } from "@/types/notes";

const AsideNotesTile = ({
    note = {
        id: "",
        content: "",
        title: "",
        date: "",
    },
    onClick = () => {},
    onDelete = () => {},
}: {
    note?: Note;
    onClick?: (note: Note) => void;
    onDelete?: (note: Note) => void;
}) => {
    return (
        <li>
            <div
                onClick={(e) => onClick(note as Note)}
                className="grid bg-base-100 border border-base-300 hover:bg-base-300 active:text-base-content active:text-opacity-50 relative"
            >
                <button
                    onClick={() => onDelete(note as Note)}
                    className="btn btn-ghost btn-square btn-sm absolute top-2 right-4"
                >
                    <RiDeleteBin2Line className="text-lg" />
                </button>
                <h4 className="font-bold line-clamp-1 pr-4 mr-5 text-lg">
                    {note!.title}
                </h4>
                {note!.date && (
                    <p className="text-sm opacity-50">Modified {note!.date}</p>
                )}
                <p className="line-clamp-2 text-sm">
                    {stripHtml(note!.content).result}
                </p>
            </div>
        </li>
    );
};

export default AsideNotesTile;
