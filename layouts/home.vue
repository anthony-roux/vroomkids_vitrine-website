<template>
  <main class="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
    <div class="flex items-start justify-between">
      <div class="flex flex-col w-full md:space-y-4">
        <NavBar></NavBar>
        <nuxt>
        </nuxt>
      </div>
    </div>
  </main>
</template>
<script>
import NavBar from "../components/NavBar/nav-bar";

export default {
  components: { NavBar },
};
</script>
