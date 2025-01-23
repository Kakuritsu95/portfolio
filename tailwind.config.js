/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontSize: {
                "4xl": "2.5rem",
                "5xl": "3.2rem",
            },
            backgroundColor: {
                "dark-gray": "var(--dark-gray)",
            },
            animation: {
                pointdown: "pointdown 1.1s linear infinite",
            },
            keyframes: {
                pointdown: {
                    "0%": { transform: "translateY(0px)" },
                    "25%": { transform: "translateY(3px)" },
                    "50%": { transform: "translateY(6px)" },
                    "75%": { transform: "translateY(3px)" },
                    "100%": { transform: "translateY(0px)" },
                },
            },
            fontFamily: {
                main: ["Marcellus", "serif"],
            },
        },
        plugins: ["prettier-plugin-tailwindcss"],
    },
}
