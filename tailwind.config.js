module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  purge: {
    content: [
      "./pages/**/*.tsx",
      "./components/**/*.tsx",
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      poppins: ["poppins", "sans-serif"],
    },
    extend: {
      fontSize: {
        "2xs": [
          "10px",
          {
            lineHeight: "16px",
          },
        ],
        xs: [
          "12px",
          {
            lineHeight: "16px",
          },
        ],
        "sm": [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
        "md": [
          "16px",
          {
            lineHeight: "20px",
          },
        ],
        lg: [
          "18px",
          {
            lineHeight: "24px",
          },
        ],
        xl: [
          "24px",
          {
            lineHeight: "32px",
          },
        ],
        "2xl": [
          "32px",
          {
            lineHeight: "40px",
          },
        ],
        "3xl": [
          "40px",
          {
            lineHeight: "56px",
          },
        ],
        "4xl": [
          "56px",
          {
            lineHeight: "68px",
          },
        ],
      },
      colors: {
        primary: {
          vert1: "#20D8D2",
          vert2: "#8CECC7",
        },
        black: {
          light: "#545454",
          DEFAULT: "#2C2C2C",
        },
        grey: {
          lighter: "#EEF2F7",
          light: "#C4CDD6",
          DEFAULT: "#848484",
          dark: "#939393",
          darker: "#0D2339",
        },
        green: {
          lighter: "#47fd5930",
          light: "#47fd5980",
          DEFAULT: "#47FD59",
        },
        red: {
          lighter: "#ff4b4b30",
          light: "#ff4b4b80",
          DEFAULT: "#FF4B4B",
        },
        yellow: {
          lighter: "#FBF7D830",
          light: "#FBF7D880",
          DEFAULT: "#FFE455",
        },
        teal: {
          lighter: "#F0FDFD",
          light: "#BDF8F4",
          DEFAULT: "#17C2BB",
          dark: "#069792",
          darker: "#034441",
        },
        white: "#ffffff",
        transparent: "transparent",
      },
      backgroundImage: ["hover", "focus"],
      spacing: {
        sm: "8px",
        md: "20px",
        lg: "24px",
        xl: "60px",
        "2xl": "100px",
      },
      container: {
        center: true,
      },
      width: {
        icon: "24px",
        large: "1080px",
        xlarge: "1224px",
      },
      borderRadius: {
        none: "0",
        sm: "3px",
        DEFAULT: "6px",
        md: "8px",
      },
      height: {
        fit: "fit-content",
      },
      maxWidth: {
        "icon-small": "16px",
        icon: "24px",
        illu: "440px",
        "illu-xl": "800px",
        container: "1120px",
      },
      minWidth: {},
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1080px",
        "2xl": "1120px",
        // => @media (min-width: 1024px) { ... }

        "3xl": "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
    boxShadow: {
      blueSmall: "0px 2px 4px rgba(5, 150, 222, 0.2)",
      blueMedium: "0px 4px 8px rgba(5, 150, 222, 0.2)",
      greyDarkerMedium: "0px 0px 16px rgba(34, 67, 88, 0.1)",
      none: "none",
    },
    linearGradientDirections: {
      // defaults to these values
      t: "to top",
      tr: "to top right",
      r: "to right",
      br: "to bottom right",
      b: "to bottom",
      bl: "to bottom left",
      l: "to left",
      tl: "to top left",
    },
    linearGradientColors: {
      // defaults to {}
      vroom: ["#20D8D2", "#8CECC7"],
      "blue-to-turquoise": ["#03BDDF", "#0596DE"],
      "blue-light-hover": ["#019dba", "#11689e"],
      "gradient-primary": ["#60EDE5", "#107ACA"],
      // 'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
    },
    repeatingLinearGradientDirections: (theme) =>
      theme("linearGradientDirections"), // defaults to this value
    repeatingLinearGradientColors: (theme) => theme("linearGradientColors"), // defaults to {}
    repeatingLinearGradientLengths: {
      // defaults to {}
      sm: "25px",
      md: "50px",
      lg: "100px",
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      75: 75,
      90: 90,
      100: 100,
      auto: "auto",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-gradients")],
  future: {
    purgeLayersByDefault: true,
  },
};
