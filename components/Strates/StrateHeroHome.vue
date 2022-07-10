<template>
  <section
    class="strate-hero-home w-full h-auto lg:h-[80vh] relative mt-[-9.5rem] lg:mt-[-11rem] pt-[9.5rem] lg:pt-44"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <client-only>
      <div class="container grid h-full grid-cols-12 gap-x-8">
        <div
          class="flex flex-col justify-center col-span-12 py-12 lg:col-span-8 lg:items-start md:flex-col"
        >
          <core-aov>
            <h2
              class="mx-auto text-3xl font-black text-white uppercase strate-hero-home__title md:text-5xl t-translate-up t-fade-in"
            >
              {{ title }}
              <br /><span v-if="subtitle" class="">{{ subtitle }}</span>
            </h2>
          </core-aov>
          <div
            class="flex flex-col items-start justify-start mt-10 lg:flex-row strate-hero-home__cta-wrapper"
          >
            <core-aov :delay="200" v-if="ctaLabel === true">
              <t-button
                tagName="a"
                to="/client"
                class="mt-10 t-translate-up t-fade-in"
                variant="secondaryWhite"
                ><span class="text-lg">{{ ctaLabel }}</span></t-button
              >
            </core-aov>
            <core-aov :delay="250">
              <a href="" class="t-translate-up t-fade-in">
                <img
                  alt="Logo Vroom"
                  :src="
                    require(`static/img/illustrations/dl_on_applestore.png`)
                  "
                  class="my-3 lg:my-6 mr-6 w-72 h-[5.6rem]"
                />
              </a>
            </core-aov>
            <core-aov :delay="300">
              <a href="" class="t-translate-up t-fade-in">
                <img
                  :src="require(`static/img/illustrations/dl_on_playstore.png`)"
                  alt=""
                  class="my-3 lg:my-6 w-72 h-[5.6rem]"
                />
              </a>
            </core-aov>
          </div>
        </div>

        <div class="relative col-span-12 lg:col-span-4">
          <core-aov :delay="300">
            <div
              class="bottom-0 max-w-2xl mx-auto lg:absolute t-translate-up t-fade-in"
            >
              <img
                alt="Logo Vroom"
                :src="require(`static/img/illustrations/hero_iphone-w-app.png`)"
              />
            </div>
          </core-aov>
        </div>
      </div>
    </client-only>
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
