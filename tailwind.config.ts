// const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // ...colors,
        transparent: "transparent",
        current: "currentColor",
        primary: "#00da92",
        success: "#00DA92",
        danger: "#B91C1C",
        warning: "#FFDE54",
        lightprimary: "#eff6ff",
        darkprimary: "#00A06B",
        "grey-200": "#e5e7eb",
        "grey-300": "#d1d5db",
        "grey-400": "#9ca3af",
        "grey-500": "#6b7280",
        "grey-800": "#1f2937",
        "border-color": "#d9d9d9",
      },
    },
  },
  plugins: [],
};
