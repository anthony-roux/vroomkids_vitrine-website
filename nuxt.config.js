export default {
  target: "server",
  ssr: true,
  telemetry: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "VroomKids",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  manifest: {
    name: "VroomKids",
    short_name: "VroomKids Nuxt",
    description: "VroomKids manifest description",
    theme_color: "#2C3E50",
    start_url: "/",
  },

  publicRuntimeConfig: {
    assetsPath: process.env.NODE_ASSETS_PATH,
  },
  babel: {
    babelrc: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/theme.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/tailwind-components.js" },
    "~/plugins/components",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components",
    { path: "~/components/Base/", prefix: "Base" },
    { path: "~/components/Common/", prefix: "Common" },
    { path: "~/components/Content/", prefix: "Content" },
    { path: "~/components/Strates/", prefix: "Strates" },
    { path: "~/components/Core/", prefix: "Core" },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "nuxt-purgecss",
    "@nuxtjs/style-resources",
    "nuxt-lazysizes",
  ],
  pageTransition: "fade",
  lazySizes: {
    plugins: {
      unveilhooks: true,
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxt/image",
    "nuxt-svg-loader",
  ],
  // Purge module configuration: https://purgecss.com/guides/nuxt.html
  purgeCSS: {
    enabled: false,
  },
  styleResources: {
    scss: ["./assets/styles/_all_settings.scss"],
  },
  // Nuxt Axios
  axios: {
    proxy:
      process.env.NODE_ENV === "production"
        ? false
        : process.env.NODE_ENV !== "staging",
    baseURL: process.env.BASE_URL || "http://localhost:80",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["epic-spinners"],
  },
  loading: false,
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || "http://localhost:80",
    nodeEnv: process.env.NODE_ENV || "development",
  },
};
