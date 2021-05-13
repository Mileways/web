<template>
  <section class="container mx-auto py-24">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-6xl font-black mb-8 text-primary leading-tight">
        Some Two Row Sample Headline For a Feature
      </h2>

      <p class="text-4xl text-gray-700 mb-8 font-semibold">
        We love messaging. It’s our favorite way of collaborating, but not if it’s overwhelming and disorganized. We believe there’s a better way.
      </p>

      <p class="text-2xl text-gray-700 mb-12">
        Certe, inquam, pertinax non possim accommodare torquatos nostros? quos dolores eos, qui dolorem. Alii autem, quibus ego cum memoriter, tum etiam erga nos amice et quasi.
      </p>
    </div>

    <div class="rounded-4xl bg-gray-200 mb-8 flex items-center overflow-hidden">
      <div class="bg-gray-300 pt-12 px-12 w-5/12">
        <ResponsiveImage
          src="https://placekitten.com/343/610"
          alt=""
          :sizes="[]"
        />
      </div>

      <div class="px-20 w-7/12">
        <h3 class="font-black text-3xl mb-6">Flights</h3>

        <p class="text-xl text-gray-700 mb-0">
          Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
        </p>
      </div>
    </div>

    <div class="rounded-4xl bg-gray-200 mb-8 flex items-center overflow-hidden">
      <div class="px-20 w-7/12">
        <h3 class="font-black text-3xl mb-6">Flight Details</h3>

        <p class="text-xl text-gray-700 mb-0">
          Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
        </p>
      </div>

      <div class="bg-gray-300 pt-12 px-12 w-5/12">
        <ResponsiveImage
            src="https://placekitten.com/343/610"
            alt=""
            :sizes="[]"
        />
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-10">
      <div class="rounded-4xl bg-gray-200 p-10">
        <h3 class="font-black text-3xl mb-3">Flight Search</h3>

        <p class="text-gray-700 mb-16">
          Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
        </p>

        <div class="bg-gray-300 px-8 flex rounded-lg">
          <ResponsiveImage
            src="https://placekitten.com/343/352"
            alt=""
            :sizes="[]"
          />
        </div>
      </div>

      <div class="rounded-4xl bg-gray-200 p-10">
        <h3 class="font-black text-3xl mb-3">Calendar Export</h3>

        <p class="text-gray-700 mb-16">
          Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
        </p>

        <div class="bg-gray-300 px-8 flex rounded-lg">
          <ResponsiveImage
            src="https://placekitten.com/343/352"
            alt=""
            :sizes="[]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'

  import FeatureCard from '../FeatureCard'
  import ResponsiveImage from '../../general/ResponsiveImage'

  export default Vue.extend({
    name: 'FeatureSection1',

    components: { FeatureCard, ResponsiveImage }
  })
</script>
