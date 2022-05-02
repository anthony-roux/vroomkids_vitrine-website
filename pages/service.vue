<template>
  <div id="page-service" class="">
    <strate-hero
      title="Notre projet, votre liberté"
      backgroundUrl="/img/photography/hero_others.png"
    />
    <div class="container p-6 mx-auto">
      <h3 class="text-center t-title dark:text-white">Service</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",

  data() {
    return {};
  },
  head() {
    return {
      bodyAttrs: {
        class: "service",
      },
    };
  },
  methods: {},
};
</script>
