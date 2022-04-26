<template>
  <div id="page-client" class="container relative flex items-center p-6 mx-auto">
    <t-alert show variant="success" class="top-80"> Page Client </t-alert>
  </div>
</template>

<script>
export default {
    name: "Client",

  data() {
    return {};
  },
    head() {
    return {
      bodyAttrs: {
        class: "client",
      },
    };
  },
  methods: {},
};
</script>
