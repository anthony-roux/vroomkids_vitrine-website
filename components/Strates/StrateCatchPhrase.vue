<template>
  <section
    class="strate-catchphrase"
    :style="{ background: `${backgroundColor}` }"
  >
    <div class="container py-24 pt-60 lg:py-44 lg:pt-96">
      <div class="w-10/12 lg:w-3/4">
        <h1
          class="
            mx-auto
            text-3xl
            font-black
            text-white
            uppercase
            strate-hero__title
            lg:text-5xl
          "
        >
          {{ text }}
          <br /><span class="text-pink">{{ textHighlight }}</span>
        </h1>
        <div class="flex items-end justify-start strate-hero__cta-wrapper">
          <t-button
            tagName="a"
            to="/client"
            class="mt-10"
            variant="secondaryWhite"
            ><span class="text-lg">ghggk</span></t-button
          >
        </div>
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
      default: "#E0A5EA",
    },
    imageUrl: {
      type: String,
      required: false,
      default: "/img/photography/child+bus_homepage_green2pink.png",
    },
    text: {
      type: String,
      required: false,
      default: "Duis esse est adipisicing elit veniam",
    },
    textHighlight: {
      type: String,
      required: false,
      default: "amet ipsum dolore.",
    },
    subtitle: {
      type: String,
      required: false,
      default: "amet ipsum dolore.",
    },
    isInverse: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: function () {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss"></style>
