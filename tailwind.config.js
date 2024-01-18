/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#29ABE2",
        primaryGray: '#EEEEEE'
      },
      height: {
        screen: ["100vh", "100dvh"],
      },
      maxHeight: {
        screen: ["100vh", "100dvh", "-webkit-fill-available"],
      },
      keyframes: {
        "bounce-typing": {
          '0%': {
            transform: 'translateY(0px)',
            opacity: 0.7
          },
          '28%': {
            transform: 'translateY(-7px)',
            opacity: 0.5
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 0.3
          },
        }
      },
      animation: {
        typing: 'bounce-typing 1.8s infinite ease-in-out'
      }
    },
  },
  plugins: [],
};
