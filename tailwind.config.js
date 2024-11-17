/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        colorPulse: {
          "0%": { backgroundColor: "#ff0000" }, // Vivid red
          "50%": { backgroundColor: "#ff4500" }, // Vivid orange-red
          "100%": { backgroundColor: "#ff0000" }, // Vivid red
        },
      },
      animation: {
        colorPulse: "colorPulse 1s infinite",
      },
    },
  },
  plugins: [],
};
