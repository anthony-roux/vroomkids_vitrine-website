<template>
  <section id="page-about-us" class="">
    <strate-hero
      title="Ici c'est la page about us"
      subtitle="et ça le subtitle"
      ctaLabel="CTA label"
      backgroundUrl="/img/photography/child+bus_hero-homepage_v2.png"
    />
    <div class="container p-6 mx-auto">
      <h3 class="text-center t-title dark:text-white">Qui sommes nous ?</h3>
    </div>
  </section>
</template>

<script>
export default {
    name: "AboutUs",

  data() {
    return {};
  },
  head() {
    return {
      bodyAttrs: {
        class: "aboutUs",
      },
    };
  },
  methods: {},
};
</script>
