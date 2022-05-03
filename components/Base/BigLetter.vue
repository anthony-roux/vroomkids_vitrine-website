<template>
  <div class="base-big-letter">
    <span class="base-big-letter__item text-[15rem] font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-primary-vert1 to-pink  text-center animate-text opacity-20">{{
      text
    }}</span>
  </div>
</template>

<script>
export default {
  name: "BigLetter",
  props: {
    text: {
      type: String,
      required: false,
      default: "1",
    },
  },
};
</script>

<style lang="scss">
.base-big-letter {
  &__item {
    
  }
}
</style>
