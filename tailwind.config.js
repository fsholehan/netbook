module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          10: "#656464",
          15: "#2B2B39",
          20: "#5D5B70",
          25: "#8C8C8C",
          30: "#4A4A56",
          35: "#2F2C4A",
          40: "#E7E7E7",
          45: "#20202D",
        },
        blue: {
          10: "#217BF4",
        },
        purple: {
          10: "#0A093D",
          15: "#171648",
        },
      },
      fontFamily: {
        inter: ["Inter"],
      },
      fontSize: {
        "7xl": ["56px", "65px"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
