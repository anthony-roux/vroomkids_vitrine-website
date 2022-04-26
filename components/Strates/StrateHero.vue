<template>
  <section
    class="
      strate-hero
      w-full
      h-auto
      lg:h-[90vh]
      relative
      mt-[-9.5rem]
      lg:mt-[-13.9rem]
    "
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div class="container py-24 pt-60 lg:py-44 lg:pt-96 ">
      <div class="w-10/12 lg:w-3/4">
        <h1
          class="mx-auto text-3xl font-black text-white uppercase strate-hero__title lg:text-5xl"
        >
          {{ title }}
          <br /><span class="text-pink">{{ subtitle }}</span>
        </h1>
        <div class="flex items-end justify-start strate-hero__cta-wrapper">
          <t-button tagName="a" to="/client" class="mt-10" variant="fourth"
            ><span class="text-lg">{{ ctaLabel }}</span></t-button
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateHero",
  props: {
    id: {
      type: String,
      required: true,
    },
    backgroundUrl: {
      type: String,
      required: true,
      default: "/img/photography/child+bus_hero-homepage_v2.png",
    },
    title: {
      type: String,
      required: true,
      default: "Duis esse est adipisicing elit veniam",
    },
    subtitle: {
      type: String,
      required: true,
      default: "amet ipsum dolore.",
    },
    ctaLabel: {
      type: String,
      required: true,
      default: "En savoir plus.",
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
.strate-hero {
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
