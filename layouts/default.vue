<template>
  <main id="main" class="relative font-sans bg-white dark:bg-gray-800">
    <c-svg-icons />
    <c-nav-bar class="" />

    <transition name="fade">
      <nuxt class="page-content" />
    </transition>
    <c-footer />
  </main>
</template>

<script>
export default {};
</script>
