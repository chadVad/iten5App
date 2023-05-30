/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            serif: ["Playfair Display", ...defaultTheme.fontFamily.sans],
            cursive: ["Lobster", ...defaultTheme.fontFamily.sans],
            sansserif: ["Varela Round", ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [],
};