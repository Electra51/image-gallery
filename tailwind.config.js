/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
      borderOpacity: {
        10: "0.01",
        20: "0.2",
        95: "0.95",
      },
    },
  },
  plugins: [],
};
