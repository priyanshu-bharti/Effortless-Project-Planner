import React, { useEffect, useState } from "react";
import { formats, modules } from "@/config/reactQuillConfig";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const QuillEditor = ({
    value,
    setValue,
}: {
    value: string | undefined;
    setValue: any;
}) => {
    useEffect(() => {
        setValue(value);
    }, [value, setValue]);

    return (
        <ReactQuill
            theme="bubble"
            bounds=".ql-container"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
            placeholder="Start writing your note here..."
            className="col-span-full relative flex-1 bg-base-200"
        />
    );
};

export default QuillEditor;
