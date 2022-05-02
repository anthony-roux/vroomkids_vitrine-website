<template>
  <section id="page-contact" class="">
    <strate-hero
      title="Ici c'est la page Contact"
      ctaLabel
      backgroundUrl="/img/photography/hero_others.png"
    />
    <div class="container p-6 mx-auto">
      <h3 class="text-center t-title dark:text-white">Contact</h3>
    </div>
  </section>
</template>

<script>
export default {
    name: "Contact",

  data() {
    return {};
  },
    head() {
    return {
      bodyAttrs: {
        class: "contact",
      },
    };
  },
  methods: {},
};
</script>
