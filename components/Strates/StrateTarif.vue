<template>
  <section class="relative grid my-32 md:my-60 strate-tarif">
    <div class="container">
      <div class="grid items-start justify-center grid-cols-12 gap-10">
        <base-tarif-item
          v-for="elm in listPricesProps"
          @custom-event-name="selectPrice"
          :isActive="elm.isActive"
          :key="elm.id"
          :id="elm.id"
          :tarifname="elm.tarifname"
          :tarif="elm.tarif"
          :description="elm.description"
          :populary="elm.populary"
        >
          <base-tarif-advantage
            v-for="item in elm.list_advantages"
            :key="item.id"
            :listTitre="item.bold"
            :listText="item.text"
            :highlight="item.highlight"
          />
        </base-tarif-item>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateTarif",

  props: {
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
      isSelected: false,
      listPricesProps: [
        {
          isActive: false,
          id: "Starter",
          tarifname: "Starter",
          tarif: "59 €",
          populary: false,
          description:
            "Ipsum labore est est ad pariatur excepteur cillum. Id aliqua eiusmod incididunt ex aute reprehenderit. Deserunt tempor pariatur amet enim eu exercitation nulla.",
          list_advantages: [
            {
              bold: "Label bold",
              text: "Ad velit quis esse officia aliquip ea consectetur et.",
              highlight: false,
            },
            {
              bold: "Label bold 2",
              text: "Ad velit quis esse officia aliquip ea consectetur et.",
              highlight: false,
            },
            {
              bold: "Label bold 3",
              text: "Ad velit quis esse officia aliquip ea consectetur et.",
              highlight: false,
            },
          ],
        },
        {
          isActive: true,
          id: "Smart",
          tarifname: "Smart",
          tarif: "89 €",
          populary: true,
          description:
            "Ipsum labore est est ad pariatur excepteur cillum. Id aliqua eiusmod incididunt ex aute reprehenderit. Deserunt tempor pariatur amet enim eu exercitation nulla.",
          list_advantages: [
            {
              bold: "Label bold",
              text: "Ad velit quis esse officia aliquip ea consectetur et.",
              highlight: false,
            },
            {
              bold: "Label bold 2",
              text: "Ad velit quis esse officia aliquip ea consectetur et.",
              highlight: true,
            },
            {
              bold: "Label bold 3",
              text: "Ad velit quis esse officia aliquip ea consectetur et.",
              highlight: false,
            },
          ],
        },
        {
          isActive: false,
          id: "Premium",
          tarifname: "Premium",
          tarif: "119 €",
          populary: false,
          description:
            "Ipsum labore est est ad pariatur excepteur cillum. Aliqua nulla dolor commodo irure ea. Eiusmod nisi ad aute duis irure minim proident mollit veniam cillum.",
          list_advantages: [
            {
              bold: "Label bold",
              text: "Ad velit quis esse officia aliquip ea consectetur et.",
              highlight: false,
            },
            {
              bold: "Label bold 2",
              text: "Ad velit quis esse officia aliquip ea consectetur et.",
              highlight: false,
            },
            {
              bold: "Label bold 3",
              text: "Ad velit quis esse officia aliquip ea consectetur et.",
              highlight: true,
            },
            {
              bold: "Label bold 3",
              text: "Ad velit quis esse officia aliquip ea consectetur et.",
              highlight: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectPrice(payload) {
      console.log(payload);
      this.listPricesProps.forEach((elem) => {
        if (payload.id == elem.id) {
          elem.isActive = !elem.isActive;
        } else {
          elem.isActive = false;
        }
      });
    },
  },
  mounted() {
    // PLAN B
    // const children = document.querySelectorAll(".base-tarif-item");
    // children.forEach((child) => {
    //   child.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     children.forEach((elem) => {
    //       elem.classList.remove("scale-105", "opacity-100");
    //       elem.classList.add("scale-90", "opacity-75");
    //     });
    //     child.classList.remove("scale-90", "opacity-75");
    //     this.classList.add("scale-105", "opacity-100");
    //   });
    // });
  },
};
</script>

<style lang="scss">
.base-tarif-item__item {
  padding: 1rem;

  &.highlight {
    background-color: #edd6f8;
    border-radius: 8px;
  }
}
</style>
