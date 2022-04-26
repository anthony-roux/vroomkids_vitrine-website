<template>
  <div
    id="page-about-us"
    class="container relative flex items-center p-6 mx-auto aboutUs"
  >
    <t-alert show variant="success" class="top-80">
      Page Qui sommes-nous ?
    </t-alert>
  </div>
</template>

<script>
export default {
    name: "AboutUs",

  data() {
    return {};
  },
  head() {
    return {
      bodyAttrs: {
        class: "aboutUs",
      },
    };
  },
  methods: {},
};
</script>
