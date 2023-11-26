/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#29ABE2",
      },
      height: {
        screen: ["100vh", "100dvh", "-webkit-fill-available"],
      },
      maxHeight: {
        screen: ["100vh", "100dvh", "-webkit-fill-available"],
      },
    },
  },
  plugins: [],
};
