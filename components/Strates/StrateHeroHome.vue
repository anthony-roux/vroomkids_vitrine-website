<template>
  <section
    class="
      strate-hero-home
      w-full
      h-auto
      lg:h-[80vh]
      relative
      mt-[-9.5rem]
      lg:mt-[-13.9rem]
    "
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div class="container py-24 pt-60 lg:py-44 lg:pt-96">
      <div class="lg:w-3/4">
        <h1
          class="mx-auto text-3xl font-black text-white uppercase strate-hero-home__title lg:text-5xl"
        >
          {{ title }}
          <br /><span class="">{{ subtitle }}</span>
        </h1>
        <div
          class="flex flex-col items-start justify-start mt-16 lg:flex-row strate-hero-home__cta-wrapper"
        >
          <t-button
            v-if="ctaLabel === true"
            tagName="a"
            to="/client"
            class="mt-10"
            variant="secondaryWhite"
            ><span class="text-lg">{{ ctaLabel }}</span></t-button
          >
          <a href="">
            <img
              alt="Logo Vroom"
              :src="require(`static/img/illustrations/dl_on_applestore.png`)"
              class="my-3 lg:my-6 mr-6 w-72 h-[5.6rem]"
            />
          </a>
          <a href="">
            <img
              :src="require(`static/img/illustrations/dl_on_playstore.png`)"
              alt=""
              class="my-3 lg:my-6 w-72 h-[5.6rem]"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateHeroHome",
  props: {
    id: {
      type: String,
      required: false,
    },
    backgroundUrl: {
      type: String,
      required: false,
      default: "/img/photography/child+bus_homepage_green2pink.png",
    },
    title: {
      type: String,
      required: false,
      default: "Duis esse est adipisicing elit veniam",
    },
    subtitle: {
      type: String,
      required: false,
      default: "amet ipsum dolore.",
    },
    ctaLabel: {
      type: String,
      required: false,
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
.strate-hero-home {
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
