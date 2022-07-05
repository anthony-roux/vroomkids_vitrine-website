<template>
  <div
    class="
      grid
      h-full
      grid-cols-12
      gap-8
      p-8
      mx-10
      rounded-md
      shadow-greyDarkerLight
      base-testimonial
      bg-grey-lighter
      max-w-[60rem]
    "
  >
    <div class="flex flex-col justify-center col-span-12 text-xs">
      <p class="italic">{{ text }}</p>
      <br />
      <p class="font-bold text-pink">{{ name }}</p>
      <p class="mt-0 font-thin text-pink-light">{{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialPro",
  props: {
    imageUrl: {
      type: String,
      required: false,
      default: "/img/photography/testimonial1.png",
    },
    name: {
      type: String,
      required: false,
      default: "Jessica Alba",
    },
    date: {
      type: String,
      required: false,
      default: "chauffeur depuis 2022",
    },
    text: {
      type: String,
      required: false,
      default:
        "Laboris et deserunt veniam proident incididunt occaecat nulla sint labore reprehenderit consequat non enim culpa. Exercitation qui fugiat cupidatat laborum consequat consectetur esse cupidatat. Do irure dolore est enim. Ad dolore non tempor ea est culpa laborum mollit culpa laboris pariatur.",
    },
  },
};
</script>

<style lang="scss"></style>
