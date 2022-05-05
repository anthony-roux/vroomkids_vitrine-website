<template class="home">
  <div id="page-home" class="">
    <strate-hero-home
      title="Vroom accompagne votre enfant en toute sécurité"
      subtitle
    />

    <!----------/ start main /---------->
    <div class="overflow-hidden">
      <div class="mx-auto">
        <strate-big-title text="Confiez votre enfant en toute sécurité !" class="md:-mb-20" />
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
        <strate-reservations title="Comment réserver ?">
          <template v-slot:text1><base-big-letter text="1" /></template>
          <template v-slot:text2><base-big-letter text="2" /></template>
          <template v-slot:text3><base-big-letter text="3" /></template>
          <template v-slot:text4><base-big-letter text="4" /></template>
        </strate-reservations>
        <strate-catchphrase
          backgroundColor="#E0A5EA"
          imageUrl="/img/photography/man_1.png"
          text="vroom s'engage pour une mobilité plus juste avec la commission la plus basse du marché, "
          textHighlight="seulement 15%."
          subtitle=""
          :isInversed="true"
        />
        <strate-garantee />
        <client-only>
          <strate-testimonials>

          </strate-testimonials>
        </client-only>
        <strate-catchphrase
          backgroundColor="#A6EFED"
          imageUrl="/img/photography/femme_rose.png"
          text="faites comme marie pensez vous aussi à"
          textHighlight="votre planète"
          subtitle="vroom est un acteur eco-responsable"
          :isInversed="false"
        />
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
