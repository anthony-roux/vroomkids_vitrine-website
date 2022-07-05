<template>
  <t-modal v-model="showModal" :header="title" footer="Footer content"
    >{{ subtitle }}
    Utilisez le formulaire ci-dessous pour nous envoyer rapidement un message.
    <t-input placeholder="Nom" variant="normal"> </t-input>
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
</template>

<script>
export default {
  name: "Modal",
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
  data: function () {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped lang="scss">

</style>
