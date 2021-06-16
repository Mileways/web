<template>
  <section class="bg-black text-white py-24">
    <div class="container mx-auto">
      <div class="max-w-3xl mx-auto">
        <h2 class="h2 text-primary">
          Less friction, more time together — even apart.
        </h2>

        <p class="h4">
          They say that our social connections define our level of happiness and longevity.
        </p>

        <p class="text-lg lg:text-2xl text-white mb-12">
          Finally you have a flight tracker that considers the local aspect of your life. Whether friends, family or colleagues — we care.
        </p>
      </div>

      <div class="grid gap-8">
        <div class="dark-card flex-card">
          <div class="bg-gray-700 pt-5 px-5 w-full lg:w-5/12">
            <ResponsiveImage
                src="/images/mockups/friends_flights{size}.png"
                alt="Friend's flight"
                class="w-full"
            />
          </div>

          <div class="p-8 lg:px-20 lg:py-0 w-full lg:w-7/12">
            <h3 class="h3">Friend's Flights</h3>

            <p class="text-gray-300">
              Automatically available in your feed and keeping you up to date. No more messages like “Send me your flight details” or “My flight is delayed!”
              <br>
              And in case you have a flight you don’t want to announce, you can choose who can see your data with a quick tap on the privacy settings.
            </p>
          </div>
        </div>

        <div class="dark-card flex-card">
          <div class="w-full lg:w-7/12">
            <ResponsiveImage
              src="/images/mockups/greeting_sign{size}.png"
              alt="Airport greeting sign"
              class="w-full"
            />
          </div>

          <div class="p-8 lg:px-12 lg:py-0 w-full lg:w-5/12">
            <h3 class="h3 mb-6">Airport Greeting Sign</h3>

            <p class="text-gray-300 mb-0">
              If you ever want to pick up a close acquaintance or a business contact from the airport, Mileways has a built-in welcome sign mode that will make you stand out in the queue. All important information such as name is displayed like a banner — large and legible.
            </p>
          </div>
        </div>

        <div class="dark-card flex-card">
          <div class="p-8 lg:px-12 lg:py-0 w-full lg:w-5/12">
            <h3 class="h3 mb-6">Web Sharing</h3>

            <p class="text-gray-300 mb-0">
              Your friends and family can follow your flight not only through the iOS app, but from any platform using the Web Sharing feature.  Great for staying connected even through other devices.
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

  import ResponsiveImage from '../../general/ResponsiveImage'

  export default Vue.extend({
    name: 'FeatureSection2',

    components: { ResponsiveImage }
  })
</script>
