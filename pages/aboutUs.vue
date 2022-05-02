<template>
  <section id="page-about-us" class="">
    <strate-hero
      title="Qui sommes-nous ?"
      ctaLabel=""
      backgroundUrl="/img/photography/hero_others.png"
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
