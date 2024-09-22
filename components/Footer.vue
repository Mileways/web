<template>
  <footer class="py-10 bg-gray-100 text-sm">
    <div
      class="container mx-auto grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div class="col-span-1">
        <h3 class="font-bold mb-2">Navigation</h3>
        <ul class="flex flex-col space-y-2">
          <li>
            <nuxt-link to="/pages/about"
              class="inline-flex items-center">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/pages/terms-and-conditions"
              class="inline-flex items-center">Terms</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/pages/privacy-policy"
              class="inline-flex items-center">Privacy</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="col-span-1">
        <h3 class="font-bold mb-2">Comparisons</h3>
        <ul class="flex flex-col space-y-2">
          <li>
            <nuxt-link to="/comparisons/app-in-the-air"
              class="inline-flex items-center">App in the
              Air</nuxt-link>
          </li>
          <!-- Add more comparison links here if needed -->
        </ul>
      </div>

      <div class="col-span-1 flex flex-col space-y-4">
        <a :href="appStoreUrl"
          class="bg-primary rounded-full text-white px-4 py-2 text-center font-bold cursor-pointer w-fit">
          Download
        </a>
        <a :href="newsletterUrl"
          class="text-black font-bold underline underline-offset-4 w-fit text-left">
          Get E-Mail Updates
        </a>
      </div>

      <div class="col-span-1 flex flex-col items-start sm:items-end">
        <h3 class="font-bold mb-2">Follow us</h3>
        <div class="flex space-x-4">
          <a :href="instagramUrl" target="_blank"
            class="inline-flex items-center">
            <img src="/images/icons/instagram.svg"
              alt="Instagram Logo" class="w-6 h-6" />
          </a>
          <a :href="twitterUrl" target="_blank"
            class="inline-flex items-center">
            <img src="/images/icons/twitter.svg" alt="Twitter Logo"
              class="w-6 h-6" />
          </a>
          <a :href="facebookUrl" target="_blank"
            class="inline-flex items-center">
            <img src="/images/icons/facebook.svg" alt="Facebook Logo"
              class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  computed: {
    appStoreUrl() {
      return process.env.APP_STORE_URL;
    },
    newsletterUrl() {
      return "http://eepurl.com/g-rWrH";
    },
    instagramUrl() {
      return process.env.INSTAGRAM_URL;
    },
    twitterUrl() {
      return process.env.TWITTER_URL;
    },
    facebookUrl() {
      return process.env.FACEBOOK_URL;
    },
  },
};
</script>
