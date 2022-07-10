<template>
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
        <p v-if="this.error" class="px-8 py-8 text-red-500 md:px-12 md:py-12">
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
</template>

<script>
import axios from "axios";

export default {
  name: "Modal",
  props: {
    value: {
      type: String,
      required: false,
    },
  },
  data: function () {
    return {
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
  methods: {
    updateValue: function (value) {
      this.$emit("input", value);
    },

    // MODAL / FORM
    submitForm() {
      axios
        .post("/contact", this.form)
        .then((res) => {
          //Perform Success Action
          console.log("res", res);
          this.status = "res";
          this.$router.push("/");
          this.success = true;
          setTimeout(() => {
            this.showModal = false;
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
};
</script>

<style scoped lang="scss"></style>
