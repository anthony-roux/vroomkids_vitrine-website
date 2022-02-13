module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
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
    extend: {
      // fontFamily: {
      //   title: ["Montserrat", "sans-serif"],
      //   body: ["Roboto"],
      // },
      fontSize: {
        "3xs": [
          "8px",
          {
            lineHeight: "12px",
          },
        ],
        "2xs": [
          "10px",
          {
            lineHeight: "16px",
          },
        ],
        "xs": [
          "12px",
          {
            lineHeight: "16px",
          },
        ],
        "s": [
          "14px",
          {
            lineHeight: "24px",
          },
        ],
        "m": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "l": [
          "18px",
          {
            lineHeight: "24px",
          },
        ],
        "xl": [
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
          "48px",
          {
            lineHeight: "56px",
          },
        ],
      },
      colors: {
        blue: {
          lighter: "#F2FAFD",
          light: "#D4F4FE",
          DEFAULT: "#107ACA",
          dark: "#0362AF",
          darker: "#001367",
          hover: "#024C9B",
        },
        grey: {
          lighter: "#EEF2F7",
          light: "#C4CDD6",
          DEFAULT: "#61788E",
          dark: "#2B4660",
          darker: "#0D2339",
        },
        green: {
          lighter: "#F4FEF4",
          light: "#C0F9C9",
          DEFAULT: "#0EA45F",
          dark: "#01834A",
          darker: "#014421",
        },
        red: {
          lighter: "#FFF2F3",
          light: "#FFDADD",
          DEFAULT: "#E2515A",
          dark: "#C5353E",
          darker: "#69030A",
        },
        orange: {
          lighter: "#FFF6F2",
          light: "#FFE8DD",
          DEFAULT: "#F2662F",
          dark: "#B74B1F",
          darker: "#3E1603",
        },
        pink: {
          lighter: "#FFE7E9",
          light: "#FFC4C8",
          DEFAULT: "#EA6870",
          dark: "#EA6870",
          darker: "#AE2831",
        },
        lavender: {
          lighter: "#FCECFD",
          light: "#F6CDF1",
          DEFAULT: "#AE439B",
          dark: "#8D2C7A",
          darker: "#3C052D",
        },
        teal: {
          lighter: "#F0FDFD",
          light: "#BDF8F4",
          DEFAULT: "#17C2BB",
          dark: "#069792",
          darker: "#034441",
        },
        mandarin: {
          lighter: "#FDFCF1",
          light: "#FBF2B8",
          DEFAULT: "#EEAA3C",
          dark: "#B77E29",
          darker: "#482B04",
        },
        yellow: {
          light: "#FBF7D8",
          DEFAULT: "#FADB4B",
          dark: "#F6C844",
        },
        black: "#222222",
        neutral150: "#0D2339",
        white: "#ffffff",
        transparent: "transparent",
      },
      backgroundImage: ["hover", "focus"],
      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
      },
      width: {
        'icon': "24px",
        "240": "240px",
        "800": "800px",
        "1080": "1080px",
        "1120": "1120px",
        'fit': 'fit-content'
      },
      height: {
        'fit': 'fit-content'
      },
      maxWidth: {
        "icon-small": "16px",
        icon: "24px",
        button: "272px",
        illu: "600px",
        "illu-xl": "800px",
        container: "1120px",
      },
      minWidth: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "240": "240px",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        "1080": "1080px",
        "1120": "1120px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
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
  plugins: [require("@tailwindcss/forms")],
  future: {
    purgeLayersByDefault: true,
  },
};
