/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#1565c0",
                "error": "#c62828",
                "success": "#1b5e20"
            }
        },
    },
    plugins: [],
};
