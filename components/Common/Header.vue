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
            <nuxt-link to="/" class="inline-block mx-auto md:mx-0 w-52">
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
          <div
            class="justify-center transition-colors c-header__container l-nav__item"
          >
            <t-button
              tagName="a"
              class="w-full px-4 py-2 mb-0 cursor-pointer lg:w-auto"
              variant="secondaryWhite"
              @click="showModal = true"
              ><span class="text-md md:text-lg">Une question ?</span></t-button
            >
          </div>
        </div>
        <div>
          <t-modal v-model="showModal" header="Posez-nous votre question">
            <div class="px-8 py-8 md:px-12 md:py-12">
              Utilisez le formulaire ci-dessous pour nous envoyer rapidement un
              message.
            </div>

            <form
              action="post"
              class="mt-8"
              data-success="Thanks for your enquiry, we'll be in touch shortly."
              data-error="Please fill in all fields correctly."
              @submit.prevent="submitForm"
              v-bind:value="value"
              v-on:input="updateValue($event.target.value)"
            >
              <div class="grid px-8 md:px-12 md:grid-cols-2 md:gap-8">
                <base-input-text
                  type="text"
                  namefor="name"
                  label="Nom"
                  placeholder=" "
                  :required="true"
                  class="md:mr-8"
                  v-model="form.name"
                />
                <base-input-text
                  type="text"
                  namefor="lastname"
                  label="Prénom"
                  placeholder=" "
                  :required="true"
                  v-model="form.lastname"
                />
              </div>
              <div class="grid px-8 md:px-12 md:grid-cols-2 md:gap-8">
                <t-radio-group
                  :options="[
                    { value: 'parent', text: 'Je suis parent' },
                    { value: 'driver', text: 'Je suis chauffeur' },
                  ]"
                  name="radio"
                  required
                  v-model="form.profil"
                  :value="['checked']"
                />
              </div>
              <div class="grid px-8 md:px-12 md:grid-cols-2 md:gap-8">
                <base-input-text
                  type="mail"
                  namefor="mail"
                  label="Adresse e-mail"
                  placeholder=" "
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  :required="true"
                  class="md:mr-8"
                  v-model="form.mail"
                />
                <base-input-text
                  type="tel"
                  namefor="phone"
                  label="Téléphone"
                  placeholder=" "
                  pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                  :required="true"
                  v-model="form.phone"
                />
              </div>

              <div class="grid grid-cols-1 px-8 md:px-12 md:gap-8">
                <base-text-area
                  namefor="text"
                  id="text"
                  label="Votre message"
                  placeholder=" "
                  v-model="form.text"
                  required="true"
                ></base-text-area>
              </div>

              <p
                v-if="this.success"
                class="px-8 py-8 text-primary-vert1 md:px-12 md:py-12"
              >
                Merci, votre message a bien été envoyé. <br />
                Un de nos conseillers vous contactera sous 72h.
              </p>
              <p
                v-if="this.error"
                class="px-8 py-8 text-red-500 md:px-12 md:py-12"
              >
                Ah ! une erreur est survenue...
              </p>

              <div
                class="flex justify-between px-8 py-8 mt-8 border-t border-gray-100 rounded-b md:py-12 md:px-12 bg-grey-light"
              >
                <t-button type="submit" variant="primary" class="w-full">
                  <span>Envoyer</span>
                </t-button>
              </div>
            </form>
          </t-modal>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Header",
  data: function () {
    return {
      isFixed: false,
      isMenuOpen: false,
      isOpen: false,
      isClose: false,
      showModal: false,
      success: false,
      error: false,

      form: {
        name: "",
        lastname: "",
        phone: "",
        mail: "",
        profil: "",
        text: "",
      },
    };
  },
  props: {
    value: {
      type: String,
      required: false,
    },
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

    // axios.get("/api/user/get/").then((response) => console.log(response.data));
    // this.submitForm();
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
    updateValue: function (value) {
      this.$emit("input", value);
    },

    // MODAL / FORM

    submitForm() {
      console.log(this.form);
      // return
      axios
        // .post("/api/question/create", this.form)
        .post("/api/questions/create", {
          name: this.form.name,
          lastname: this.form.lastname,
          phone: this.form.phone,
          mail: this.form.mail,
          profil: this.form.profil,
          text: this.form.text,
        })
        .then((res) => {
          //Perform Success Action
          console.log("res", res);
          this.status = "res";
          this.$router.push("/");
          this.success = true;
          setTimeout(() => {
            this.showModal = false;
            this.form = {};
            this.success = false;
          }, 3000);
        })
        .catch((error) => {
          // error.response.status Check status code
          console.log("error", error);
          this.status = "error";
          this.success = true;
        })
        .finally(() => {
          //Perform action in always
        });
      

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
  input:not([value=""]):not(:focus):invalid {
    background-color: $white;
    border-color: $grey;
  }
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
