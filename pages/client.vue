<template>
  <section id="page-client" class="">
    <strate-hero
      title="Ici c'est la page Client"
      subtitle="et ça le subtitle"
      ctaLabel="CTA label"
      backgroundUrl="/img/photography/child+bus_hero-homepage_v2.png"
    />
    <div class="container p-6 mx-auto">
      <h3 class="text-center t-title dark:text-white">Client</h3>
    </div>
  </section>
</template>

<script>
export default {
    name: "Client",

  data() {
    return {};
  },
    head() {
    return {
      bodyAttrs: {
        class: "client",
      },
    };
  },
  methods: {},
};
</script>
