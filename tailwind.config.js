module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // sm: "480px", //480-768
        // md: "768px", //768-976
        // lg: "976px", //976-1200
        // xl: "1440px", //1200-1440
      },
      fontFamily: {
        body: ["Open Sans"],
        display: ["Nunito"],
        latest: ["Roboto"],
        loyals: ["Montserrat"],
      },
      borderRadius: {
        large: "3rem",
      },
    },
  },
  plugins: [],
};
