<template>
  <section
    class="
      strate-hero
      w-full
      h-[50vh]
      relative
      mt-[-9.5rem]
      lg:mt-[-11rem]
      pt-[9.5rem]
      lg:pt-44
    "
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="flex justify-center text-sm p-6 bg-gray-100">
          <slot />
          <p>
            Précisez simplement vos coordonnées personnelles ainsi que les
            informations relatives à votre trajet dans le formulaire.
          </p>
        </div>
        <div class="flex justify-center text-sm p-6 bg-gray-100">
          <slot />

          <p>
            Vous recevrez un email avec la proposition de prix ainsi qu’un
            récapitulatif de votre demande. Vous acceptez la course.
          </p>
        </div>
        <div class="flex justify-center text-sm p-6 bg-gray-100">
          <slot />
          <p>
            Nous sélectionnons le chauffeur et le véhicule le plus adapté à vos
            besoins et à celui de l’enfant. Les courses peuvent commencer.
          </p>
        </div>
        <div class="flex justify-center text-sm p-6 bg-gray-100">
          <slot />
          <p>
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
.strate-hero {
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
