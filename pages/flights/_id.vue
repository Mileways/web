<template>
  <div class="w-full">
    <div
      v-if="flight"
      class="w-11/12 mx-auto max-w-5xl"
    >
      <div class="bg-white rounded-xl shadow-lg py-10 px-10 mb-10">
        <a href="https://apps.apple.com/us/app/mileways/id572415446">
          <img
            src="/images/download.svg"
            alt="Download on the App Store"
            class="mx-auto h-12"
          >
        </a>
      </div>

      <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
        <no-ssr>
          <FlightMap
            :departure-coordinates="[flight.departure.latitude, flight.departure.longitude]"
            :destination-coordinates="[flight.arrival.latitude, flight.arrival.longitude]"
          />
        </no-ssr>
      </div>

      <div class="bg-white rounded-xl shadow-lg pb-10 mb-10">
        <FlightInfo
          :airline-info="flight.airline"
          :flight-number="flight.flightNumber"
        />

        <SectionSeparator />

        <div class="flex items-center px-10">
          <AirportInfo
            class="flex-grow w-1/3"
            :airport-info="flight.departure"
            alignment="left"
          />

          <div class="w-1/3">
            <img
              src="/images/icons/plane.svg"
              alt="Plane Icon"
              class="mx-auto"
            >
          </div>

          <AirportInfo
            class="flex-grow w-1/3"
            :airport-info="flight.arrival"
            alignment="right"
          />
        </div>

        <SectionSeparator>Date & time</SectionSeparator>

        <div class="flex items-start px-10">
          <TimeInfo
            alignment="left"
            :time="flight.departureTimeZoned"
            :estimated-time="flight.estimatedDepartureTimeZoned"
            class="flex-grow"
          />

          <TimeInfo
            alignment="right"
            :time="flight.arrivalTimeZoned"
            :estimated-time="flight.estimatedArrivalTime"
            class="flex-grow"
          />
        </div>

        <SectionSeparator>Airport</SectionSeparator>

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

  import FlightMap from '../../components/flights/FlightMap'
  import AirportInfo from '../../components/flights/AirportInfo'
  import FlightInfo from '../../components/flights/FlightInfo'
  import TimeInfo from '../../components/flights/TimeInfo'
  import SectionSeparator from '../../components/general/SectionSeparator'

  export default Vue.extend({
    name: 'FlightView',

    components: { FlightMap, AirportInfo, FlightInfo, TimeInfo, SectionSeparator },

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
