<template>
  <section class="bg-white py-10">
    <div class="flex flex-col items-center">
      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 max-w-4xl items-center">
        <div class="text-center">
          <span class="text-3xl font-medium m-0 pb-0">100'000</span>
          <p class="text-lg">Travelers</p>
        </div>

        <div class="text-center">
          <span class="text-3xl font-medium m-0 pb-0">190+</span>
          <p class="text-lg">Countries</p>
        </div>

        <div class="text-center">
          <span class="text-3xl font-medium m-0 pb-0">300'000</span>
          <p class="text-lg">Trips</p>
        </div>

        <div class="text-center">
          <span class="text-3xl font-medium m-0 pb-0">1'000'000</span>
          <p class="text-lg">Flights</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";

import ResponsiveImage from "../general/ResponsiveImage";

export default Vue.extend({
  name: "Hero",

  computed: {
    appStoreUrl() {
      return process.env.APP_STORE_URL;
    },
  },

  components: { ResponsiveImage },
});
</script>
