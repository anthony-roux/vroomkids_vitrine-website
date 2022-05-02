<template>
  <footer class="py-8 bg-black c-footer sm:py-12">
    <div class="container mb-24">
      <div class="pt-5">
        <div class="space-y-8 lg:col-span-1">
          <a href="/">
            <base-use-svg
              id="vroom"
              class="vroom"
              color="green1"
              size="logo-xl"
            />
          </a>
          <p class="w-1/2 mt-2 text-white text-md">
            Le service chauffeur et accompagnateur
            <br />
            <span>de votre enfant.</span>
          </p>
        </div>
        <br />
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h3 class="text-2xl font-black uppercase text-primary-vert1">
              Informations
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li>
                <a href="#" class="inline-flex font-normal text-white text-md t-link t-link--secondary">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" class="inline-flex font-normal text-white text-md t-link t-link--secondary">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" class="inline-flex font-normal text-white text-md t-link t-link--secondary">
                  Commerce
                </a>
              </li>
              <li>
                <a href="#" class="inline-flex font-normal text-white text-md t-link t-link--secondary">
                  Insights
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3 class="text-2xl font-black uppercase text-primary-vert1">
              Chauffeurs
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li>
                <a href="#" class="inline-flex font-normal text-white text-md t-link t-link--secondary"> Pricing </a>
              </li>
              <li>
                <a href="#" class="inline-flex font-normal text-white text-md t-link t-link--secondary">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" class="inline-flex font-normal text-white text-md t-link t-link--secondary"> Guides </a>
              </li>
              <li>
                <a href="#" class="inline-flex font-normal text-white text-md t-link t-link--secondary">
                  API Status
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-8 lg:justify-end lg:mt-0">
            <h3 class="text-2xl font-black uppercase text-primary-vert1">
              Vroom
            </h3>
            <div class="py-10 c-footer__socials-icons">
              <div class="flex sm:justify-center lg:justify-start">
                <a href="" class="mr-8 lg:mr-12 c-footer__socials-icons-link">
                  <base-use-svg id="facebook" color="white" size="lg" />
                </a>
                <a href="" class="mr-8 lg:mr-12 c-footer__socials-icons-link">
                  <base-use-svg id="instagram" color="white" size="lg" />
                </a>
                <a href="" class="mr-8 lg:mr-12 c-footer__socials-icons-link">
                  <base-use-svg id="twitter" color="white" size="lg" />
                </a>
              </div>
            </div>
            <div>
              <p href="#" class="font-semibold text-white text-md">
                S’abonner à notre newsletter
              </p>
            </div>
            <div
              class="inline-flex items-center w-full gap-2 list-none lg:ml-auto"
            >
              <form
                action=""
                method="post"
                name="revue-form"
                target="_blank"
                class="flex w-full max-w-lg p-1 mt-4 bg-white rounded"
              >
                <div class="flex-1 min-w-0">
                  <input
                    type="email"
                    class="block h-full px-5 py-3 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded select-none c-footer__input focus: placeholder-grey-light text-md focus:border-transparent focus:ring-0"
                    placeholder="E-mail"
                  />
                </div>
                <div class="mr-1">
                  <t-button
                    type="submit"
                    value="Subscribe"
                    name="member"
                    class="px-5 py-3 my-1 text-sm font-semibold text-white"
                    variant=""
                  >
                    <span>s'abonner</span>
                  </t-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-2 bg-primary-vert1">
      <div class="flex justify-between px-40">
        <div class="my-4 text-xs text-white">
          © Copyright Vroom 2022. Made with love by HETIC.
        </div>
        <div class="my-4 text-xs text-white">Mentions légales</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.c-footer {

  &__input {
    outline-color: transparent;
    &:focus {
      outline-color: transparent;
    }
  }

  
  &__socials-icons-link {
    border-bottom: solid 2px $green1;
  }
  &__socials-icons {
    @media (hover: hover) {
      svg {
        fill: $white !important;
        cursor: pointer;

        &:hover {
          use {
            transition: 250ms $linear;
            fill: $green1;
          }
        }
      }
    }
  }
}
</style>
