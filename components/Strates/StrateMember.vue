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
          >
            <div class="">{{item.name}}</div>
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
        },
        {
          name: "Dorian VIDAL",
        },
        {
          name: "Prisca SUMAMPOW",
        },
        {
          name: "Ricardo JUSME",
        },
        {
          name: "Anthony ROUX",
        },
        {
          name: "Gregory DJERRADINE",
        },
        {
          name: "Davy CHEN",
        },
        {
          name: "Antoine OLIVER",
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
