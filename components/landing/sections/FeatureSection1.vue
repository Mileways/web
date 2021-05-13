<template>
  <section class="container mx-auto py-24">
    <div class="max-w-3xl mx-auto">
      <h2 class="h2 text-primary">
        Some Two Row Sample Headline For a Feature
      </h2>

      <p class="h4 text-gray-700 mb-8 font-semibold">
        We love messaging. It’s our favorite way of collaborating, but not if it’s overwhelming and disorganized. We believe there’s a better way.
      </p>

      <p class="text-2xl text-gray-700 mb-12">
        Certe, inquam, pertinax non possim accommodare torquatos nostros? quos dolores eos, qui dolorem. Alii autem, quibus ego cum memoriter, tum etiam erga nos amice et quasi.
      </p>
    </div>

    <div class="light-card flex-card mb-8">
      <div class="bg-gray-300 pt-12 px-12 w-full lg:w-5/12">
        <ResponsiveImage
          src="/images/mockups/flights{size}.png"
          alt="Flights"
        />
      </div>

      <div class="px-20 w-full lg:w-7/12">
        <h3 class="h3 mb-6">Flights</h3>

        <p class="text-xl text-gray-700 mb-0">
          Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
        </p>
      </div>
    </div>

    <div class="light-card flex-card mb-8">
      <div class="px-20 lg:w-7/12">
        <h3 class="h3 mb-6">Flight Details</h3>

        <p class="text-xl text-gray-700 mb-0">
          Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
        </p>
      </div>

      <div class="bg-gray-300 pt-12 px-12 w-full lg:w-5/12">
        <ResponsiveImage
          src="/images/mockups/flight_details{size}.png"
          alt="Flight details"
          class="w-full"
        />
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-10">
      <div class="light-card p-10">
        <h3 class="h3">Flight Search</h3>

        <p class="text-gray-700 mb-16">
          Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
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
          Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
        </p>

        <div class="bg-gray-300 px-8 flex rounded-lg">
          <ResponsiveImage
            src="/images/mockups/calendar_export{size}.png"
            alt="Flight details"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'

  import ResponsiveImage from '../../general/ResponsiveImage'

  export default Vue.extend({
    name: 'FeatureSection1',

    components: { ResponsiveImage }
  })
</script>
