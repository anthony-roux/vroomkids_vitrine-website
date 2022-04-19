<template lang="">
  <div class="container m-auto">
    <section class="my-14">
      <p class="text-lg pt-sm px-lg">TYPOGRAPHY</p>
      <hr />
      <h1 class="text-5xl font-bold">text-5xl 56px</h1>
      <h2 class="text-4xl font-semibold">text-4xl 48px</h2>
      <h2 class="text-3xl font-semibold">text-3xl 40px</h2>
      <p class="text-2xl font-semibold">text-2xl 32px</p>
      <p class="text-xl">text-xl 24px</p>
      <p class="text-lg">text-lg 18px</p>
      <p class="text-md">text-md 16px</p>
      <p class="text-sm">text-sm 14px</p>
      <p class="text-xs">text-xs 12px</p>
      <p class="text-2xs">text-2xs 9px</p>

      <p class="max-w-3xl my-4 text-sm text-grey">
        text-sm : <br />Magna labore cupidatat aliqua ex consequat commodo ea et
        irure eu magna magna.Minim aliqua ex duis id eiusmod qui tempor
        consectetur occaecat consectetur commodo.
      </p>
      <span class="text-md t-text-gradient">t-text-gradient</span>
    </section>
    <section class="my-14">
      <p class="text-2xl">CTA</p>
      <hr />

      <div class="flex flex-wrap items-center justify-between ctas my-14">
        <div class="">
          <a href="" class="my-4 text-lg t-link--color">I am a link</a>
        </div>
        <t-button tagName="a" href="https://www.google.fr/" variant=""
          ><span>primary button</span></t-button
        >
        <t-button tagName="a" href="https://www.google.fr/" variant="secondary"
          ><span>secondary button</span></t-button
        >
        <t-button tagName="a" href="https://www.google.fr/" variant="tertiary"
          ><span>tertiary button</span></t-button
        >
        <div class="p-6 bg-gradient-r-gradient-pink">
          <t-button tagName="a" href="https://www.google.fr/" variant="fourth"
            ><span>fourth button</span></t-button
          >
        </div>
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
        <nuxt-img
          alt="Logo Vroom"
          src="static/img/logo-vroom.png"
          class="object-contain mx-auto my-6"
        />
        <img :src="require(`static/img/logo-vroom.png`)" alt="" class="my-6" />
        <img :src="require(`static/img/hero.png`)" alt="hero" class="" />
        <img :src="require(`static/img/giphy.gif`)" alt="" class="my-6" />
      </div>
    </section>
    <section class="my-14">
      <span class="text-2xl">ICON</span>
      <hr />

      <div class="flex max-w-md space-x-7">
        <base-use-svg id="light-off" color="yellow" size="lg" />
        <base-use-svg id="vroom" color="yellow" size="lg" />
      </div>
    </section>
  </div>
</template>
<script>


export default {
  
  name: "styleguide",

  data() {
    return {
    };
  },
  methods: {
    aMethod() {
      return this.$global.style ;
    },
  },
};
</script>
<style lang=""></style>
