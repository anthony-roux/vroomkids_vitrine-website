<template class="page">
  <div id="page-home" class="">
       

    <strate-hero />
    <div class="container p-6 mx-auto">
      <h3 class="text-center t-title dark:text-white">Homepage</h3>
       {{$global.style}}
    </div>
  </div>
</template>

<script>
export default {
  name: "homepage",

  data() {
    return {};
  },
  head() {
    return {
      bodyAttrs: {
        class: "homepage",
      },
    };
  },
  methods: {},
};
</script>

<style></style>
