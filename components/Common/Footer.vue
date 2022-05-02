<template>
  <footer class="bg-black-default py-8 sm:py-12">
    <div class="container mb-24">
      <div class="pt-5">
        <div class="space-y-8 xl:col-span-1">
          <a
            href="/"
            class="
              text-lg
              font-bold
              tracking-tighter
              text-primary-vert1
              transition
              duration-500
              ease-in-out
              transform
              lg:pr-8
            "
          >
            logo
          </a>
          <p class="w-1/2 mt-2 text-md text-white">
            Le service chauffeur et accompagnateur
            <br />
            <span>de votre enfant.</span>
          </p>
        </div>
        <br />
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div>
            <h3 class="text-2xl font-black text-primary-vert1 uppercase">
              Informations
            </h3>
            <ul role="list" class="mt-4 space-y-4">
              <li>
                <a href="#" class="text-md font-normal text-white">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" class="text-md font-normal text-white">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" class="text-md font-normal text-white">
                  Commerce
                </a>
              </li>
              <li>
                <a href="#" class="text-md font-normal text-white">
                  Insights
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
                <a href="#" class="text-md font-normal text-white"> Pricing </a>
              </li>
              <li>
                <a href="#" class="text-md font-normal text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" class="text-md font-normal text-white"> Guides </a>
              </li>
              <li>
                <a href="#" class="text-md font-normal text-white">
                  API Status
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-8 lg:justify-end xl:mt-0">
            <h3 class="text-2xl font-black text-primary-vert1 uppercase">
              Vroom
            </h3>
            <div class="p-5">
              <div class="flex sm:justify-center xl:justify-start">
                <a
                  href=""
                  class="
                    w-8
                    h-8
                    border border-2 border-gray-400
                    rounded-full
                    text-center
                    py-1
                    text-gray-600
                    hover:text-white hover:bg-blue-600 hover:border-blue-600
                  "
                >
                  <i class="fab fa-facebook"></i>
                </a>
                <a
                  href=""
                  class="
                    w-8
                    h-8
                    border border-2 border-gray-400
                    rounded-full
                    text-center
                    py-1
                    ml-2
                    text-gray-600
                    hover:text-white hover:bg-blue-400 hover:border-blue-400
                  "
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href=""
                  class="
                    w-8
                    h-8
                    border border-2 border-gray-400
                    rounded-full
                    text-center
                    py-1
                    ml-2
                    text-gray-600
                    hover:text-white hover:bg-red-600 hover:border-red-600
                  "
                >
                  <i class="fab fa-google-plus-g"></i>
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
                  >
                    S’abonner
                  </t-button>
                </div>
              </form>
            </div>
          </div>
          <!-- <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8"></div>
            <div class="hidden lg:justify-end md:grid md:grid-cols-1">
              <div class="w-full mt-12 md:mt-0"></div>
            </div>
          </div> -->
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
body {
  nav {
    a {
      color: $white;
    }
  }
  &:not(.homepage) {
    nav {
      a {
        color: $black;
      }
    }
  }
}
</style>
