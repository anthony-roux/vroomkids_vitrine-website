<template>
  <section class="page404">
    <div
      class="
        page404__container
        container
        mx-auto
        flex flex-col
        my-40
        max-w-screen-sm
      "
    >
      <h4 class="page404__title text-9xl mx-auto mb-10">{{ error.statusCode }}</h4>
      <p class="page404__paragraph text-2xl mx-auto text-center">
        Cul de sac ?
      </p>
      <t-button tagName="a" to="/" class="text-xl mx-auto mt-10 " variant="secondary"
        >Retourner à l'accueil</t-button
      >
    </div>
  </section>
</template>
<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>
