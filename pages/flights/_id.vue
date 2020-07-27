<template>
  <div class="text-center">
    <div
      v-if="flight"
      class="w-11/12 mx-auto max-w-5xl"
    >
      <div class="bg-white rounded-lg shadow-lg py-10 px-10 mb-10">
        Title
      </div>

      <div class="bg-white rounded-lg shadow-lg py-10 px-10 mb-10">
        Map
      </div>

      <div class="bg-white rounded-lg shadow-lg py-10 px-10 mb-10">
        {{ flight }}
      </div>
    </div>

    <p
      v-else
      class="text-2xl"
    >
      Sorry, we couldn't find that flight.
    </p>
  </div>
</template>


<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'FlightView',

    async middleware ({ store, params }) {
      await store.dispatch('flights/loadFlightData', params.id)
    },

    computed: {
      flightId() {
        return this.$route.params.id
      },

      flight() {
        return this.$store.getters['flights/flightById'](this.flightId)
      }
    }
  })
</script>

<style>
  body {
    @apply bg-gray-200;
  }
</style>
