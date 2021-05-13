<template>
  <section class="text-center container mx-auto py-16">
    <h2 class="text-5xl font-black mb-5 text-primary">
      Some Two Row Sample Headline For a Feature
    </h2>

    <p>
      We love messaging. It’s our favorite way of collaborating, but not if it’s overwhelming and disorganized. We believe there’s a better way.
    </p>

    <p class="max-w-3xl inline-block mx-auto text-left text-xl text-gray-700 mb-12">
      Certe, inquam, pertinax non possim accommodare torquatos nostros? quos dolores eos, qui dolorem. Alii autem, quibus ego cum memoriter, tum etiam erga nos amice et quasi.
    </p>

    <div class="rounded-4xl bg-gray-200 p-10 my-10">

    </div>

    <div class="rounded-4xl bg-gray-200 p-10 my-10">

    </div>

    <div class="grid lg:grid-cols-2 gap-10">
      <div class="rounded-4xl bg-gray-200 p-10 my-10">

      </div>

      <div class="rounded-4xl bg-gray-200 p-10 my-10">

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
