/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
    ],
    whitelist: ["html", "body"],
    whitelistPatterns: [/\[disabled]/g],
    extractors: [
      {
        extractor: (content) => content.match(/[A-z0-9-:\/]+/g) || [],
        extensions: ["js", "vue", "scss", "css"],
      },
    ],
  },

  theme: {
    extend: {
      colors: {
        gray: {
          100: "#f5f7f7",
          200: "#eeeff0",
          300: "#ced5d9",
          400: "#a8afb3",
          500: "#939799",
          600: "#797d80",
          700: "#616466",
          800: "#3b3c3d",
          900: "#272829",
        },

        red: "#EE3D3D",
        green: "#34C816",

        blue: "#006DA4",

        primary: "#09F",
      },

      borderRadius: {
        xl: "24px",
        "2xl": "34px",
        "3xl": "54px",
        "4xl": "64px",
      },

      fontFamily: {
        body: ["Inter Display", "sans-serif"],
        sans: ["Inter Display", "sans-serif"],
        "inter-display": ["Inter Display", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },

      rotate: {
        0: "0deg",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        6: "6deg",
        12: "12deg",
        18: "18deg",
        45: "45deg",
        90: "90deg",
        180: "180deg",
        "-180": "-180deg",
        "-90": "-90deg",
        "-45": "-45deg",
        "-12": "-12deg",
        "-6": "-6deg",
        "-3": "-3deg",
        "-2": "-2deg",
        "-1": "-1deg",
      },
    },
  },

  variants: {},

  corePlugins: {
    container: false,
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          paddingLeft: "1rem",
          paddingRight: "1rem",
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1024px",
          },
        },
      });
    },
  ],
};
