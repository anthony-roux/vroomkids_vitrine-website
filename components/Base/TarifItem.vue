<template>
  <div
    class="relative col-span-12 p-8 transition-colors duration-500 rounded-md shadow-greyDarkerLight base-tarif-item lg:col-span-4"
    :class="isActive ? style.scaleIt : style.default"
  >
    <div v-if="populary" class="absolute left-0 w-full -top-16 animate-ping">
      <div
        class="px-6 py-3 text-lg font-semibold text-center text-white uppercase bg-[#90EBE8] rounded-tl-md rounded-tr-md min-w-min w-1/3 mx-auto h-[4rem] animate-ping"
      >
        Populaire
      </div>
    </div>
    <div
      class="transition-colors duration-500 md:items-center base-tarif-item__name"
    >
      <p
        :class="isSelected ? 'text-pink' : 'text-black'"
        class="my-10 font-semibold text-center transition-colors duration-1000 text-md lg:text-2xl"
      >
        {{ tarifname }}
      </p>

      <div class="relative flex flex-col base-tarif-item__content">
        <div
          class="absolute top-0 p-6 text-lg font-semibold text-left text-white -left-8 rounded-tr-md rounded-br-md bg-pink lg:text-2xl"
        >
          <p>{{ tarif }} <span class="text-sm">/ mois</span></p>
        </div>
        <div class="mt-36">
          <p>
            {{ description }}
          </p>
          <t-button
            v-on:click="emitCustomEvent"
            variant="primary"
            class="w-full my-10"
          >
            <span>Sélectionner</span>
          </t-button>
          <div class="flex items-center justify-center">
            <nuxt-link
              v-if="isActive"
              to="/contact"
              class="inline-flex text-md md:text-md t-link--color"
              >Je choisis ce tarif</nuxt-link
            >
          </div>

          <hr />
          <div class="mt-10 mb-6">
            <ul class="relative base-tarif-item__list">
              <slot />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TarifItem",
  data() {
    return {
      isSelected: false,
      style: {
        scaleIt: "scale-105 opacity-100",
        default: "scale-90 opacity-75",
      },
    };
  },
  props: {
    isActive: false,
    id: {
      type: String,
      required: true,
    },
    populary: {
      type: Boolean,
      required: false,
      default: false,
    },
    tarifname: {
      type: String,
      required: false,
      default: "Starter",
    },
    tarif: {
      type: String,
      required: false,
      default: "24 €",
    },
    description: {
      type: String,
      required: false,
      default:
        "Enim culpa exercitation minim sunt dolore nisi laborum est Lorem. Ea dolor non amet minim qui veniam cillum.",
    },
    listTitre: {
      type: String,
      required: false,
      default: "Enim culpa",
    },
    listText: {
      type: String,
      required: false,
      default:
        "Pariatur consectetur nisi aute aute occaecat enim occaecat id tempor consectetur nisi minim ullamco magna.",
    },
  },
  methods: {
    emitCustomEvent() {
      this.$emit("custom-event-name", { id: this.id });
    },
  },
  mounted() {},
  destroyed() {},
};
</script>

<style lang="scss">
.base-tarif-item {
  &__list {
    .base-tarif-item__item {
      padding: 1rem;

      &.highlight {
        background-color: #edd6f8;
        border-radius: 8px;
      }
    }
    li {
      position: relative;
      margin-left: 2.5rem;
      &::before {
        content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='5' stroke='%23B21DCB' stroke-width='2'/%3E%3Ccircle cx='6' cy='6' r='2' fill='%23B21DCB'/%3E%3C/svg%3E%0A");
        position: absolute;
        left: -24px;
        top: 0.1rem;
      }
    }
  }
}
</style>
