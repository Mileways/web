<template>
  <footer class="py-10 bg-gray-100 text-sm">
    <div class="container mx-auto flex flex-wrap-reverse lg:flex-no-wrap items-center">
      <nav class="mx-auto lg:mx-0">
        <ul class="grid grid-cols-3 gap-4 lg:gap-8">
          <li class="inline-block">
            <nuxt-link to="/pages/about">About</nuxt-link>
          </li>
          <li class="inline-block">
            <nuxt-link to="/pages/terms-and-conditions">Terms</nuxt-link>
          </li>
          <li class="inline-block">
            <nuxt-link to="/pages/privacy-policy">Privacy</nuxt-link>
          </li>
        </ul>
      </nav>

      <div class="mx-auto lg:mr-0 flex flex-wrap lg:flex-no-wrap items-center">
        <div class="w-full lg:w-auto text-center mb-6 lg:mb-0">
          <a
            :href="appStoreUrl"
            class="bg-primary text-white px-3 py-1 mx-8 rounded-md"
          >
            Download
          </a>
        </div>

        <div class="grid grid-cols-3 gap-8 mx-auto mb-6 lg:mb-0">
          <a :href="instagramUrl" target="_blank">
            <img src="/images/icons/instagram.svg" alt="Instagram Logo" class="w-5">
          </a>

          <a :href="twitterUrl" target="_blank">
            <img src="/images/icons/twitter.svg" alt="Twitter Logo" class="w-5">
          </a>

          <a :href="facebookUrl" target="_blank">
            <img src="/images/icons/facebook.svg" alt="Facebook Logo" class="w-5">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Header',

  computed: {
    appStoreUrl() {
      return process.env.APP_STORE_URL
    },

    instagramUrl() {
      return process.env.INSTAGRAM_URL
    },

    twitterUrl() {
      return process.env.TWITTER_URL
    },

    facebookUrl() {
      return process.env.FACEBOOK_URL
    }
  }
}
</script>
