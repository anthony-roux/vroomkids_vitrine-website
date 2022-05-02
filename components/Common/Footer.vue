<template>
  <footer class="c-footer bg-black py-8 sm:py-12">
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
          <p class="w-1/2 mt-2 text-md text-white">
            Le service chauffeur et accompagnateur
            <br />
            <span>de votre enfant.</span>
          </p>
        </div>
        <br />
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h3 class="text-2xl font-black text-primary-vert1 uppercase">
              Informations
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li>
                <a href="#" class="text-md font-normal text-white">
                  Qui sommes-nous ?
                </a>
              </li>
              <nuxt-link
                to="/price"
                class="
                  c-footer__links
                  transition-colors
                  lg:text-md
                  t-link
                  text-md
                  font-normal
                  text-white
                "
                >test
              </nuxt-link>
              <li>
                <a href="#" class="text-md font-normal text-white"> Tarifs </a>
              </li>
              <li>
                <a href="#" class="text-md font-normal text-white">
                  Contactez-nous
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3 class="text-2xl font-black text-primary-vert1 uppercase">
              Chauffeurs
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li>
                <a href="#" class="text-md font-normal text-white">
                  Devenir chauffeur
                </a>
              </li>
              <li>
                <a href="#" class="text-md font-normal text-white">
                  Plateforme Vroomer
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-8 lg:justify-end lg:mt-0">
            <h3 class="text-2xl font-black text-primary-vert1 uppercase">
              Vroom
            </h3>
            <div class="c-footer__socials-icons py-10">
              <div class="flex lg:justify-start">
                <a href="" class="pr-8 lg:pr-12">
                  <base-use-svg id="facebook" s size="lg" />
                </a>
                <a href="" class="pr-8 lg:pr-12">
                  <base-use-svg id="instagram" size="lg" />
                </a>
                <a href="" class="pr-8 lg:pr-12">
                  <base-use-svg id="twitter" size="lg" />
                </a>
              </div>
            </div>
            <div>
              <p href="#" class="text-md font-semibold text-white">
                S’abonner à notre newsletter
              </p>
            </div>
            <div
              class="inline-flex items-center gap-2 list-none lg:ml-auto w-full"
            >
              <form
                action=""
                method="post"
                name="revue-form"
                target="_blank"
                class="p-1 mt-4 bg-white rounded max-w-lg flex w-full"
              >
                <div class="flex-1 min-w-0">
                  <input
                    type="email"
                    class="
                      block
                      px-5
                      py-3
                      placeholder-grey-light
                      italic
                      text-md
                      transition
                      duration-500
                      ease-in-out
                      transform
                      bg-transparent
                      border border-transparent
                      rounded
                      h-full
                    "
                    placeholder="E-mail"
                  />
                </div>
                <div class="mr-1">
                  <t-button
                    type="submit"
                    value="Subscribe"
                    name="member"
                    class="text-sm font-semibold px-5 my-1 py-3 text-white"
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
    <div class="bg-primary-vert1 py-2">
      <div class="flex justify-between px-40">
        <div class="text-white text-xs my-4">
          © Copyright Vroom 2022. Made with love by HETIC.
        </div>
        <div class="text-white text-xs my-4">Mentions légales</div>
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

<style lang="scss" scoped>
.c-footer {
  &__socials-icons {
    @media (hover: hover) {
      fill: $white !important;
      &:hover {
        use {
          transition: 250ms $linear;
          fill: red !important;
        }
      }
    }
  }
}
</style>
