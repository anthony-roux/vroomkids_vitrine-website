<template>
  <section
    class="sticky top-0 z-20 h-24 sm:h-32 flex items-center w-full bg-gray-100"
  >
    <div class="container mx-auto px-6 flex items-center justify-between">
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
          <a href="/" class="py-2 px-6 flex hover:text-black"> Accueil </a>
          <nuxt-link to="/service" class="py-2 px-6 flex hover:text-black"> Notre service </nuxt-link>
          <nuxt-link to="/price" class="py-2 px-6 flex hover:text-black"> Tarif </nuxt-link>
          <nuxt-link to="/aboutUs" class="py-2 px-6 flex hover:text-black"> Qui sommes-nous ? </nuxt-link>
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
          items-center
        "
      >
        <span class="text-xl ml-3 mt-1 mr-5"> VroomKids </span>
        <t-button tagName="a" to="/client" class="mr-5" variant=""
          >Je suis un client</t-button
        >
        <t-button tagName="a" to="/driver" variant=""
          >Je suis un chauffeur</t-button
        >
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
