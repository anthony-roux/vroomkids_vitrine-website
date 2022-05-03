<template class="home">
  <div id="page-home" class="">
    <strate-hero-home />

    <!----------/ start main /---------->
    <div class="container p-6 mx-auto">
      <strate-big-title text="Confier son enfant en toute sécurité !" />
      <base-big-letter text="whaaaow" />
    </div>
    <strate-catchphrase
      backgroundColor="#E0A5EA"
      imageUrl="/img/photography/man_1.png"
      text="vroom s'engage pour une mobilité avec la commission la plus basse du marché, seulement 15%."
      textHighlight="plus juste"
      subtitle=""
      :isInversed="true"
    />
    <strate-catchphrase
      backgroundColor="#A6EFED"
      imageUrl="/img/photography/femme_rose.png"
      text="faites comme marie pensez vous aussi à"
      textHighlight="votre planète"
      subtitle="vroom est un acteur eco-responsable"
      :isInversed="false"
    />

    <!----------/ end main /---------->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters({
      isHome: "global/getIsHome",
      header: "global/getGlobal",
      screen: "global/getScreen",
    }),
  },

  data() {
    return {
      currentSlug: "home",
      page: this.$route.name,
    };
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
