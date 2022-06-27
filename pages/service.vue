<template>
  <div id="page-service" class="">
    <strate-hero
      title="Notre projet, votre liberté"
      backgroundUrl="/img/photography/hero_others.png"
    />
    <div class="container p-6 mx-auto">
      <h3 class="text-center t-title dark:text-white">Service</h3>
    </div>
    <div>
      <t-modal
        v-model="showModal"
        header="header content"
        footer="Footer content"
        >content
        <template v-slot:footer>
          <div class="flex justify-between">
            <t-button type="button" variant="secondaryPink">
              <span>Cancel</span>
            </t-button>
            <t-button type="button" variant="primary">
              <span>ok</span>
            </t-button>
          </div>
        </template></t-modal
      >

      <button @click="showModal = true" type="button">Show modal</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",

  data() {
    return {
      showModal: false,
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: "service",
      },
    };
  },
  methods: {},
};
</script>
