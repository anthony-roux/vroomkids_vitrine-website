<template>
  <main
    class="
      dark:bg-gray-800
      font-sans
      bg-white
      relative
      h-screen
      overflow-auto overflow-y-scroll
    "
  >
    <NavBar></NavBar>
    <nuxt></nuxt>
    <t-button tagName="a" href="https://www.google.fr/" variant="error"
      >Example button</t-button
    >
    <t-button tagName="a" href="https://www.google.fr/" variant="success"
      >Example button</t-button
    >
    <t-button tagName="a" href="https://www.google.fr/" variant="secondary"
      >Example button</t-button
    >

    <t-alert show variant="danger" >
      unsuccessfully Updated
    </t-alert>
    <t-alert show :timeout="6000" variant="success">
      Successfully Updated
    </t-alert>
    <t-button
      type="submit"
      variant="success"
      tagName="a"

      >Submit</t-button
    >
  </main>
</template>

<script>
import NavBar from "../components/NavBar/nav-bar";
// import TButton from "vue-tailwind/dist/t-button";
// import TAlert from "vue-tailwind/dist/t-alert";

export default {
  components: { NavBar },
};
</script>
