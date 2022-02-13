<template>
  <div class="flex relative items-center">
    <t-button tagName="a" href="https://www.google.fr/" variant="error"
      >error button</t-button
    >
    <t-button tagName="a" href="https://www.google.fr/" variant="success"
      >success button</t-button
    >
    <t-button tagName="a" href="https://www.google.fr/" variant="secondary"
      >secondary button</t-button
    >

    <t-button type="submit" variant="success" tagName="a" class="max-w-button"
      >Submit success</t-button
    >
    <t-alert show variant="danger"> Unsuccessfully Updated </t-alert>
    <t-alert show :timeout="6000" variant="success">
      Successfully Updated
    </t-alert>

    <a href="#" class="block relative">
      <nuxt-img
        alt="profil"
        src="https://media4.giphy.com/media/yA1EPzJbpmCCPsZOWg/giphy.gif?cid=ecf05e47l379t2onkag642sxt5zid9gcixc69nl6gen1rs0m&rid=giphy.gif&ct=g"
        class="mx-auto object-contain rounded"
      />
      <img :src="require(`static/img/giphy.gif`)" alt="">
    </a>
  </div>
</template>

<script>
export default {

  data() {
    return {};
  },
  methods: {},
};
</script>
