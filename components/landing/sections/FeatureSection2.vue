<template>
  <section class="text-center bg-black text-white py-16">
    <div class="container mx-auto">
      <h2 class="text-5xl font-black mb-5 text-primary">
        Some Two Row Sample Headline For a Feature
      </h2>

      <p>
        We love messaging. It’s our favorite way of collaborating, but not if it’s overwhelming and disorganized. We believe there’s a better way.
      </p>

      <div class="rounded-4xl bg-gray-200 p-10 my-10">

      </div>

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
    name: 'FeatureSection2',

    components: { FeatureCard, ResponsiveImage }
  })
</script>
