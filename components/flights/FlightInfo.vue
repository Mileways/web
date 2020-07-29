<template>
  <div class="px-10 pt-5">
    <div class="flex items-center">
      <img
        :src="airlineLogo"
        :alt="airlineInfo.name"
        class="h-10 w-10 mr-5"
      >

      <div>
        <span class="font-semibold">{{ airlineInfo.name }}</span>
        <br>
        <span class="text-gray-500">{{ airlineInfo.fs }} {{ flightNumber }}</span>
      </div>
    </div>
  </div>
</template>


<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'FlightInfo',

    props: {
      airlineInfo: { type: Object, required: true },
      flightNumber: { type: String, required: true },

    },

    computed: {
      airlineLogo() {
        return '/images/logos/airlines/' + this.airlineInfo.fs + '.svg'
      }
    }
  })
</script>
