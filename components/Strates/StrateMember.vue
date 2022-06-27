<template>
  <section class="relative my-32 md:my-60 strate-member">
    <div class="container">
      <div class="container">
        <p class="mx-auto mb-16 text-3xl font-bold strate-testimonials__title">
          {{ title }}
        </p>
        <p class="text-xl">{{ subtitle }}</p>
      </div>
      <br />
      <br />
      <div class="container mx-auto">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
          <base-member
            v-for="item in list_team"
            :name="item.name"
            :key="item.id"
            :value="item.name"
            :date="item.date"
            :text="item.text"
          >
            <div class="">{{ item.name }}</div>
            <!-- <div>{{ item.date }}</div> -->
          </base-member>
        </div>
      </div>
      <div
        class="col-span-12 lg:col-span-7 h-80 strate-advantages__image"
      ></div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateMember",
  props: {
    backgroundUrl: {
      type: String,
      required: false,
      default: "/img/photography/hero_others.png",
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
      isOpen: false,
      list_team: [
        {
          name: "Erwan CREPIN",
          date: "chauffeur depuis  2012",
          text: "tototo test titit",
        },
        {
          name: "Dorian VIDAL",
          date: "chauffeur depuis  2013",
          text: "tototo test titit",
        },
        {
          name: "Prisca SUMAMPOW",
          date: "chauffeur depuis  2014",
          text: "tototo test titit",
        },
        {
          name: "Ricardo JUSME",
          date: "chauffeur depuis  2015",
          text: "tototo test titit",
        },
        {
          name: "Anthony ROUX",
          date: "chauffeur depuis  2016",
          text: "tototo test titit",
        },
        {
          name: "Gregory DJERRADINE",
          date: "chauffeur depuis  2017",
          text: "tototo test titit",
        },
        {
          name: "Davy CHEN",
          date: "chauffeur depuis  2018",
          text: "tototo test titit",
        },
        {
          name: "Antoine OLIVER",
          date: "chauffeur depuis  2019",
          text: "tototo test titit",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.strate-advantages {
  &:before {
    content: "";
    width: 67rem;
    height: 60rem;
    max-width: 70vw;
    // height: calc(100% + 5rem);
    background: $pink;
    position: absolute;
    bottom: 0;
    right: -50%;
    float: right;
    transform: translateY(2.5rem);
    z-index: 0;
    opacity: 0.15;
    border-radius: 0.6rem;

    // @include mq($from: desktop) {
    //   height: calc(100% + 10rem);
    //   transform: translateY(5rem);
    // }
  }
}
</style>
