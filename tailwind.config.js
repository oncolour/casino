/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surfacePrimary: "#1A191C",
        surfaceSecondary: "#29282D",
        surfaceTertiary: "#302F34",
        brandPrimary: "#065B4F",
        brandDark: "#222E30",
        brandLight: "#0D7769",
      },
    },
  },
  plugins: [],
};
