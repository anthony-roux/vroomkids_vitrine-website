<template>
  <section class="sticky top-0 z-20 h-24 sm:h-32 flex items-center w-full bg-gray-100">
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
          <a href="#" class="py-2 px-6 flex hover:text-black"> Item </a>
          <a href="#" class="py-2 px-6 flex hover:text-black"> Item </a>
          <a href="#" class="py-2 px-6 flex hover:text-black"> Item </a>
          <a href="#" class="py-2 px-6 flex hover:text-black"> Item </a>
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
          text-3xl
          flex
          items-center
        "
      >
        <span class="text-xl ml-3 mt-1">
          VroomKids
        </span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
