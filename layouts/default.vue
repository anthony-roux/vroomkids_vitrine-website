<template>
  <main
    class="
      dark:bg-gray-800
      font-sans
      bg-white
      relative
      h-screen
      box-sha
      overflow-auto overflow-y-scroll
    "
  >
    <c-nav-bar />
    <transition name="fade">
      <nuxt></nuxt>
    </transition>
  </main>
</template>

<script>
export default {};
</script>
