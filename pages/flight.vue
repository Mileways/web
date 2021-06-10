<template>
  <div class="w-full mt-10">
    <div
      v-if="flight"
      class="w-11/12 mx-auto max-w-4xl"
    >
      <div class="section-card py-5 px-5 sm:px-10 text-center">
        <UserInfo
          :user="user"
          :arrival-city="flight.arrival.city"
        />
      </div>

      <div class="section-card">
        <client-only>
          <FlightMap
            :departure-coordinates="[flight.departure.latitude, flight.departure.longitude]"
            :destination-coordinates="[flight.arrival.latitude, flight.arrival.longitude]"
          />
        </client-only>
      </div>

      <div class="section-card pb-10">
        <div class="flex mb-10 border-b border-gray-200">
          <FlightInfo
            :airline-info="flight.airline"
            :flight-number="flight.flightNumber"
            class="pl-5 sm:pl-10 py-3 sm:py-4"
          />

          <FlightStatusBox
            class="self-stretch ml-auto"
            :status="flight.status"
            :status-detail="flight.statusDetail"
            :departure-time="departureTime"
            :actual-departure-time="actualDepartureTime"
            :arrival-time="arrivalTime"
            :actual-arrival-time="actualArrivalTime"
          />
        </div>

        <div class="flex items-center px-5 sm:px-10">
          <AirportInfo
            class="flex-grow w-3/12 sm:w-1/3"
            :airport-info="flight.departure"
            alignment="left"
          />

          <div class="w-1/6 sm:w-1/3 sm:block">
            <img
              src="/images/icons/plane.svg"
              alt="Plane Icon"
              class="plane mx-auto w-5 sm:w-10"
            >
          </div>

          <AirportInfo
            class="flex-grow w-3/12 sm:w-1/3"
            :airport-info="flight.arrival"
            alignment="right"
          />
        </div>

        <SectionSeparator class="my-6 sm:my-8">Date & time</SectionSeparator>

        <div class="flex items-start px-5 sm:px-10">
          <TimeInfo
            alignment="left"
            :time="departureTime"
            :actual-time="actualDepartureTime"
            class="flex-grow"
          />

          <TimeInfo
            alignment="right"
            :time="arrivalTime"
            :actual-time="actualArrivalTime"
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

  import { parseISO } from 'date-fns'

  import FlightMap from '../components/flights/FlightMap'
  import AirportInfo from '../components/flights/AirportInfo'
  import FlightInfo from '../components/flights/FlightInfo'
  import TimeInfo from '../components/flights/TimeInfo'
  import UserInfo from '../components/flights/UserInfo'
  import FlightStatusBox from '../components/flights/FlightStatusBox'
  import InfoChip from '../components/general/InfoChip'
  import SectionSeparator from '../components/general/SectionSeparator'

  export default Vue.extend({
    name: 'FlightView',

    components: { FlightMap, AirportInfo, FlightInfo, TimeInfo, UserInfo, InfoChip, FlightStatusBox, SectionSeparator },

    async mounted () {
      if (
        !this.$route.query.userId ||
        !this.$route.query.flightId ||
        !this.$route.query.tripId
      ) return

      await this.$store.dispatch('flights/loadTripData', {
        userId: this.$route.query.userId,
        flightId: this.$route.query.flightId,
        tripId: this.$route.query.tripId
      })
    },

    computed: {
      tripId() {
        return this.$route.query.tripId
      },

      flightInfo() {
        return this.$store.getters['flights/tripById'](this.tripId)
      },

      flight() {
        if (!this.flightInfo) return

        return this.flightInfo.flights[0]
      },

      user() {
        if (!this.flightInfo) return

        return this.flightInfo.user
      },

      departureTime() {
        if (!this.flight) return

        return new Date(parseISO(this.flight.departureTimeZoned))
      },

      actualDepartureTime() {
        if (!this.flight) return

        return new Date(parseISO(this.flight.estimatedDepartureTimeZoned || this.flight.departureTimeZoned))
      },

      arrivalTime() {
        if (!this.flight) return

        return new Date(parseISO(this.flight.arrivalTimeZoned))
      },

      actualArrivalTime() {
        if (!this.flight) return

        return new Date(parseISO(this.flight.estimatedArrivalTimeZoned || this.flight.arrivalTimeZoned))
      }
    }
  })
</script>

<style scoped>
  .section-card {
    @apply bg-white rounded-xl shadow-lg overflow-hidden mb-6;

    /*
      Translate3d below is a workaround to fix a known Safari issue where the rounded corners of the parent are not
      honored by large canvas elements
      https://bugs.chromium.org/p/chromium/issues/detail?can=2&start=0&num=100&q=&colspec=ID%20Pri%20M%20Iteration%20ReleaseBlock%20Cr%20Status%20Owner%20Summary%20OS%20Modified&groupby=&sort=&id=137818
    */

    transform: translate3d(0, 0, 0);
  }

  .plane {
    animation: plane-animation 4s ease infinite;
  }

  @screen sm {
    .section-card {
      @apply mb-10;
    }
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