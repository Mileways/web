<template>
  <section class="container mx-auto my-32">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-5xl font-black mb-5">Story</h2>

      <p class="text-xl">
        <span class="font-black">We've come a long way.</span>
        Started in 2013, Mileways was first a service for collecting and redeeming miles independently of airlines.
        We’ve learned it the hard way, that this was not really something people asked for.
      </p>
    </div>

    <div class="rounded-4xl bg-gray-200 p-10 my-10">
      <ResponsiveImage
        src="/images/old_webpage{size}.png"
        class="mx-auto mt-10"
        alt="Old webpage"
      />
    </div>

    <div class="max-w-3xl mx-auto">
      <p class="text-xl">
        But ever since we believed, that the need was big for a simple, elegant and fast flight tracker.
        A place where people would be able to store their past and upcoming flights beautifully,
        a place where relevant information about flights is being sent ridiculously fast,
        a place where it’s super easy to share flight information with friends,
        maybe even without actively sharing it.
        And most of all, a reliable service which supports all air passengers and people serving the sky during their journeys.
      </p>

      <p class="text-xl">
        So we have used all our years of experience in this market,
        all our knowledge and power to deliver the new version of Mileways.
        And we hope you enjoy it as much as wo love to work on it.
      </p>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'

  import ResponsiveImage from '../../general/ResponsiveImage'

  export default Vue.extend({
    name: 'StorySection',

    components: { ResponsiveImage }
  })
</script>
