<template>
  <header class="py-5 flex items-center bg-primary text-white text-lg">
    <div class="container w-full mx-auto flex items-center">
      <nuxt-link to="/">
        <img src="/images/logo_text.svg" alt="Mileways Logo">
      </nuxt-link>

      <nav class="ml-auto">
        <ul class="flex">
          <li class="mx-5">
            <a href="/pages/about">About</a>
          </li>

          <li class="mx-5">
            <a :href="appStoreUrl">Download</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
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
