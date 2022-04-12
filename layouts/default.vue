<template>
  <main
    id="main"
    class="relative font-sans bg-white dark:bg-gray-800 "
  >
    <c-svg-icons />
    <strate-header />

    <transition name="fade">
      <nuxt class="page-content" />
    </transition>
  </main>
</template>

<script>
export default {};
</script>
