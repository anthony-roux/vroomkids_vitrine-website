<template>
  <section class="my-32 strate-faq md:my-60">
    <div class="container flex flex-col items-center justify-center mx-auto">
      <p class="mx-auto mb-16 text-3xl font-bold text-center strate-faq__title">
        {{ title }}
      </p>

      <div class="strate-faq__items">
        <base-faq-item id="question1"  />
        <base-faq-item id="question2" />
        <base-faq-item id="question3" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateFAQ",
  props: {
    title: {
      type: String,
      required: false,
    },
    dataId: {
      type: String,
      required: false,
    },
  },
  data: function () {
    return {
      isOpen: false,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss"></style>
