<template>
  <header
    class="sticky top-0 z-20 flex items-center w-full bg-gray-100"
  >
    <div class="container mx-auto px-6 py-6 flex items-center justify-between">
      <div class="flex items-center">
        <nav
          class="
            font-sen
            text-gray-800
            dark:text-white
            uppercase
            text-lg
            lg:flex
            items-center
            hidden
          "
        >
          <nuxt-link to="/" class="t-link py-1 mx-6 flex hover:text-black"> Accueil </nuxt-link>
          <nuxt-link to="/service" class="t-link py-1 mx-6 flex hover:text-black"> Notre service </nuxt-link>
          <nuxt-link to="/price" class="t-link py-1 mx-6 flex hover:text-black"> Tarif </nuxt-link>
          <nuxt-link to="/aboutUs" class="t-link py-1 mx-6 flex hover:text-black"> Qui sommes-nous ? </nuxt-link>
        </nav>
        <button class="lg:hidden flex flex-col ml-4">
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
          <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
        </button>
      </div>
      <div
        class="
          uppercase
          text-gray-800
          dark:text-white
          font-black
          flex
          flex-wrap
          items-center
        "
      >
        <h3 class="text-xl ml-3 mt-1 mr-5 font-black"> VroomKids </h3>
        <t-button tagName="a" to="/client" class="mr-5" variant=""
          >Je suis un client</t-button
        >
        <t-button tagName="a" to="/driver" variant=""
          >Je suis un chauffeur</t-button
        >
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
