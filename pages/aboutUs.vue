<template>
  <section id="page-about-us" class="">
    <strate-hero
      title="Vroom c'est quoi ?"
      backgroundUrl="/img/photography/hero-Aboutus.png"
    />
    <div class="overflow-hidden">
      <div class="mx-auto">
        <strate-advantages
          title="Que proposons-nous?"
          text="Vroom est un service de chauffeur qui s’occupe du déplacement de votre enfant. Ce dernier pourra aller à son cours de sport, de théâtre ou à l’école sans encombre avec un service de qualité. 
          Notre engagement s’inscrit dans une continuité de valeurs fortes qui sont gages de qualités, à savoir :"
          :isInversed="false"
          imageUrl="/img/photography/strate_advantage4.png"
        />
        <strate-reservations
          text4
          subtitle1="Qualité de service"
          subtitle2="Sécurité avant tout"
          subtitle3="Eco-responsable"
        >
          <template v-slot:text1>
            <client-only>
              <core-aov :delay="350">
                <base-big-letter
                  text="1"
                  class="t-translate-down t-fade-in t-scale"
                />
              </core-aov>
            </client-only>
          </template>
          <template v-slot:text2>
            <client-only>
              <core-aov :delay="450">
                <base-big-letter
                  text="2"
                  class="t-translate-down t-fade-in t-scale"
                />
              </core-aov>
            </client-only>
          </template>
          <template v-slot:text3>
            <client-only>
              <core-aov :delay="550">
                <base-big-letter
                  text="3"
                  class="t-translate-down t-fade-in t-scale"
                />
              </core-aov>
            </client-only>
          </template>
        </strate-reservations>
        <strate-advantages
          title="A l’écoute de vos besoins"
          text="Vroom est à l’écoute de la demande de ses clients. C’est pour cela que nous vous proposons un service précis à la hauteur. Les véhicules sont adaptés, le co-voiturage et la mutualisation des trajets sont bien évidemment possibles et répondent à notre problématique eco-responsable. 
          Notre service reste également disponible 7j/7 et propose des collaborations avec les établissements scolaires et extra-scolaires."
          :isInversed="true"
          imageUrl="/img/photography/strate_advantage3.png"
        />

        <client-only>
          <strate-testimonials-pro
            title="Nos chauffeurs témoignent"
            subtitle="Nos chauffeurs sont séléctionnés avec rigueur. Ils sont tous en possession d’une lisence VTC et sont pour la plupart père ou mère de famille."
          >
          </strate-testimonials-pro>
        </client-only>
        <strate-text
          title="Sécurité et respect des régles"
          text="Vroom travaille dans le respect des normes et réglementations. Notre système de recrutement demande une certaine rigueur et demande également des diplômes et certifications spécifiques à nos futurs chauffeurs. 
          
          Pour plus d’informations sur ces aspects, l’équipe reste à votre disposition pour répondre à toutes vos quéstions, nous vous proposons également un lien vers les lois en vigueur “LOI n° 2014-1104 du 1er octobre 2014” "
          backgroundColor="#E9FBFB"
        />
        <client-only>
          <strate-testimonials-pro
            title="Nos accompagnateurs témoignent"
            subtitle="Nos accompagnateurs sont aussi séléctionnés avec choix. Tous diplomés d'un CAP accompagnants educatif petite enfance, ils savent y faire avec les morveux."
          >
          </strate-testimonials-pro>
        </client-only>
        <strate-catchphrase
          backgroundColor="#A6EFED"
          imageUrl="/img/photography/perso3.png"
          text="Et en plus, Vroom est engagé pour notre planète, nos véhicules sont "
          textHighlight="hybrides ou éléctriques !"
          colorHighlight="#2CC5C0"
          :isInversed="false"
        />
        <strate-member
          title="Notre équipe"
          subtitle="C’est notre équipe qui permet de vous satisfaire au quotidien."
        ></strate-member>
        <strate-faq title="Les questions qui reviennent souvent.">
          <base-faq-item
            v-for="itemFAQ in listQuestionsFAQ2"
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
  name: "AboutUs",

  data() {
    return {
      listQuestionsFAQ2: [
        {
          isActive: false,
          id: "question1",
          question: "Comment rejoindre notre super team ?",
          answer:
            "Vroom est un service de chauffeur qui s’occupe de votre enfant. Ce dernier pourra aller à son cours de sport, de théâtre ou à l’école sans encombre avec un service de qualité. ",
        },
        {
          isActive: false,
          id: "question2",
          question: "Je peux vous confier mon bébé de 10 mois ?",
          answer:
            "Vroom est un service de chauffeur qui s’occupe de votre enfant. Ce dernier pourra aller à son cours de sport, de théâtre ou à l’école sans encombre avec un service de qualité. ",
        },
        {
          isActive: false,
          id: "question3",
          question: "C'est quoi un accompagnateur ? ",
          answer:
            "Vroom est un service de chauffeur qui s’occupe de votre enfant. Ce dernier pourra aller à son cours de sport, de théâtre ou à l’école sans encombre avec un service de qualité. ",
        },
        {
          isActive: false,
          id: "question4",
          question: "question 4 ?",
          answer:
            "Vroom est un service de chauffeur qui s’occupe de votre enfant. Ce dernier pourra aller à son cours de sport, de théâtre ou à l’école sans encombre avec un service de qualité. ",
        },
      ],
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: "aboutUs",
      },
    };
  },
  methods: {
    selectQuestion(payload) {
      this.listQuestionsFAQ2.forEach((elem) => {
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
