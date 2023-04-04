import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

hljs.configure({
    languages: [
        "javascript",
        "ruby",
        "python",
        "rust",
        "c",
        "cpp",
        "cs",
        "java",
        "dart",
        "json",
    ],
});

export const modules = {
    toolbar: [
        [{ header: [1, 2, 3, false] }],
        [],
        [{ align: ["", "right", "center", "justify"] }],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image"],
        ["code-block"],
    ],
    clipboard: {
        matchVisual: false,
    },
    syntax: {
        highlight: (text: any) => hljs.highlightAuto(text).value,
    },
};

export const formats = [
    "header",
    "bold",
    "italic",
    "align",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "code-block",
];
