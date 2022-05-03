<template>
  <section
    class="relative my-32 strate-advantages"
    :class="isInversed != false ? 'isInversed' : ''"
  >
    <div class="container grid items-start justify-center grid-cols-12 gap-10">
      <div
        class="col-span-12 lg:col-span-6 strate-advantages__content"
        :class="isInversed != false ? 'lg:order-2' : 'lg:order-1'"
      >
        <p
          class="mx-auto text-xl font-bold md:text-3xl strate-advantages__title"
        >
          {{ title }}
        </p>
        <p class="text-md strate-advantages__text lg:w-11/12">{{ text }}</p>
        <a
          :href="ctaUrl"
          class="inline-flex mb-4 mt-7 text-md lg:text-lg t-link--color"
          >{{ctaLabel}}</a
        >
      </div>
      <div
        class="col-span-12 lg:col-span-6 strate-advantages__image"
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
      default: "Notre projet",
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
      max-width: 70vw;
      max-height: 40vh;
      width: 67rem;
      height: 24rem;
      background: $pink;
      position: absolute;
      bottom: -25%;
      right: -50vw;
      z-index: 0;
      opacity: 0.15;
      border-radius: 0.6rem;

      @include mq($from: desktop) {
        width: 60rem;
        height: 39rem;
        bottom: 15%;
        right: -60%;
      }
    }
  }

  &.isInversed {
    .strate-advantages__image {
      &:before {
        max-width: 40vw;
        max-height: 30vh;
        width: 50rem;
        height: 44rem;
        background: $green1;
        bottom: -35%;
        left: -15vw;

        @include mq($from: tablet) {
          height: 39rem;
          bottom: -15%;
          left: -60%;
        }
        
        @include mq($from: desktop) {
          left: -40%;
        }
      }
    }
  }
}
</style>
