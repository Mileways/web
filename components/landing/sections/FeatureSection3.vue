<template>
  <section class="bg-primary text-white py-24">
    <div class="container mx-auto">
      <div class="max-w-3xl mx-auto">
        <h2 class="h2">
          Well-thought-out, down to the last detail.
        </h2>

        <p class="h4 text-gray-200">
          Due to the complexity of data, it is not easy to build an insightful and a simple product at the same time.
        </p>

        <p class="text-2xl">
          However, we have gone the extra mile and dedicated ourselves to every detail, no matter how small.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-10 mb-10">
        <div class="light-card p-10">
          <h3 class="h3">Flight Search</h3>

          <p class="text-gray-700 mb-16">
            Would you like to add the flight from the comfort of your couch or do you already have the flight number on your clipboard? Or would you rather scan the code directly from the ticket?
            <br>
            No problem, with Mileways everything is possible.
          </p>

          <div class="bg-gray-300 px-8 flex rounded-lg">
            <ResponsiveImage
                src="/images/mockups/flight_search{size}.png"
                alt="Flight details"
            />
          </div>
        </div>

        <div class="light-card p-10">
          <h3 class="h3">Calendar Export</h3>

          <p class="text-gray-700 mb-16">
            Even outside the app, smart features like calendar export keep you informed and on top of your agenda. Especially helpful for busy people with full schedules.
          </p>

          <div class="bg-gray-300 px-8 flex rounded-lg">
            <ResponsiveImage
                src="/images/mockups/calendar_export{size}.png"
                alt="Flight details"
            />
          </div>
        </div>
      </div>

      <div
        class="-mb-8 text-black gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <div class="flex flex-col">
          <div
              class="rounded-4xl text-white bg-cover bg-center pt-10 px-10 mb-8"
              style="break-inside: avoid; background-image: url(/images/backgrounds/green_haze.jpg);"
          >
            <h3 class="h3">Widgets</h3>

            <p>
              All information about the next flight at a glance.#
            </p>

            <ResponsiveImage
              src="/images/mockups/widgets{size}.png"
              alt="Widgets"
              class="w-full"
            />
          </div>

          <div
              class="light-card p-10 mb-8 flex-grow"
              style="break-inside: avoid;"
          >
            <h3 class="h3">Aircraft Illustrations</h3>

            <p class="text-gray-700 mb-8">
              For the nerds among us, true-to-life images of the aircraft are displayed in the flight details.
            </p>

            <ResponsiveImage
              src="/images/elements/plane{size}.png"
              alt="Plane"
              class="w-full"
            />
          </div>
        </div>

        <div class="flex flex-col">
          <div
              class="light-card p-10 mb-8 flex-grow"
              style="break-inside: avoid;"
          >
            <h3 class="h3">Statistics</h3>

            <p class="text-gray-700 mb-8">
              How far have I already flown in my life? Thanks to detailed statistics, one becomes much more aware of one’s own flight behavior, thus evaluating possibilities for sustainability.
            </p>

            <ResponsiveImage
              src="/images/elements/counter{size}.png"
              alt="Mile counter"
              class="w-full"
            />
          </div>

          <div
              class="light-card mb-8 flex-grow"
              style="break-inside: avoid;"
          >
            <div class="p-10">
              <h3 class="h3">Airline Logos</h3>

              <p class="text-gray-700 mb-8">
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

        <div class="flex flex-col">
          <div
              class="light-card p-10 mb-8 flex-grow"
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
              class="light-card p-10 mb-8 flex-grow"
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
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'

  import ResponsiveImage from '../../general/ResponsiveImage'

  export default Vue.extend({
    name: 'FeatureSection3',

    components: { ResponsiveImage }
  })
</script>
