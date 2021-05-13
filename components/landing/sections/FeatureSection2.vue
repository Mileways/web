<template>
  <section class="bg-black text-white py-24">
    <div class="container mx-auto">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-5xl sm:text-6xl font-black mb-8 text-primary leading-tight">
          Some Two Row Sample Headline For a Feature
        </h2>

        <p class="text-3xl sm:text-4xl mb-12 font-semibold">
          We love messaging. It’s our favorite way of collaborating, but not if it’s overwhelming and disorganized. We believe there’s a better way.
        </p>
      </div>

      <div class="grid gap-8">
        <div class="rounded-4xl bg-gray-800 p-10 overflow-hidden">
          <div class="max-w-2xl mx-auto">
            <h3 class="font-black text-3xl mb-3">Friend's Flights</h3>

            <p class="text-gray-300 mb-16">
              Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
            </p>

            <ResponsiveImage
              src="/images/mockups/friends_flights{size}.png"
              alt="Friend's flight"
              class="w-full"
            />
          </div>
        </div>

        <div class="rounded-4xl bg-gray-800 flex flex-wrap lg:flex-no-wrap items-center overflow-hidden">
          <div class="w-full lg:w-7/12">
            <ResponsiveImage
              src="/images/mockups/greeting_sign{size}.png"
              alt="Airport greeting sign"
              class="w-full"
            />
          </div>

          <div class="px-12 w-full lg:w-5/12">
            <h3 class="font-black text-3xl mb-6">Airport Greeting Sign</h3>

            <p class="text-gray-300 mb-0">
              Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
            </p>
          </div>
        </div>

        <div class="rounded-4xl bg-gray-800 flex flex-wrap lg:flex-no-wrap items-center overflow-hidden">
          <div class="px-12 w-full lg:w-5/12">
            <h3 class="font-black text-3xl mb-6">Web Sharing</h3>

            <p class="text-gray-300 mb-0">
              Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
            </p>
          </div>

          <div class="w-full lg:w-7/12">
            <ResponsiveImage
              src="/images/mockups/web_sharing{size}.png"
              alt="Web Sharing"
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

  import FeatureCard from '../FeatureCard'
  import ResponsiveImage from '../../general/ResponsiveImage'

  export default Vue.extend({
    name: 'FeatureSection2',

    components: { FeatureCard, ResponsiveImage }
  })
</script>
