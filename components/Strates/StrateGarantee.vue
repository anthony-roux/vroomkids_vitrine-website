<template>
  <section class="py-12 mb-32 md:mb-60 strate-garantee bg-grey-lighter">
    <div class="container grid items-start justify-center grid-cols-12 gap-10 md:justify-center">
      <div class="col-span-12 py-6 lg:col-span-4 strate-garantee__content md:flex-col md:flex md:justify-center md:items-center lg:items-start">
        <div class="flex items-start mb-6 md:flex-col lg:flex-row md:items-center lg:items-start ">
          <base-use-svg id="service" size="xxl" color="green1" />

          <p class="mx-auto ml-4 text-xl font-bold strate-garantee__title">
            Service client et support 24/7.
          </p>
        </div>
        <p class="w-11/12 text-sm md:w-2/3 lg:w-11/12 strate-garantee__text md:text-center lg:text-left">
          Un service client dédié 24h/24 et 7j/7 toujours à votre écoute pour
          vous aider à résoudre tout problème.
        </p>
      </div>

      <div class="col-span-12 py-6 md:flex-col md:flex md:justify-center md:items-center lg:col-span-4 strate-garantee__content ">
        <div class="flex items-start mb-6 md:items-center lg:items-start md:flex-col lg:flex-row">
          <base-use-svg id="call" size="xxl" color="green1" />
          <p class="mx-auto ml-4 text-xl font-bold strate-garantee__title">
            Votre sécurité, notre priorité.
          </p>
        </div>
        <p class="w-11/12 text-sm md:w-2/3 lg:w-11/12 strate-garantee__text md:text-center lg:text-left">
          Tenez vos proches informés sur vos itinéraires de voyage ou appelez
          notre service d'urgence en cas de besoin.
        </p>
      </div>
      <div class="col-span-12 py-6 lg:col-span-4 strate-garantee__content md:flex-col md:flex md:justify-center md:items-center">
        <div class="flex items-start mb-6 md:items-center lg:items-start md:flex-col lg:flex-row">
          <base-use-svg id="star" size="xxl" color="green1" />
          <p class="mx-auto ml-4 text-xl font-bold strate-garantee__title">
            Partenaires chauffeurs les mieux notés.
          </p>
        </div>
        <p class="w-11/12 text-sm md:w-2/3 lg:w-11/12 strate-garantee__text md:text-center lg:text-left">
          Tous nos chauffeurs-partenaires sont antécédents vérifiés et formés
          pour offrir uniquement la meilleure expérience.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateGarantee",
  props: {},
  data: function () {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss">

</style>
