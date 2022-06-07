<template>
  <section id="page-about-us" class="">
    <strate-hero
      title="Qui sommes-nous ?"
      ctaLabel
      backgroundUrl="/img/photography/hero_others.png"
    />
    <div class="overflow-hidden">
      <div class="mx-auto">
        <strate-advantages
          title="Que proposons-nous?"
          text="Vroom est un service de chauffeur qui s’occupe du déplacement de votre enfant. Ce dernier pourra aller à son cours de sport, de théâtre ou à l’école sans encombre avec un service de qualité. 
          Notre engagement s’inscrit dans une continuité de valeurs fortes qui sont gages de qualités, à savoir :"
          :isInversed="false"
        />
        <strate-reservations
          text4
          subtitle1="Qualité de service"
          subtitle2="Sécurité avant tout"
          subtitle3="Eco-responsable"
        >
          <template v-slot:text1><base-big-letter text="1" /></template>
          <template v-slot:text2><base-big-letter text="2" /></template>
          <template v-slot:text3><base-big-letter text="3" /></template>
        </strate-reservations>
        <strate-advantages
          title="A l’écoute de vos besoins"
          text="Vroom est à l’écoute de la demande de ses clients. C’est pour cela que nous vous proposons un service précis à la hauteur. Les véhicules sont adaptés, le co-voiturage et la mutualisation des trajets sont bien évidemment possibles et répondent à notre problématique eco-responsable. 
          Notre service reste également disponible 7j/7 et propose des collaborations avec les établissements scolaires et extra-scolaires."
          :isInversed="true"
        />

        <strate-text
          title="Sécurité et respect des régles"
          text="Vroom travaille dans le respect des normes et réglementations. Notre système de recrutement demande une certaine rigueur et demande également des diplômes et certifications spécifiques à nos futurs chauffeurs. 
          
          Pour plus d’informations sur ces aspects, l’équipe reste à votre disposition pour répondre à toutes vos quéstions, nous vous proposons également un lien vers les lois en vigueur “LOI n° 2014-1104 du 1er octobre 2014” "
          backgroundColor="#E9FBFB"
        />
        <client-only>
          <strate-testimonials> </strate-testimonials>
        </client-only>
        <strate-catchphrase
          backgroundColor="#A6EFED"
          imageUrl="/img/photography/femme_rose.png"
          text="faites comme marie pensez vous aussi à"
          textHighlight="votre planète"
          colorHighlight="#2CC5C0"
          subtitle="vroom est un acteur eco-responsable"
          :isInversed="false"
        />
      </div>
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
