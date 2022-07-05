<template>
  <section class="relative my-32 strate-cities md:my-60">
    <div
      class="container grid items-center justify-center h-full grid-cols-12 mx-auto lg:gap-14 lg:max-w-container-xl"
    >
      <div class="order-2 col-span-12 lg:order-1 lg:col-span-7 strate-cities__image">
        <img
          alt="iphone with app"
          :src="require(`static/img/illustrations/camion+map_entier.png`)"
          class="mx-auto"
        />
      </div>
      <div class="order-1 col-span-12 lg:order-2 strate-cities__content lg:col-span-4">
        <p class="mx-auto text-xl font-bold strate-cities__title md:text-3xl">
          {{ title }}
        </p>
        <p class="mx-auto my-6 text-md strate-cities__paragraph">
          Nous nous développons petit à petit dans toute la france, pour plus de
          précisions rendez-vous sur notre page dédiée et vérifiez votre
          éligibilité à notre service.
        </p>
        <div class="my-10">
          <ul
            class="relative grid grid-cols-3 gap-4 strate-cities__list"
            :class="{ isCollapse: isCollapse }"
          >
            <li class="font-bold text-pink">Paris</li>
            <li class="font-bold text-pink">Lyon</li>
            <li class="font-bold text-pink">Nice</li>
            <li class="font-bold text-pink">Montpellier</li>
            <li class="font-bold text-pink">Calais</li>
            <li class="font-bold text-pink">Nantes</li>
            <li class="font-bold text-pink">Ajaccio</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateCities",
  props: {
    backgroundUrl: {
      type: String,
      required: false,
      default: "/img/photography/hero_others.png",
    },
    title: {
      type: String,
      required: false,
      default: "Dans quelles villes est disponible Vroom ?",
    },
    ctaLabel: {
      type: String,
      required: false,
      default: "Voir plus.",
    },
  },
  data: function () {
    return {
      isCollapse: false,
    };
  },
  methods: {
    openMenu() {
      this.isCollapse = true;
    },
  },
};
</script>

<style lang="scss">
.strate-cities {
  &__list {
    li {
      position: relative;
      margin-left: 1.5rem;
      &::before {
        content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='5' stroke='%23B21DCB' stroke-width='2'/%3E%3Ccircle cx='6' cy='6' r='2' fill='%23B21DCB'/%3E%3C/svg%3E%0A");
        position: absolute;
        left: -15px;
        top: 0.1rem;
      }
    }

  }
}
</style>
