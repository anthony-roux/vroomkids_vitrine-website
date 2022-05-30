<template>
  <!-- <section class="">
    <div></div>
  </section> -->
  <section class="my-32 md:my-60 bg-gradient-r-gradient-green2pink">
    <!-- <div class="bg-white left-0">
      <base-big-letter
        class="big-letter lg:pl-32 md:pl-32 lg:block md:block flex"
        text="vroom"
      />
    </div> -->
    <div class="container grid grid-cols-12 flex-col-reverse h-full">
      <div
        class="
          lg:order-1
          md:order-1
          order-2
          py-36
          flex flex-col
          items-center
          lg:col-span-6
          md:col-span-6
          col-span-12
        "
      >
        <h2
          class="
            mx-auto
            text-2xl
            lg:max-w-none
            md:max-w-none
            max-w-md
            font-extrabold
            text-white
            md:text-3xl
          "
        >
          Gérez la course de votre enfant
        </h2>
        <div class="flex items-start justify-start mt-10 md:flex-row">
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
              class="
                my-3
                lg:my-6
                mr-6
                lg:w-72 lg:h-[5.6rem]
                md:w-72 md:h-[5.6rem]
                w-64
                h-[4.6rem]
              "
            />
          </a>
          <a href="">
            <img
              :src="require(`static/img/illustrations/dl_on_playstore.png`)"
              alt=""
              class="
                my-3
                lg:my-6
                mr-6
                lg:w-72 lg:h-[5.6rem]
                md:w-72 md:h-[5.6rem]
                w-64
                h-[4.6rem]
              "
            />
          </a>
        </div>
      </div>
      <div
        class="
          lg:order-2
          md:order-2
          order-1
          py-12
          h-full
          lg:col-span-6
          md:col-span-6
          col-span-12
          relative
          flex
          justify-center
        "
      >
        <div class="absolute lg:bottom-0 md:bottom-48 flex flex-row">
          <img
            alt="Logo Vroom"
            :src="require(`static/img/illustrations/Group74.png`)"
            class=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateManageRace",
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
    // subtitle: {
    //   type: String,
    //   required: false,
    //   default: "amet ipsum dolore.",
    // },
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
.big-letter {
}
</style>
