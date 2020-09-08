<template>
  <section class="container mx-auto my-20">
    <div class="rounded-4xl bg-gray-200 overflow-hidden">
      <div class="pt-16 px-10">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-5xl font-black mb-5">Details</h2>

          <p class="text-xl">
            <span class="font-black">We love what we do.</span>
            And that’s why our product is not just a combination of third party services.
            We have challenged every feature built into Mileways, analyzed every detail, questioned the status quo of flight tracking.
          </p>

          <p class="text-xl">
            You’ll find many hand crafted elements in our service, from custom airline logos to beautifully designed country flags, everything is made  to tingle a travelers heart.
          </p>
        </div>
      </div>

      <div>
        <ResponsiveImage
          src="/images/airlines{size}.png"
          class="mx-auto mt-10 w-full"
          alt="Airline logos"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'

  import ResponsiveImage from '../../general/ResponsiveImage'

  export default Vue.extend({
    name: 'DetailsSection',

    components: { ResponsiveImage }
  })
</script>
