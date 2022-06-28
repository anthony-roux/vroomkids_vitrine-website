<template>
  <section id="page-price" class="">
    <strate-hero
      title="Ici c'est la page price"
      backgroundUrl="/img/photography/hero_others.png"
    />

    <div class="overflow-hidden">
      <div class="mx-auto">
        <strate-tarif />
      </div>
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
