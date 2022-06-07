<template>
  <section class="strate-testimonials">
    <base-big-letter text="whaaow" class="z-[0]" />

    <div class="flex flex-col items-center justify-center h-full mx-auto max-w-container-3xl">
      <div class="container text-center">
        <p
          class="mx-auto -mt-8 text-3xl font-black text-center uppercase md:-mt-20 strate-testimonials__title md:text-5xl z-[3]"
        >
        {{title}}
        </p>
        <p class="text-xl">{{subtitle}}</p>
      </div>

      <carousel
        :autoplay="true"
        :autoplayHoverPause="true"
        :perPageCustom="[
          [320, 1],
          [768, 2],
          [1024, 2],
          [1440, 3],
        ]"
        :loop="true"
        :autoplayTimeout="9000"
        :speed="1000"
        paginationActiveColor="#AD0EC7"
        paginationColor="#EBEBEB"
        :paginationSize="20"
        :paginationPadding="10"
        class="max-w-full mt-24 strate-testimonials__slider"
      >
        <slide class="">
          <base-testimonial
            name="Britney Spears"
            text='"Ullamco laboris excepteur nulla consectetur consequat et. Sunt pariatur esse non nisi nostrud ea quis.Enim nostrud laborum et consectetur ex sint laborum do aliqua aliquip cillum mollit quis."'
          />
        </slide>
        <slide class="">
          <base-testimonial
            name="Elon Musk"
            text='"Anim pariatur velit esse qui laborum. Velit consectetur ut mollit adipisicing officia laborum ut. Ipsum exercitation culpa dolore pariatur consequat consectetur do excepteur anim ullamco."'
          />
        </slide>
        <slide class="">
          <base-testimonial
            name="Ricky Martin"
            text='"Sit exercitation reprehenderit dolore nisi et occaecat nisi eiusmod anim. Mollit velit consequat sit anim non enim elit cupidatat nisi commodo incididunt fugiat anim. Sint id quis aliqua."'
          />
        </slide>
        <slide class="">
          <base-testimonial
            name="Jean Ricardo Jusme"
            text='"Ipsum qui eu sint ut non incididunt nostrud exercitation quis amet aliquip id. Aute commodo id ex ipsum voluptate duis eiusmod magna pariatur aliqua. Aliqua aute ea consectetur laborum."'
          />
        </slide>
        <slide class="">
          <base-testimonial
            name="Johnatan Cohen"
            text='"Ipsum qui eu sint ut non incididunt nostrud exercitation quis amet aliquip id. Aute commodo id ex ipsum voluptate duis eiusmod magna pariatur aliqua. Aliqua aute ea consectetur laborum."'
          />
        </slide>
        <slide class="">
          <base-testimonial
            name="Diziz la Peste"
            text='"Ipsum qui eu sint ut non incididunt nostrud exercitation quis amet aliquip id. Aute commodo id ex ipsum voluptate duis eiusmod magna pariatur aliqua. Aliqua aute ea consectetur laborum."'
          />
        </slide>
        <slide class="">
          <base-testimonial
            name="Melissandre (tu es grosse)"
            text='"Ipsum qui eu sint ut non incididunt nostrud exercitation quis amet aliquip id. Aute commodo id ex ipsum voluptate duis eiusmod magna pariatur aliqua. Aliqua aute ea consectetur laborum."'
          />
        </slide>
      </carousel>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateTestimonials",
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
    };
  },
};
</script>

<style lang="scss">
.strate-testimonials {
  .base-big-letter {
    &__item {
      @include mq($until: tablet) {
        font-size: 7rem !important;
      }
    }
  }
  .VueCarousel {
    &-dot {
      transition: 250ms ease;
      border-radius: 1.5rem !important;
      width: 2rem !important;
      height: 1rem !important;

      &:focus {
        outline: none !important;
      }
      &--active {
        width: 4rem !important;
      }
    }
  }
}
</style>
