<template>
  <div id="page-service" class="">
    <strate-hero title="Ici c'est la page service" subtitle="et ça le subtitle" ctaLabel="CTA label" backgroundUrl="/img/photography/voiture-jouet-hero.png" />
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
