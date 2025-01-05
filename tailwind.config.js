import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#002D5B",
        secondary: "#E6F0F8",
        accent: "#FDCB6E",
      },
    },
  },
  plugins: [],
});
