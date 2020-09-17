<template>
  <div
    v-if="!isAccepted"
    class="disclaimer"
  >
    <p class="text-gray-700">
       This website uses cookies. By using our website you consent to our use of these cookies. For more information on please visit our
      <nuxt-link to="/pages/privacy-policy" class="text-primary">Privacy Policy</nuxt-link>.
    </p>

    <button
      class="text-white bg-primary px-3 py-2 rounded-lg"
      @click="dismiss"
    >
      Got it.
    </button>
  </div>
</template>


<script>
  import Vue from 'vue'

  const COOKIE_DISCLAIMER_STORAGE_KEY = 'cookie-disclaimer-dismissed'

  export default Vue.extend({
    name: 'CookieDisclaimer',

    data() {
      return {
        isAccepted: !!localStorage.getItem(COOKIE_DISCLAIMER_STORAGE_KEY)
      }
    },

    methods: {
      dismiss() {
        localStorage.setItem(COOKIE_DISCLAIMER_STORAGE_KEY, 1)

        this.isAccepted = true
      }
    }
  })
</script>

<style scoped>
  .disclaimer {
    @apply fixed left-0 bottom-0 mb-5 ml-5 bg-white shadow-xl px-10 py-5 max-w-xl rounded-xl;
  }
</style>
