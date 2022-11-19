<template>
  <section class="bg-primary text-white py-12 lg:py-24">
    <div class="container mx-auto">
      <div class="max-w-3xl mx-auto mb-10">
        <h2 class="h2">
          Well-thought-out, down to the last detail.
        </h2>

        <p class="h4 text-gray-200">
          Due to the complexity of data, it is not easy to build an insightful and a simple product at the same time.
        </p>

        <p class="text-lg lg:text-2xl">
          However, we have gone the extra mile and dedicated ourselves to every detail, no matter how small.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-10 mb-10">
        <div class="white-card p-8 lg:p-10 flex flex-col">
          <h3 class="h3">Flight Search</h3>

          <p class="text-gray-700 mb-16">
            Would you like to add the flight from the comfort of your couch or do you already have the flight number on your clipboard? Or would you rather scan the code directly from the ticket?
            <br>
            No problem, with Mileways everything is possible.
          </p>

          <div class="bg-gray-300 px-5 lg:px-8 flex mt-auto rounded-lg">
            <ResponsiveImage
                src="/images/mockups/flight_search{size}.png"
                alt="Flight details"
            />
          </div>
        </div>

        <div class="white-card p-8 lg:p-10 flex flex-col">
          <h3 class="h3">Calendar Export</h3>

          <p class="text-gray-700 mb-16">
            Even outside the app, smart features like calendar export keep you informed and on top of your agenda. Especially helpful for busy people with full schedules.
          </p>

          <div class="bg-gray-300 px-5 lg:px-8 flex mt-auto rounded-lg">
            <ResponsiveImage
                src="/images/mockups/calendar_export{size}.png"
                alt="Flight details"
            />
          </div>
        </div>
      </div>

      <div
        class="text-black gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 lg:mb-24"
      >
        <div class="grid grid-cols-1 gap-8">
          <div
              class="dark-card bg-cover bg-center pt-8 px-8 lg:pt-10 lg:px-10 flex flex-col"
              style="break-inside: avoid; background-image: url(/images/backgrounds/green_haze.jpg);"
          >
            <h3 class="h3">Widgets</h3>

            <p>
              All information about the next flight at a glance.
            </p>

            <ResponsiveImage
              src="/images/mockups/widgets{size}.png"
              alt="Widgets"
              class="w-full mt-auto"
            />
          </div>

          <div
              class="white-card p-8 lg:p-10 flex-grow flex flex-col"
              style="break-inside: avoid;"
          >
            <h3 class="h3">Aircraft Illustrations</h3>

            <p class="text-gray-700 mb-8">
              For the nerds among us, true-to-life images of the aircraft are displayed in the flight details.
            </p>

            <ResponsiveImage
              src="/images/elements/plane{size}.png"
              alt="Plane"
              class="w-full mt-auto"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 gap-8">
          <div
              class="white-card p-8 lg:p-10 flex-grow flex flex-col"
              style="break-inside: avoid;"
          >
            <h3 class="h3">Statistics</h3>

            <p class="text-gray-700 mb-8">
              How far have I already flown in my life? Thanks to detailed statistics, one becomes much more aware of one’s own flight behavior, thus evaluating possibilities for sustainability.
            </p>

            <MileCounter />
          </div>

          <div
              class="white-card flex-grow"
              style="break-inside: avoid;"
          >
            <div class="p-8 lg:p-10">
              <h3 class="h3">Airline Logos</h3>

              <p class="text-gray-700">
                With a collection of over 350 colorful airline logos, navigating the app is 1.000× easier.
              </p>
            </div>

            <ResponsiveImage
              src="/images/elements/airline_logos{size}.png"
              alt="Airline logos"
              class="w-full"
            />
          </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-1 md:col-span-2 lg:col-span-1 gap-8">
          <div
              class="white-card p-8 lg:p-10 flex-grow"
              style="break-inside: avoid;"
          >
            <h3 class="h3">App Icons</h3>

            <p class="text-gray-700 mb-8">
              Pick one, make it yours.
            </p>

            <ResponsiveImage
              src="/images/elements/app_icons{size}.png"
              alt="App Icons"
              class="w-full"
            />
          </div>

          <div
              class="white-card p-8 lg:p-10 flex-grow"
              style="break-inside: avoid;"
          >
            <h3 class="h3">Country flags</h3>

            <p class="text-gray-700 mb-8">
              Over 230 hand-drawn country flags optimized for mobile devices contribute to even better orientation.
            </p>

            <ResponsiveImage
              src="/images/elements/country_flags{size}.png"
              alt="Country flags"
              class="w-full"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <EMailButtonWhite />
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'

  import ResponsiveImage from '../../general/ResponsiveImage'
  import MileCounter from '../../landing/MileCounter'
  import EMailButtonWhite from '../../general/EMailButtonWhite.vue'

  export default Vue.extend({
    name: 'FeatureSection3',

    components: { ResponsiveImage, MileCounter, EMailButtonWhite }
  })
</script>
