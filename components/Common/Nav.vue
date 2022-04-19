<template>
  <header class="sticky top-0 z-20 flex items-center w-full">
    <div class="container flex items-center justify-between px-6 py-6 mx-auto">
      <div class="flex items-center justify-between w-full">
        <img
          :src="require(`../../static/img/logo-vroom.png`)"
          alt=""
          class="z-20 my-6 max-w-[9.7rem]"
        />
        <nav
          class="items-center hidden text-lg font-sen dark:text-white lg:flex"
        >
          <nuxt-link
            to="/"
            class="flex py-1 mx-6 t-link hover:text-primary-vert1"
          >
            Accueil
          </nuxt-link>
          <nuxt-link
            to="/service"
            class="flex py-1 mx-6 t-link hover:text-primary-vert1"
          >
            Notre service
          </nuxt-link>
          <nuxt-link
            to="/price"
            class="flex py-1 mx-6 t-link hover:text-primary-vert1"
          >
            Tarif
          </nuxt-link>
          <nuxt-link
            to="/aboutUs"
            class="flex py-1 mx-6 t-link hover:text-primary-vert1"
          >
            Qui sommes-nous ?
          </nuxt-link>
        </nav>
        <button class="flex flex-col ml-4 lg:hidden">
          <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"> </span>
          <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"> </span>
          <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"> </span>
        </button>
      </div>
      <div
        class="flex flex-wrap items-center font-black text-gray-800 uppercase dark:text-white"
      ></div>
    </div>
  </header>
</template>
<script>
export default {
  name: "NavBar",

  data() {
    return {
      isBlack: false,
    };
  },
};
</script>

<style lang="scss" scoped>
body {
  nav {
    a {
      color: $white;
    }
  }
  &:not(.homepage) {
    nav {
      a {
        color: $black;
      }
    }
  }
}
</style>
