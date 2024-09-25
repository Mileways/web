<template>
  <header
    :class="`py-5 flex items-center bg-${backgroundColor} text-${textColor} text-lg`">
    <div class="container w-full mx-auto flex items-center">
      <nuxt-link to="/">
        <img src="/images/logo_text.svg" alt="Mileways Logo"
          class="h-4 lg:h-auto"
          :style="textColor === 'black' ? { filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' } : {}">
      </nuxt-link>

      <nav class="ml-auto">
        <ul class="flex">
          <li class="mx-2 lg:mx-5">
            <a :href="appStoreUrl" target="_blank"
              rel="noopener noreferrer"
              class="cursor-pointer">Download</a>
          </li>

          <li class="mx-2 lg:mx-5">
            <a href="/pages/about">About</a>
          </li>

          <!-- <li class="mx-2 lg:mx-5">
            <a href="/comparisons/app-in-the-air">
              App in the Air
            </a>
          </li> -->
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    backgroundColor: {
      type: String,
      default: 'red-200'
    },
    textColor: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    appStoreUrl() {
      return process.env.APP_STORE_URL
    }
  }
}
</script>
