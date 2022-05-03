<template class="home">
  <div id="page-home" class="">
    <strate-hero-home
      title="Vroom accompagne votre enfant en toute sécurité"
      subtitle
    />

    <!----------/ start main /---------->
    <div class="overflow-hidden">
      <div class="container p-6 mx-auto">
        <strate-big-title text="Confier son enfant en toute sécurité !" />
        <strate-advantages
          title="Un accompagnement indispensable"
          text="Vromm vous assure un service complet et entièrement sécurisé, nous choisissons rigoureusement nos chauffeurs et vous assure un accompagnement en toute confiance lors des trajets de vos enfants."
          ctaLabel="Notre projet"
          ctaUrl="#"
          :isInversed="false"
        />
        <strate-advantages
          title="Gagnez du temps dans votre journée."
          text="Vous êtes un parent avec un emploi du temps très chargé et vous courrez tout les jours pour emmener votre enfant à ses défférentes activités ? Prenez votre temps et ne renversez plus votre café sur votre chemise en le buvant trop vite, faites confiance à Vroom pour plus de sérénité."
          imageUrl="/img/photography/strate_advantage2.png"
          ctaLabel="Télécharger l'application"
          ctaUrl="#"
          :isInversed="true"
        />
        <base-big-letter text="whaaow" />
      </div>
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
