<template>
  <section
    class="relative my-32 md:my-60 strate-advantages"
    :class="isInversed != false ? 'isInversed' : ''"
  >
    <div class="container grid items-start justify-center grid-cols-12 gap-10">
      <div
        class="col-span-12 lg:col-span-5 strate-advantages__content"
        :class="isInversed != false ? 'lg:order-2' : 'lg:order-1'"
      >
        <p
          class="mx-auto text-xl font-bold md:text-3xl strate-advantages__title"
        >
          {{ title }}
        </p>
        <p class="text-md strate-advantages__text lg:w-11/12">{{ text }}</p>
        <a
          v-if="ctaLabel"
          :href="ctaUrl"
          class="inline-flex mb-4 mt-7 text-md lg:text-lg t-link--color"
          >{{ ctaLabel }}</a
        >
      </div>
      <div
        class="col-span-12 lg:col-span-7 strate-advantages__image"
        :class="isInversed != false ? 'lg:order-1' : 'lg:order-2'"
      >
        <img alt="Logo Vroom" :src="imageUrl" class="relative rounded" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateAdvantages",
  props: {
    imageUrl: {
      type: String,
      required: false,
      default: "/img/photography/strate_advantage1.png",
    },
    title: {
      type: String,
      required: false,
      default: "Un accompagnement indispensable",
    },
    text: {
      type: String,
      required: false,
      default:
        "Vromm vous assure un service complet et entièrement sécurisé, nous choisissons rigoureusement nos chauffeurs et vous assure un accompagnement en toute confiance lors des trajets de vos enfants.",
    },
    ctaLabel: {
      type: String,
      required: false,
    },
    ctaUrl: {
      type: String,
      required: false,
      default: "#",
    },
    isInversed: {
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

<style lang="scss">
.strate-advantages {
  &__image {
    position: relative;
    img {
      z-index: 1;
    }
    &:before {
      content: "";
      width: 67rem;
      max-width: 70vw;
      height: calc(100% + 5rem);
      background: $pink;
      position: absolute;
      bottom: 0;
      right: -50%;
      transform: translateY(2.5rem);
      z-index: 0;
      opacity: 0.15;
      border-radius: 0.6rem;

      @include mq($from: desktop) {
        height: calc(100% + 10rem);
        transform: translateY(5rem);
      }
    }
  }

  &.isInversed {
    .strate-advantages__image {
      &:before {
        background: $green1;
        left: -50%;
      }
    }
  }
}
</style>
