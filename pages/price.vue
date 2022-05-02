<template>
  <section id="page-price" class="">
    <strate-hero
      title="Ici c'est la page price"
      backgroundUrl="/img/photography/hero_others.png"
    />
    <div class="container p-6 mx-auto">
      <h3 class="text-center t-title dark:text-white">Price</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "Price",

  data() {
    return {};
  },
  head() {
    return {
      bodyAttrs: {
        class: "price",
      },
    };
  },
  methods: {},
};
</script>
