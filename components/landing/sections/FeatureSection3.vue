<template>
  <section class="bg-primary text-white py-24">
    <div class="container mx-auto">
      <div class="max-w-3xl mx-auto">
        <h2 class="h2">
          Some Two Row Sample Headline For a Feature
        </h2>

        <p class="h4 mb-12 text-gray-200">
          We love messaging. It’s our favorite way of collaborating, but not if it’s overwhelming and disorganized. We believe there’s a better way.
        </p>
      </div>

      <div class="light-card flex-card mb-8">
        <div class="p-10 lg:px-20 lg:py-0 w-full lg:w-7/12">
          <h3 class="h3 mb-6">Notifications</h3>

          <p class="text-xl text-gray-700">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>

          <p class="text-xl text-gray-700 mb-0">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div class="bg-gray-300 w-full lg:w-5/12">
          <ResponsiveImage
            src="/images/mockups/notifications{size}.png"
            alt="Notifications"
            class="w-full"
          />
        </div>
      </div>

      <div
        class="-mb-8 text-black gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <div class="flex flex-col">
          <div
              class="rounded-4xl text-white bg-cover bg-center pt-10 px-10 mb-8"
              style="break-inside: avoid; background-image: url(/images/backgrounds/green_haze.svg);"
          >
            <h3 class="h3">Widgets</h3>

            <p>
              Ut placet, inquam tum dicere exorsus est.
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
              Ut placet, inquam tum dicere exorsus est consecutus? laudem et impetus.
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
              Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
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
                Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus.
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
              Ut placet, inquam tum.
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
              Ut placet, inquam tum dicere exorsus est consecutus? laudem et impetus.
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
