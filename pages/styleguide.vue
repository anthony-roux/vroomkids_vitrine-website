<template lang="">
  <div class="container m-auto">

    <div class="relative flex border rounded h-80 w-80">
      Salut 
      <p>Incididunt nostrud aute sint quis.</p>
      <div class="absolute top-0 w-20 h-20 rounded bg-gradient-b-vroom"></div>

    </div>
    <section class="my-14">
      <p class="text-lg pt-sm px-lg ">TYPOGRAPHY</p>
      <hr />
      <h1 class="text-3xl">text-3xl</h1>
      <h2 class="text-2xl">text-2xl</h2>
      <h3 class="text-xl">text-xl</h3>
      <h4 class="text-lg">text-lg</h4>
      <h5 class="text-base">text-base</h5>

      <p class="max-w-3xl my-4 t-text">
        t-text : <br />Magna labore cupidatat aliqua ex consequat commodo ea et
        irure eu magna magna.Minim aliqua ex duis id eiusmod qui tempor
        consectetur occaecat consectetur commodo.
      </p>
      <p class="max-w-lg my-4 t-text--caps">t-text-caps</p>

      <span class="text-xl t-text-gradient">t-text-gradient</span>
      <div class="t-text-hover">
        <span class="text-xl t-text-gradient">t-text-hover</span>
      </div>
    </section>
    <section class="my-14">
      <p class="text-2xl">CTA</p>
      <hr />

      <div class="flex items-center justify-between ctas my-14">
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
        <button class="btn"><span>primary</span></button>
        <button class="btn btn--secondary"><span>secondary</span></button>
        <button class="btn btn--tertiary"><span>tertiary</span></button>
      </div>
    </section>

    <section class="relative my-14">
      <p class="text-2xl">ALERTS</p>
      <hr />
      <div class="flex justify-between alerts my-14">
        <t-alert class="absolute top-0 right-0" show variant="success">
          Successfully Updated
        </t-alert>
        <t-alert
          class="absolute right-0 top-4"
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

      <div class="flex max-w-md space-x-7">
        <nuxt-img
          alt="profil"
          src="https://media4.giphy.com/media/yA1EPzJbpmCCPsZOWg/giphy.gif?cid=ecf05e47l379t2onkag642sxt5zid9gcixc69nl6gen1rs0m&rid=giphy.gif&ct=g"
          class="object-contain mx-auto my-6 rounded"
        />
        <img :src="require(`static/img/giphy.gif`)" alt="" class="my-6" />
      </div>
    </section>
    <section class="my-14">
      <span class="text-2xl">ICON</span>
      <hr />

      <div class="flex max-w-md space-x-7">
        <base-use-svg id="light-off" color="yellow" size="lg" />
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
