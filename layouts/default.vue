<template>
  <main id="main"
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
    <c-svg-icons />
    <c-nav-bar />
    <transition name="fade">
      <nuxt class="page-content" />
    </transition>
  </main>
</template>

<script>
export default {};
</script>
