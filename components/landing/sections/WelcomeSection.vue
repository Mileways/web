<template>
  <section class="welcome-section">
    <div class="container mx-auto grid md:grid-cols-2">
      <div class="space-y-2">
        <a href="comparisons/app-in-the-air">
          <div class="bg-[#F2F2F2] rounded-[32px] p-4 mb-12">
            <div class="flex items-start">
              <svg width="20" height="20" viewBox="0 0 26 26"
                fill="none" xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 mr-2">
                <path
                  d="M13.0003 23.8337C7.01724 23.8337 2.16699 18.9834 2.16699 13.0003C2.16699 7.01724 7.01724 2.16699 13.0003 2.16699C18.9834 2.16699 23.8337 7.01724 23.8337 13.0003C23.8337 18.9834 18.9834 23.8337 13.0003 23.8337ZM13.0003 21.667C17.7868 21.667 21.667 17.7868 21.667 13.0003C21.667 8.21385 17.7868 4.33366 13.0003 4.33366C8.21385 4.33366 4.33366 8.21385 4.33366 13.0003C4.33366 17.7868 8.21385 21.667 13.0003 21.667ZM11.917 7.58366H14.0837V9.75033H11.917V7.58366ZM11.917 11.917H14.0837V18.417H11.917V11.917Z"
                  fill="#0D1012" />
              </svg>
              <div class="space-y-1">
                <p
                  class="font-semibold mb-0 leading-[20px] flex items-center">
                  You can now migrate your App in the Air flight
                  history
                  into Mileways!
                </p>
              </div>
            </div>
          </div>
        </a>
        <h1
          class="text-5xl leading-tight sm:text-6xl font-black text-white lg:mt-10">
          All about flights.
        </h1>

        <p class="text-2xl sm:text-4xl text-white max-w-md">
          Everything you need to know about your flights and your
          friends' flights.
          <br>

          <span class="font-bold pt-2">
            Fast, convenient
            <br>
            and beautiful.
          </span>

          <a :href="appStoreUrl">
            <img src="/images/download.svg"
              alt="Download on the App Store" class="h-10 mt-5">
          </a>
        </p>
      </div>

      <div class="mt-10 md:mt-0">
        <ResponsiveImage src="/images/mockups/main_mockup{size}.png"
          class="ml-auto" alt="Main mockup" />
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';

import ResponsiveImage from '../../general/ResponsiveImage';

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
.welcome-section
{
  @apply flex flex-col bg-primary bg-no-repeat mt-auto;

  background-image: url(/images/clouds.svg);
  background-position: center calc(99.99999% + 1px);
  background-repeat: repeat-x;
  background-size: auto 20rem;
}

@screen sm
{
  .welcome-section
  {
    @apply pb-40;

    background-size: auto 8rem;
  }
}

@screen lg
{
  .welcome-section
  {
    @apply pt-24 pb-20;

    background-size: auto 19rem;
  }
}

@screen xl
{
  .welcome-section
  {
    @apply pb-0;
  }
}
</style>
