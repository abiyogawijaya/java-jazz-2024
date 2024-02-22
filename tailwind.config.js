/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#F15A23",
                secondary: "#005E6A",
                third: "#3DA359",
                hitam: "#333333",
                abu: "#818181",
                biru: "#EFFEFF",
                birumuda: "#40A9FF",
            },
            fontFamily: {
                primary: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            width: {
                primary: "23.438rem",
            },
            height: {
                custom: "calc(100% - 50px)",
            },
            boxShadow: {
                "10xl": "2px 4px 6px rgba(216, 216, 216, 0.25)",
                "radio-shadow": "inset 0px 0px 0px calc(2px + 2px) #ffff",
            },
            letterSpacing: {
                primary: "-0.0125em",
            },
            backgroundImage: {
                "radio-pattern": "url('/assets/radio.svg')",
                "dropdown-pattern": "url('/assets/dropdown-icon.svg')",
            },
            listStyleType: {
                decimal: "decimal",
            },
            keyframes: {
                "slide-up": {
                    "0%": { transform: "translateY(100%)" },

                    "100%": { transform: "translateY(0)" },
                },
                "slide-down": {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(100%)" },
                },
            },
            animation: {
                "slide-up": "slide-up 0.2s ease-out",
                "slide-down": "slide-down 0.2s ease-out",
            },
        },
    },
    plugins: [],
};
