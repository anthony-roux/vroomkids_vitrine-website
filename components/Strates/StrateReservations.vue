<template>
  <section class="w-full my-20 strate-reservations">
    <div class="container mx-auto">
      <p
        class="mx-auto mb-16 text-3xl font-bold text-center lg:mb-32 strate-big-title__text md:text-5xl"
      >
        {{ title }}
      </p>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          class="relative flex justify-center w-3/4 py-12 mx-auto mt-24 text-sm lg:mt-0"
        >
          <div class="absolute top-[-6rem]">
            <slot name="text1"></slot>
          </div>
          <p class="text-center">
            Précisez simplement vos coordonnées personnelles ainsi que les
            informations relatives à votre trajet dans le formulaire.
          </p>
        </div>
        <div
          class="relative flex justify-center w-3/4 py-12 mx-auto mt-24 text-sm lg:mt-0"
        >
          <div class="absolute top-[-6rem]">
            <slot name="text2"></slot>
          </div>

          <p class="text-center">
            Vous recevrez un email avec la proposition de prix ainsi qu’un
            récapitulatif de votre demande. Vous acceptez la course.
          </p>
        </div>
        <div
          class="relative flex justify-center w-3/4 py-12 mx-auto mt-24 text-sm lg:mt-0"
        >
          <div class="absolute top-[-6rem]">
            <slot name="text3"></slot>
          </div>
          <p class="text-center">
            Nous sélectionnons le chauffeur et le véhicule le plus adapté à vos
            besoins et à celui de l’enfant. Les courses peuvent commencer.
          </p>
        </div>
        <div
          class="relative flex justify-center w-3/4 py-12 mx-auto mt-24 text-sm lg:mt-0"
        >
          <div class="absolute top-[-6rem]">
            <slot name="text4"></slot>
          </div>
          <p class="text-center">
            Le chauffeur vient chercher le(s) enfant(s) et les accompagne
            jusqu’à la prise en charge par un adulte.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateReservations",
  props: {
    title: {
      type: String,
      required: false,
      default: "Duis esse est adipisicing elit veniam",
    },
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss">
.strate-reservations {
  .base-big-letter__item {
    @include mq($until: tablet) {
      font-size: 15rem !important;
      line-height: 15rem !important;
    }
  }
}
</style>
