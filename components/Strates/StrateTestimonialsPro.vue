<template>
  <section class="strate-testimonials">
    <div
      class="
        flex flex-col
        items-center
        justify-center
        h-full
        mx-auto
        max-w-container-3xl
      "
    >
      <div class="container text-center">
        <p
          class="
            mx-auto
            mb-16
            text-3xl
            font-bold
            text-center
            strate-testimonials__title
          "
        >
          {{ title }}
        </p>
        <p class="text-xl">{{ subtitle }}</p>
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
          <base-testimonial-pro
            name="Britney Spears"
            text='"Ullamco laboris excepteur nulla consectetur consequat et. Sunt pariatur esse non nisi nostrud ea quis.Enim nostrud laborum et consectetur ex sint laborum do aliqua aliquip cillum mollit quis."'
            date="chauffeur depuis 2021"
          />
        </slide>
        <slide class="">
          <base-testimonial-pro
            name="Elon Muskkkkk"
            text='"Anim pariatur velit esse qui laborum. Velit consectetur ut mollit adipisicing officia laborum ut. Ipsum exercitation culpa dolore pariatur consequat consectetur do excepteur anim ullamco."'
            date="chauffeur depuis 2021"
          />
        </slide>
        <slide class="">
          <base-testimonial-pro
            name="Ricky Martin"
            text='"Sit exercitation reprehenderit dolore nisi et occaecat nisi eiusmod anim. Mollit velit consequat sit anim non enim elit cupidatat nisi commodo incididunt fugiat anim. Sint id quis aliqua."'
            date="chauffeur depuis 2021"
          />
        </slide>
        <slide class="">
          <base-testimonial-pro
            name="Jean Ricardo Jusme"
            text='"Ipsum qui eu sint ut non incididunt nostrud exercitation quis amet aliquip id. Aute commodo id ex ipsum voluptate duis eiusmod magna pariatur aliqua. Aliqua aute ea consectetur laborum."'
            date="chauffeur depuis 2021"
          />
        </slide>
        <slide class="">
          <base-testimonial-pro
            name="Johnatan Cohen"
            text='"Ipsum qui eu sint ut non incididunt nostrud exercitation quis amet aliquip id. Aute commodo id ex ipsum voluptate duis eiusmod magna pariatur aliqua. Aliqua aute ea consectetur laborum."'
            date="chauffeur depuis 2021"
          />
        </slide>
        <slide class="">
          <base-testimonial-pro
            name="Diziz la Peste"
            text='"Ipsum qui eu sint ut non incididunt nostrud exercitation quis amet aliquip id. Aute commodo id ex ipsum voluptate duis eiusmod magna pariatur aliqua. Aliqua aute ea consectetur laborum."'
            date="chauffeur depuis 2021"
          />
        </slide>
        <slide class="">
          <base-testimonial-pro
            name="Melissandre (tu es grosse)"
            text='"Ipsum qui eu sint ut non incididunt nostrud exercitation quis amet aliquip id. Aute commodo id ex ipsum voluptate duis eiusmod magna pariatur aliqua. Aliqua aute ea consectetur laborum."'
            date="chauffeur depuis 2021"
          />
        </slide>
      </carousel>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateTestimonialsPro",
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
