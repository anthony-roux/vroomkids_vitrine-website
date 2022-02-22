<template lang="">
  <div class="container m-auto">
    <section class="my-14">
      <p class="text-2xl">TYPOGRAPHY</p>
      <hr />
      <h1 class="text-3xl">text-3xl</h1>
      <h2 class="text-2xl">text-2xl</h2>
      <h3 class="text-xl">text-xl</h3>
      <h4 class="text-lg">text-lg</h4>
      <h5 class="text-base">text-base</h5>

      <p class="t-text max-w-3xl my-4">
        t-text : <br />Magna labore cupidatat aliqua ex consequat commodo ea et
        irure eu magna magna.Minim aliqua ex duis id eiusmod qui tempor
        consectetur occaecat consectetur commodo.
      </p>
      <p class="t-text--caps max-w-lg my-4">t-text-caps</p>

      <span class="text-xl t-text-gradient">t-text-gradient</span>
      <div class="t-text-hover">
        <span class="text-xl t-text-gradient">t-text-hover</span>
      </div>
    </section>
    <section class="my-14">
      <p class="text-2xl">CTA</p>
      <hr />

      <div class="ctas flex justify-between items-center my-14">
        <div class="">
          <a href="t-link my-4" class="t-link">I am a link</a>
        </div>
        <t-button tagName="a" href="https://www.google.fr/" variant=""
          >primary button</t-button
        >
        <t-button tagName="a" href="https://www.google.fr/" variant="secondary"
          >secondary button</t-button
        >
        <t-button tagName="a" href="https://www.google.fr/" variant="success"
          >success button</t-button
        >
        <t-button tagName="a" href="https://www.google.fr/" variant="error"
          >error button</t-button
        >

        <t-button
          type="submit"
          variant="success"
          tagName="a"
          class="max-w-button"
          >Submit success</t-button
        >

        <button class="btn"><span>CUSTOM</span></button>
        <button class="btn btn--primary"><span>CUSTOM</span></button>
        <button class="btn btn--secondary"><span>CUSTOM</span></button>
      </div>
    </section>

    <section class="my-14 relative">
      <p class="text-2xl">ALERTS</p>
      <hr />
      <div class="alerts flex justify-between my-14">
        <t-alert class="absolute top-0 right-0" show variant="success">
          Successfully Updated
        </t-alert>
        <t-alert
          class="absolute top-4 right-0"
          show
          :timeout="10000"
          variant="success"
        >
          Successfully Updated
        </t-alert>
      </div>
    </section>

    <section class="my-14">
      <span class="text-2xl">IMAGES</span>
      <hr />

      <div class="max-w-md">
        <nuxt-img
          alt="profil"
          src="https://media4.giphy.com/media/yA1EPzJbpmCCPsZOWg/giphy.gif?cid=ecf05e47l379t2onkag642sxt5zid9gcixc69nl6gen1rs0m&rid=giphy.gif&ct=g"
          class="mx-auto object-contain rounded my-6"
        />
        <img :src="require(`static/img/giphy.gif`)" alt="" class="my-6" />
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
