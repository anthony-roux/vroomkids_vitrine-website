<template>
  <section class="my-32 strate-faq md:my-60">
    <div class="container flex flex-col items-center justify-center mx-auto">
      <p class="mx-auto mb-16 text-3xl font-bold text-center strate-faq__title">
        {{ title }}
      </p>

      <div class="strate-faq__items">
        <base-faq-item id="question1" />
        <base-faq-item id="question2" />
        <base-faq-item id="question3" />
      </div>
      <div class="flex flex-col justify-between w-full my-16 md:flex-row">
        <div class="w-full md:w-2/3 lg:w-4/5">
          <p class="mb-8">
            <span class="font-semibold">
              Vous ne parvenez toujours pas à trouver de réponse à vos questions
              ?
            </span>
            <br />
            Prenez-contact avec nous directement, notre service client se fera
            un plaisir de répondre à votre demande.
          </p>
        </div>
        <div class="flex items-center">
          <t-button
            type="submit"
            value="get-contact"
            name="member"
            class="font-semibold text-white text-md"
            variant="primary"
          >
            <span>Prendre contact</span>
          </t-button>
        </div>
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
  methods: {},
};
</script>

<style lang="scss"></style>
