<template>
  <section class="bg-black text-white py-24">
    <div class="container mx-auto">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-6xl font-black mb-8 text-primary leading-tight">
          Some Two Row Sample Headline For a Feature
        </h2>

        <p class="text-4xl mb-12 font-semibold">
          We love messaging. It’s our favorite way of collaborating, but not if it’s overwhelming and disorganized. We believe there’s a better way.
        </p>
      </div>

      <div class="grid gap-8">
        <div class="rounded-4xl bg-gray-200 p-10">

        </div>

        <div class="rounded-4xl bg-gray-200 p-10">

        </div>

        <div class="rounded-4xl bg-gray-200 p-10">

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
