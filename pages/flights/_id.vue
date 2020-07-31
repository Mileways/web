<template>
  <div class="w-full">
    <div
      v-if="flight"
      class="w-11/12 mx-auto max-w-5xl"
    >
      <div class="section-card">
        <client-only>
          <FlightMap
            :departure-coordinates="[flight.departure.latitude, flight.departure.longitude]"
            :destination-coordinates="[flight.arrival.latitude, flight.arrival.longitude]"
          />
        </client-only>
      </div>

      <div class="section-card pb-10">
        <div class="flex items-start">
          <FlightInfo
            :airline-info="flight.airlin
            e"
            :flight-number="flight.flightNumber"
            class="pl-5 sm:pl-10 pt-4 sm:pt-5"
          />

          <FlightStatusBox
            class="ml-auto"
            :status="flight.status"
          />
        </div>

        <SectionSeparator class="mb-5"/>

        <div class="flex items-center px-5 sm:px-10">
          <AirportInfo
            class="flex-grow w-1/2 sm:w-1/3 mr-5 sm:mr-0"
            :airport-info="flight.departure"
            alignment="left"
          />

          <div class="w-1/3 sm:block">
            <img
              src="/images/icons/plane.svg"
              alt="Plane Icon"
              class="plane mx-auto w-5 sm:w-10"
            >
          </div>

          <AirportInfo
            class="flex-grow w-1/2 sm:w-1/3 ml-5 sm:ml-0"
            :airport-info="flight.arrival"
            alignment="right"
          />
        </div>

        <SectionSeparator class="my-6 sm:my-8">Date & time</SectionSeparator>

        <div class="flex items-start px-5 sm:px-10">
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

        <SectionSeparator class="my-6 sm:my-8">Airport</SectionSeparator>

        <div class="flex items-start px-5 sm:px-10">
          <div>
            <InfoChip
              title="Gate"
              :text="flight.departureGate || '-'"
              :bottom-text="flight.departureTerminal ? ('Terminal ' + flight.departureTerminal) : null"
            />
          </div>

          <div class="ml-auto flex items-start">
            <InfoChip
              v-if="flight.baggage"
              title="Belt"
              icon-url="/images/icons/belt.svg"
              :text="flight.baggage"
              class="mr-5 text-right"
            />

            <InfoChip
              title="Gate"
              :text="flight.arrivalGate || '-'"
              :bottom-text="flight.arrivalTerminal ? ('Terminal ' + flight.arrivalTerminal) : null"
              class="text-right"
            />
          </div>
        </div>
      </div>

      <div class="section-card py-10 px-5 sm:px-10">
        <a :href="appStoreUrl" target="_blank">
          <img
            src="/images/download.svg"
            alt="Download on the App Store"
            class="mx-auto h-12"
          >
        </a>
      </div>
    </div>

    <div
      v-else
      class="w-full text-center"
    >
      <h1 class="text-2xl">
        Sorry, we couldn't find that flight.
      </h1>
    </div>
  </div>
</template>


<script>
  import Vue from 'vue'

  import FlightMap from '../../components/flights/FlightMap'
  import AirportInfo from '../../components/flights/AirportInfo'
  import FlightInfo from '../../components/flights/FlightInfo'
  import TimeInfo from '../../components/flights/TimeInfo'
  import FlightStatusBox from '../../components/flights/FlightStatusBox'
  import InfoChip from '../../components/general/InfoChip'
  import SectionSeparator from '../../components/general/SectionSeparator'

  export default Vue.extend({
    name: 'FlightView',

    components: { FlightMap, AirportInfo, FlightInfo, TimeInfo, InfoChip, FlightStatusBox, SectionSeparator },

    async middleware ({ store, params }) {
      await store.dispatch('flights/loadFlightData', params.id)
    },

    computed: {
      flightId() {
        return this.$route.params.id
      },

      flight() {
        return this.$store.getters['flights/flightById'](this.flightId)
      },

      appStoreUrl() {
        return process.env.APP_STORE_URL
      }
    }
  })
</script>

<style scoped>
  .section-card {
    @apply bg-white rounded-xl shadow-lg overflow-hidden mb-10;
  }

  .plane {
    animation: plane-animation 4s ease infinite;
  }

  @keyframes plane-animation {
    0% {
      transform: translateX(-30px);
      opacity: 0;
    }

    50% {
      transform: translateX(0px);
      opacity: 1;
    }

    100% {
      transform: translateX(30px);
      opacity: 0;
    }
  }
</style>

<style>
  body {
    @apply bg-gray-200;
  }
</style>
