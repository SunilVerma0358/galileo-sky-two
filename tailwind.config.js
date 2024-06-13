/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: { padding: "12px", center: true },
            fontFamily: {
                poppins: ["Poppins, sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                white: "#F7F7F7",
                "white-cream-btn": "#FEFEFE",
                "black-dark": "#010101",
                "dark-gray": "#4B4B4B",
                "red-dark": "#96151D",
                "red-light": "#EB484C",
                "hero-section-gray": "#E6E6E6",
                "input-gray": "#DFDEDE",
                "gray-dark-input": "#444343",
                "border-color-gray": "#D2D2D2",
                "nav-bg": "#FEFEFE2B",
            },
        },
    },
    plugins: [],
};