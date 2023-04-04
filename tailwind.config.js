/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: "Outfit, Arial, sans-serif",
                serif: "Gloock, serif",
                mono: "Martian Mono, monospace",
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    primary: "#fec89a",
                    secondary: "#f0a6ca",
                    accent: "#a9def9",
                    neutral: "#4f518c",
                    "base-100": "#faf8ff",
                    "base-200": "#e9e2ff",
                    "base-300": "#ded3ff",
                    info: "#3ABFF8",
                    success: "#36D399",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
            {
                dark: {
                    primary: "#fec89a",
                    secondary: "#f0a6ca",
                    accent: "#a9def9",
                    neutral: "#4a4e69",
                    "base-100": "#2c2a4a",
                    "base-content": "#e9e2ff",
                    info: "#3ABFF8",
                    success: "#36D399",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
        ],
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
        require("daisyui"),
        require("tailwind-scrollbar-hide"),
    ],
};
