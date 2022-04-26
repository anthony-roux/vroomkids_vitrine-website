<template>
  <div class="flex flex-col h-full justify-evenly lg:flex-row">
    <ul class="flex flex-col items-start lg:items-center l-nav lg:flex-row">
      <li
        v-if="screen === 'mobile' || screen === 'tablet'"
        class="flex l-nav__item lg:hidden"
      >
        <nuxt-link
          to="/"
          class="flex py-1 mx-6 text-2xl font-semibold text-white transition-colors md:text-4xl lg:text-md t-link "
          >Accueil
        </nuxt-link>
      </li>
      <li class="lg:mr-6 l-nav__item">
        <nuxt-link
          to="/service"
          class="flex py-1 mx-6 text-2xl font-semibold text-white transition-colors md:text-4xl lg:text-md t-link "
        >
          Notre service
        </nuxt-link>
      </li>
      <li class="lg:mr-6 l-nav__item">
        <nuxt-link
          to="/price"
          class="flex py-1 mx-6 text-2xl font-semibold text-white transition-colors md:text-4xl lg:text-md t-link "
          >Tarifs
        </nuxt-link>
      </li>
      <li class="lg:mr-6 l-nav__item">
        <nuxt-link
          to="/contact"
          class="flex py-1 mx-6 text-2xl font-semibold text-white transition-colors md:text-4xl lg:text-md t-link "
          >Contact
        </nuxt-link>
      </li>
    </ul>
    <div
      class="justify-center transition-colors c-header__container l-nav__item"
    >
      <t-button
        tagName="a"
        to="/"
        class="w-full mb-5 lg:w-auto lg:mb-0"
        :variant="this.isSidebar ? 'fourth' : 'fourth' "
        @click.native="openTruc"
        ><span class="text-lg">Devenir chauffeur</span></t-button
      >
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Nav",
  props: {
    isSidebar: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: function () {
    return {
    };
  },
  computed: {
    ...mapGetters({
      header: "global/getGlobal",
      screen: "global/getScreen",
    }),
  },
  mounted() {

  },
  methods: {

    unbindEvents() {
      this.$eventHub.$off("sidebar:close");
    },
    openMenu() {
      this.$eventHub.$emit("sidebar:open", "menu");
      this.isMenuOpen = true;
    },
    openTruc() {
      this.$eventHub.$emit("sidebar:open", "truc");
    },
  },
};
</script>

<style scoped lang="scss">
$transition: opacity 450ms $ease-in-out-quad;

.l-nav__item {
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
}
</style>
