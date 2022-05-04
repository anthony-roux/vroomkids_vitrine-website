<template>
  <section
    class="strate-catchphrase flex md:min-h-[47.5rem] my-32"
    :style="{ background: `${backgroundColor}` }"
  >
    <div class="container relative grid items-center grid-cols-12 gap-x-8">
      <div
        :class="isInversed != false ? 'order-2' : 'order-1'"
        class="col-span-12 pt-12 lg:col-span-8 z-10"
      >
        <div class="flex flex-col items-center">
          <p
            class="
              mx-auto
              text-3xl
              font-black
              text-center text-white
              uppercase
              strate-hero__title
              lg:text-6xl
            "
          >
            {{ text }}
            <br /><span class="text-primary-vert1">{{ textHighlight }}</span>
          </p>
          <p
            class="
              pt-2
              mx-auto
              text-sm
              font-black
              text-center text-white
              uppercase
              strate-hero__title
              lg:text-md
            "
          >
            {{ subtitle }}
          </p>
        </div>
      </div>
      <div
        class="col-span-12 lg:col-span-4"
        :class="isInversed != false ? 'order-1' : 'order-2'"
      >
        <div
          :class="
            isInversed != false
              ? 'left-0 absolute lg:flex hidden'
              : ' absolute right-0'
          "
          class="bottom-0"
        >
          <img
            alt="Femme rose"
            :src="imageUrl"
            class="
              lg:max-w-[75rem]
              md:max-w-[28rem]
              max-w-[18rem]
              object-none object-left
            "
          />
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
