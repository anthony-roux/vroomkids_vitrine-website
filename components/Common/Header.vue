<template>
  <header
    class="sticky top-0 z-20 c-header"
    :class="{
      'is-home': isHome,
      'is-fixed': isFixed,
    }"
  >
    <div class="container relative h-full py-6 lg:py-8 c-header__container">
      <div class="min-h-full c-header__row">
        <div class="flex items-center lg:justify-between">
          <div class="flex-1 lg:hidden c-header__burger" @click="openMenu">
            <base-use-svg
              id="burger-close"
              size="xl"
              @click="isOpen = !isOpen"
              :class="{ isOpen: isOpen }"
              class="z-[3]"
              :color="isFixed ? 'black' : 'white'"
            />
          </div>
          <div class="flex flex-auto c-header__logo">
            <nuxt-link to="/" class="inline-block w-52">
              <base-use-svg
                id="vroom"
                size="logo-xl"
                class="vroom"
                :color="isFixed ? 'black' : 'white'"
              />
            </nuxt-link>
          </div>
          <c-nav-menu
            v-if="screen === 'desktop' || screen === 'tabletLand'"
            class="hidden c-header__nav lg:flex"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data: function () {
    return {
      isFixed: false,
      isMenuOpen: false,
      isOpen: false,
      isClose: false,
    };
  },
  computed: {
    ...mapGetters({
      isHome: "global/getIsHome",
      header: "global/getGlobal",
      screen: "global/getScreen",
    }),
  },
  mounted() {
    this.bindEvents();
    this.$nextTick(() => {
      this.onScroll(this.$device.scroll);
    });
  },
  destroyed() {
    this.unbindEvents();
  },
  methods: {
    bindEvents() {
      this.$eventHub.$on("onScroll", (scroll) => {
        this.onScroll(scroll);
      });
      this.$eventHub.$on("onResize", this.onResize);
      this.$eventHub.$on("sidebar:close", (id) => {
        if (id === "menu") this.isMenuOpen = false;
      });
    },
    unbindEvents() {
      this.$eventHub.$off("onScroll");
      this.$eventHub.$off("onResize");
      this.$eventHub.$off("sidebar:close");
    },
    onScroll(scroll) {
      if (this.$fixScroll.state) return;
      this.isFixed = scroll.top > 0;
      this.isLogo = scroll.top > 0 || !this.isHome;
    },
    onResize() {
      this.onScroll(this.$device.scroll);
    },
    openMenu() {
      this.$eventHub.$emit("sidebar:open", "menu");
      this.isMenuOpen = true;
      this.isOpen = true;
    },
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.onScroll(this.$device.scroll);
      });
    },
  },
};
</script>

<style lang="scss">
$transition: opacity 450ms $ease-in-out-quad;

.c-header {
  &:before {
    @include abs-pseudo(0, 0, 0, 0);
    height: 100%;
    width: 100%;
    background-color: $white;
    opacity: 0;
    transition: opacity 600ms $ease-in-out-quad;
  }

  .btn--secondary-white {
    color: $white !important;
    border: 2px solid $white;

    span {
      color: $white;
    }

    &:after {
      background: $white;
      border: 2px solid $white;
    }

    &:hover {
      color: $pink !important;
      border: 2px solid $white;

      span {
        color: $pink;
      }
    }
  }

  &.is-fixed {
    backdrop-filter: blur(10px);
    opacity: 0.99;

    .vroom {
      fill: $black;
      stroke: $black;

      use {
        fill: $black;
        stroke: $black;
      }
    }
    .l-nav__item {
      text-shadow: none;

      a {
        color: $black !important;
        transition: opacity 600ms $ease-in-out-quad;

        &:hover {
          color: $pink !important;
        }
      }

      .btn--secondary-white {
        color: $pink !important;
        border: 2px solid $pink;

        span {
          color: $pink;
        }

        &:after {
          background: $pink;
          border: 2px solid $pink;
        }

        &:hover {
          color: $white !important;
          border: 2px solid $pink;

          span {
            color: $white;
          }
        }
      }
    }
    &:before {
      opacity: 0.8;
    }
  }
}
</style>
