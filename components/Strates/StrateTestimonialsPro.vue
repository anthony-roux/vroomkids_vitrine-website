<template>
  <section class="strate-testimonials">
    <div
      class="flex flex-col items-center justify-center h-full mx-auto max-w-container-3xl"
    >
      <client-only>
        <div class="container text-center">
          <core-aov :delay="250">
            <p
              class="mx-auto mb-16 text-3xl font-bold text-center strate-testimonials__title t-translate-down t-fade-in"
            >
              {{ title }}
            </p>
          </core-aov>
          <core-aov :delay="350">
            <p class="text-xl t-translate-down t-fade-in">{{ subtitle }}</p>
          </core-aov>
        </div>
      </client-only>
      <client-only>
        <core-aov :delay="400">
          <carousel
            :autoplay="true"
            :autoplayHoverPause="true"
            :perPageCustom="[
              [320, 1],
              [768, 2],
              [1024, 2],
              [1440, 3],
            ]"
            :loop="true"
            :autoplayTimeout="9000"
            :speed="1000"
            paginationActiveColor="#AD0EC7"
            paginationColor="#EBEBEB"
            :paginationSize="20"
            :paginationPadding="10"
            class="max-w-full mt-24 strate-testimonials__slider t-translate-down t-fade-in"
          >
            <slide class="">
              <base-testimonial-pro
                name="Francis, 43 ans"
                text='"C’est une bonne expérience sociale et humaine qui m’as permis d’abord de découvrir les gens mais aussi la ville de Paris."'
                date="Chauffeur Vroom depuis 2 ans"
                imageUrl="/img/photography/chauffeur1.png"
              />
            </slide>
            <slide class="">
              <base-testimonial-pro
                name="Emma, 29 ans"
                text='"J’aime beaucoup ce métier car ma passion est de conduire, faire chauffeur pour Vroom m’a permi de rencontrer plein de personne et de découvrir différentes villes."'
                date="Chauffeuse Vroom depuis 3 ans"
                imageUrl="/img/photography/chauffeur2.png"
              />
            </slide>
            <slide class="">
              <base-testimonial-pro
                name="Junior, 30 ans"
                text='"Travail très agréable qui permet d’avoir une certaine flexibilité. Etre au contact d’une population jeune est agréable. On se sent utile et je trouve ça très satisfaisant."'
                date="Chauffeur Vroom depuis 2 ans"
                imageUrl="/img/photography/chauffeur3.png"
              />
            </slide>
            <slide class="">
              <base-testimonial-pro
                name="Sonia"
                text='"J’adore conduire, alors mon expérience chez Vroom est une réelle passion. Je fais mon métier tout en exercant ma passion pour la conduite. Merci."'
                date="Chauffeuse Vroom depuis 4 ans"
                imageUrl="/img/photography/chauffeur4.png"
              />
            </slide>
            <slide class="">
              <base-testimonial-pro
                name="Camille, 28 ans"
                text='"Cela fait maintenant deux ans que je suis chauffeur pour Vroom. Nous sommes écoutés et respectés par la hierarchie et le travail est agréable."'
                date="Chauffeur Vroom depuis le début"
                imageUrl="/img/photography/chauffeur5.png"
              />
            </slide>
            <slide class="">
              <base-testimonial-pro
                name="Nathalie, 36 ans"
                text='"J’adore les enfants et je suis passionné par la conduite. Je suis donc très à l’aise dans ce métier et je remercie Vroom de sa confiance. Je recommande."'
                date="Chauffeuse Vroom depuis 8 mois"
                imageUrl="/img/photography/chauffeur6.png"
              />
            </slide>
          </carousel>
        </core-aov>
      </client-only>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateTestimonialsPro",
  props: {
    backgroundUrl: {
      type: String,
      required: false,
      default: "/img/photography/hero_others.png",
    },
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
  data: function () {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss">
.strate-testimonials {
  .base-big-letter {
    &__item {
      @include mq($until: tablet) {
        font-size: 7rem !important;
      }
    }
  }
  .VueCarousel {
    &-dot {
      transition: 250ms ease;
      border-radius: 1.5rem !important;
      width: 2rem !important;
      height: 1rem !important;

      &:focus {
        outline: none !important;
      }
      &--active {
        width: 4rem !important;
      }
    }
  }
}
</style>
