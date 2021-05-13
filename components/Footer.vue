<template>
  <footer class="py-10 bg-gray-100 text-sm">
    <div class="container mx-auto flex items-center">
      <nav>
        <ul>
          <li class="inline-block w-20">
            <nuxt-link to="/pages/terms-and-conditions">Terms</nuxt-link>
          </li>
          <li class="inline-block w-20">
            <nuxt-link to="/pages/privacy-policy">Privacy</nuxt-link>
          </li>
        </ul>
      </nav>

      <div class="ml-auto">
        <a
          :href="appStoreUrl"
          class="bg-primary text-white px-3 py-1 rounded-md"
        >
          Download
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
    }
  }
}
</script>
