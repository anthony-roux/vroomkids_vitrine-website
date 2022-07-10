<template>
  <section id="page-price" class="">
    <strate-hero
      title="Le meilleur à petit prix"
      backgroundUrl="/img/photography/hero-tarif.png"
    />

    <div class="overflow-hidden">
      <div class="mx-auto">
        <strate-tarif />
        <strate-faq title="Les questions qui reviennent souvent.">
          <base-faq-item
            v-for="itemFAQ in listQuestionsFAQ3"
            v-bind:key="itemFAQ.id"
            @emitEventFaq="selectQuestion"
            :isActive="itemFAQ.isActive"
            :id="itemFAQ.id"
            :question="itemFAQ.question"
            :answer="itemFAQ.answer"
          />
        </strate-faq>
        <strate-manage-race />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Price",

  data() {
    return {
      listQuestionsFAQ3: [
        {
          isActive: false,
          id: "question1",
          question: "Quels moyens de paiement proposez vous ?",
          answer:
            "Vroom est un service de chauffeur qui s’occupe de votre enfant. Ce dernier pourra aller à son cours de sport, de théâtre ou à l’école sans encombre avec un service de qualité. ",
        },
        {
          isActive: false,
          id: "question2",
          question: "Quel est la durée d'engagement ? ",
          answer:
            "Le service est utilisable dans toute la France, à la fois dans les grandes, moyennes et petites villes. Lancez l’application pour voir les chauffeurs disponibles pour votre course. ",
        },
        {
          isActive: false,
          id: "question3",
          question: "Comment je choisis le tarif qui me convient ?",
          answer:
            "Grace à son application complète, Vroom vous permet de composer une ou plusieurs courses sur différentes dates et lieux. Le système de programmation se fait via un calendrier vous permettant une meilleure utilisation et visibilité de vos courses.",
        },
      ],
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: "price",
      },
    };
  },
  methods: {
    selectQuestion(payload) {
      this.listQuestionsFAQ3.forEach((elem) => {
        if (payload.id == elem.id) {
          elem.isActive = !elem.isActive;
        } else {
          elem.isActive = false;
        }
      });
    },
  },
};
</script>
