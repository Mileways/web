<template>
  <div>
    <section class="welcome-section">
        <div class="container mx-auto grid grid-cols-2">
          <div>
            <h1 class="text-5xl sm:text-6xl mt-3 font-black text-white">
              Go Travel.
            </h1>

            <p class="text-white text-4xl">
              Everything you need to know about your flights and your friends' flights.
              <br>

              <span class="font-bold">Fast, convenient and beautiful.</span>

              <img
                src="/images/download.svg"
                alt="Download on the App Store"
                class="h-10 mt-5"
              >
            </p>
          </div>

          <div>
            <img
              srcset="
                /images/mockups/main_mockup.png,
                /images/mockups/main_mockup_2x.png 2x,
                /images/mockups/main_mockup_3x.png 3x
              "
              src="/images/mockups/main_mockup.png"
              class="ml-auto"
              alt="Main mockup"
            >
          </div>
        </div>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'empty'
  }
</script>

<style scoped>
  .welcome-section {
    @apply flex flex-col pt-20 bg-primary bg-no-repeat mt-auto;

    background-image: url(/images/clouds.svg);
    background-position: center calc(99.99999% + 1px);
    background-repeat: repeat-x;
    background-size: auto 7rem;
  }

  @screen sm {
    .welcome-section {
      background-size: auto 10rem;
    }
  }

  @screen md {
    .welcome-section {
      @apply pt-40;

      background-size: auto 15rem;
    }
  }
</style>
