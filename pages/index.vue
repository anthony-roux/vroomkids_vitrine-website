<template class="home">
  <div id="page-home" class="">
    <strate-hero-home />

    <!----------/ start main /---------->
    <div class="container p-6 mx-auto">
      <strate-big-title text="Confier son enfant en toute sécurité !" />
      <base-big-letter text="whaaow" />
    </div>
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
