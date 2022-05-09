<template>
  <section class="relative strate-cities">
    <div class="container grid items-center justify-center h-full grid-cols-12">
      <div class="col-span-12 lg:col-span-7 strate-cities__image"></div>
      <div class="col-span-12 strate-cities__content lg:col-span-5">
        <p class="mx-auto text-xl font-bold strate-cities__title md:text-3xl">
          {{ title }}
        </p>
        <p class="mx-auto text-md strate-cities__paragraph">
          Sit magna incididunt et irure minim consequat. Est do fugiat velit
          anim et non irure in veniam aliqua laboris. Eiusmod sint proident
          dolore dolor labore dolor sunt ullamco enim excepteur.
        </p>
        <div class="">
          <ul
            class="relative strate-cities__list"
            :class="{ isCollapse: isCollapse }"
          >
            <li>Paris, 75</li>
            <li>Montreuil, 93</li>
            <li>Marseille, 75</li>
            <li>Nice, 75</li>
            <li>Nîmes, 30</li>
            <li>Bordeaux, 75</li>
          </ul>
          <a
            @click="isCollapse = !isCollapse"
            class="inline-flex mb-4 mt-7 text-md lg:text-lg t-link--color"
            >{{ isCollapse ? "Voir moins" : "Voir plus" }}</a
          >
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
      default: "Duis esse est adipisicing elit veniam",
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
    height: 8rem;
    overflow: hidden;
    transition: 600ms ease;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background: linear-gradient(
        0deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &.isCollapse {
      transition: 600ms ease;
      height: auto;

      &:after {
        height: 0;
        transition: 600ms ease;
      }
    }
  }
}
</style>
