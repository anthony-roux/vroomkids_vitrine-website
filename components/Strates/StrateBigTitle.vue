<template>
  <section
    class="container w-full mt-10 lg:mt-20 strate-big-title "
  >
    <div class="container flex items-center justify-center lg:w-3/4">
      <p
        class="mx-auto text-3xl font-bold text-center strate-big-title__text md:text-5xl" :style="{ color: `${color}` }"
      >
        {{ text }}
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateBigTitle",
  props: {
    color: {
      type: String,
      required: false,
      default: "#333",
    },
    text: {
      type: String,
      required: false,
      default: "Duis esse est adipisicing elit veniam",
    },
  },
  data: function () {
    return {
      isOpen: false,
    };
  },
};
</script>

