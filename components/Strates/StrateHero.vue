<template>
  <section class="w-full h-[90vh] hero relative">
    
    <div class="container grid grid-cols-1 gap-12 pt-52 lg:grid-cols-4">
      <h1 class="mx-auto text-5xl font-bold text-white lg:col-span-3">
        Le service chauffeur et accompagnateur de votre
        <span class="text-primary-vert1">enfant</span>
      </h1>

      <div class="flex items-end justify-start ">
        <t-button tagName="a" to="/client" class="mb-5" variant=""
          ><span class="text-xl">Commander</span></t-button
        >
      </div>

      <!-- <t-button tagName="a" to="/client" class="mr-5" variant=""
        ><span>Je suis un client</span></t-button
      >
      <t-button tagName="a" to="/driver" variant=""
        ><span>Je suis un chauffeur</span></t-button
      > -->
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateHero",
};
</script>

<style lang="scss">
.hero {
  margin-top: -9.6rem;
  background-image: url("../../static/img/hero.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
