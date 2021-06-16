<template>
  <section class="welcome-section">
    <div class="container mx-auto grid md:grid-cols-2">
      <div class="mt-5">
        <h1 class="text-5xl leading-tight sm:text-6xl mt-3 font-black text-white">
          Go Travel.
        </h1>

        <p class="text-2xl sm:text-4xl text-white max-w-md">
          Everything you need to know about your flights and your friends' flights.
          <br>

          <span class="font-bold">
            Fast, convenient
            <br>
            and beautiful.
          </span>

          <a :href="appStoreUrl">
            <img
              src="/images/download.svg"
              alt="Download on the App Store"
              class="h-10 mt-5"
            >
          </a>
        </p>
      </div>

      <div class="mt-10 md:mt-0">
        <ResponsiveImage
          src="/images/mockups/main_mockup{size}.png"
          class="ml-auto"
          alt="Main mockup"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'

  import ResponsiveImage from '../../general/ResponsiveImage'

  export default Vue.extend({
    name: 'WelcomeSection',

    components: { ResponsiveImage },

    computed: {
      appStoreUrl() {
        return process.env.APP_STORE_URL
      }
    }
  })
</script>

<style scoped>
  .welcome-section {
    @apply flex flex-col pt-20 bg-primary bg-no-repeat mt-auto;

    background-image: url(/images/clouds.svg);
    background-position: center calc(99.99999% + 1px);
    background-repeat: repeat-x;
    background-size: auto 20rem;
  }

  @screen sm {
    .welcome-section {
      @apply pb-40;

      background-size: auto 8rem;
    }
  }

  @screen lg {
    .welcome-section {
      @apply pt-40 pb-20;

      background-size: auto 19rem;
    }
  }

  @screen xl {
    .welcome-section {
      @apply pb-0;
    }
  }
</style>
