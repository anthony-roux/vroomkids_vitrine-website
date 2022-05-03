<template>
  <section
    class="strate-catchphrase flex relative py-24 md:min-h-[47.5rem]"
    :style="{ background: `${backgroundColor}` }"
  >
    <div class="container grid grid-cols-5 gap-x-8 items-center">
      <div
        :class="isInversed != false ? 'order-2' : 'order-1'"
        class="col-span-3"
      >
        <div class="flex flex-col items-center">
          <h1
            class="
              mx-auto
              text-3xl
              font-black
              text-white
              uppercase
              strate-hero__title
              lg:text-6xl
              text-center
            "
          >
            {{ text }}
            <br /><span class="text-primary-vert1">{{ textHighlight }}</span>
          </h1>
          <br />
          <br />
          <h2
            class="
              pt-2
              mx-auto
              text-sm
              font-black
              text-white
              uppercase
              strate-hero__title
              lg:text-md
              text-center
            "
          >
            {{ subtitle }}
          </h2>
        </div>
      </div>
      <div
        :class="isInversed != false ? 'order-1' : 'order-2'"
        class="col-span-2 absolute right-20 bottom-0"
      >
        <img
          alt="Femme rose"
          :src="imageUrl"
          class="lg:max-w-[80rem] md:max-w-[40rem] max-w-[20rem]"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateCatchPhrase",
  props: {
    backgroundColor: {
      type: String,
      required: false,
      default: "#A6EFED",
    },
    imageUrl: {
      type: String,
      required: false,
      default: "/img/photography/femme_rose.png",
    },
    text: {
      type: String,
      required: false,
      default: "faites comme marie pensez vous aussi à",
    },
    textHighlight: {
      type: String,
      required: false,
      default: "votre planète",
    },
    subtitle: {
      type: String,
      required: false,
      default: "vroom est un acteur eco-responsable",
    },
    isInversed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss"></style>
