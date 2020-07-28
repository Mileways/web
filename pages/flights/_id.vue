<template>
  <div class="text-center w-full">
    <div
      v-if="flight"
      class="w-11/12 mx-auto max-w-5xl"
    >
      <div class="bg-white rounded-lg shadow-lg py-10 px-10 mb-10">
        {{ flight }}
      </div>

      <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
        <no-ssr>
          <FlightMap
            :departure-coordinates="[flight.departure.latitude, flight.departure.longitude]"
            :destination-coordinates="[flight.arrival.latitude, flight.arrival.longitude]"
          />
        </no-ssr>
      </div>

      <div class="bg-white rounded-lg shadow-lg py-10 px-10 mb-10">
        <span>{{ flight.airline.name }}</span>
        <span>{{ flight.fsCode }} {{ flight.flightNumber }}</span>

        <hr>

        <br>
        <br>

        <span>{{ flight.departure.name }}</span>
        <span>{{ flight.departure.fs }}</span>
        <span>{{ flight.departure.countryCode }}</span>
        <span>{{ flight.departure.countryName }}</span>

        <br>
        <br>

        <span>{{ flight.arrival.name }}</span>
        <span>{{ flight.arrival.fs }}</span>
        <span>{{ flight.arrival.countryCode }}</span>
        <span>{{ flight.arrival.countryName }}</span>

        <hr>

        <br>
        <br>

        <span>{{ flight.departureTimeZoned }}</span>
        <span>{{ flight.estimatedDepartureTimeZoned }}</span>

        <br>
        <br>

        <span>{{ flight.arrivalTimeZoned }}</span>
        <span>{{ flight.estimatedArrivalTime }}</span>

        <hr>

        <br>
        <br>

        <span>{{ flight.arrivalGate }}</span>
        <span>{{ flight.arrivalTerminal }}</span>

        <br>
        <br>

        <span>{{ flight.departureGate }}</span>
        <span>{{ flight.departureTerminal }}</span>
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

  import FlightMap from '../../components/FlightMap'

  export default Vue.extend({
    name: 'FlightView',

    components: { FlightMap },

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
