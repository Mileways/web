<template>
  <footer class="py-10 bg-gray-100 text-sm">
    <div class="container mx-auto flex items-center">
      <nav>
        <ul>
          <li class="inline-block w-20">
            <nuxt-link to="/pages/about">About</nuxt-link>
          </li>
          <li class="inline-block w-20">
            <nuxt-link to="/pages/terms-and-conditions">Terms</nuxt-link>
          </li>
          <li class="inline-block w-20">
            <nuxt-link to="/pages/privacy-policy">Privacy</nuxt-link>
          </li>
        </ul>
      </nav>

      <div class="ml-auto flex items-center">
        <a
          :href="appStoreUrl"
          class="bg-primary text-white px-3 py-1 mx-4 rounded-md"
        >
          Download
        </a>

        <a :href="instagramUrl" target="_blank" class="mx-4">
          <img src="/images/icons/instagram.svg" alt="Instagram Logo">
        </a>

        <a :href="twitterUrl" target="_blank" class="mx-4">
          <img src="/images/icons/twitter.svg" alt="Twitter Logo">
        </a>

        <a :href="facebookUrl" target="_blank" class="mx-4">
          <img src="/images/icons/facebook.svg" alt="Facebook Logo">
        </a>
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
