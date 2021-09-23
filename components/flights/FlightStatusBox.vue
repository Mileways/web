<template>
  <div  class="flight-status-box">
    <div
      class="background-element"
      :class="backgroundColorClass"
    />

    <div class="relative text-white text-right flex flex-col">
      <ProgressBar v-if="status === 'in_air'"
        :progress="flightProgress"
        class="mb-1"
      />

      <span v-else>{{ formattedStatus }}</span>

      <div class="font-semibold uppercase text-sm w-full">
        {{ statusMessage }}
      </div>
    </div>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue'

  import { isEqual, isBefore, isAfter, formatDistance, differenceInSeconds } from 'date-fns'

  import ProgressBar from '../general/ProgressBar'

  export default Vue.extend({
    name: 'FlightStatusBox',

    components: { ProgressBar },

    props: {
      status: { type: String, required: true },
      statusDetail: { type: String, required: false, default: null },

      departureTime: { type: Date, required: false, default: null },
      actualDepartureTime: { type: Date, required: false, default: null },
      arrivalTime: { type: Date, required: false, default: null },
      actualArrivalTime: { type: Date, required: false, default: null }
    },

    computed: {
      flightProgress() {
        const total = differenceInSeconds(this.actualArrivalTime, this.actualDepartureTime)
        const elapsed = differenceInSeconds(new Date(), this.actualDepartureTime)

        return elapsed / total
      },

      formattedStatus() {
        const statusMapping = {
          scheduled: 'Scheduled',
          on_time: 'On time',
          delayed: 'Flight Delayed',
          cancelled: 'Cancelled',
          departure_due: 'Departure Due',
          arrival_due: 'Arrival Due',
          diverted: 'Diverted'
        }

        switch(this.status) {
          case 'arrived':
            if (isBefore(this.actualArrivalTime, this.arrivalTime))
              return 'Early Arrival'

            else if (isAfter(this.actualArrivalTime, this.arrivalTime))
              return 'Late Arrival'

            return 'Arrived'

          case 'in_air':
            return null

          default:
            return statusMapping[this.status] || 'Unknown'
        }
      },

      statusMessage() {
        switch (this.status) {
          case 'scheduled':
            return 'In ' + formatDistance(new Date(), this.actualDepartureTime)

          case 'on_time':
            return 'In ' + formatDistance(new Date(), this.actualDepartureTime)

          case 'delayed':
            return 'By ' + formatDistance(this.departureTime, this.actualDepartureTime)

          case 'in_air':
            const distance = formatDistance(new Date(), this.actualArrivalTime)

            return distance + (distance.length > 12 ? '' : ' to go')

          case 'departure_due':
            return 'Since ' + formatDistance(new Date(), this.actualDepartureTime)

          case 'arrived':
            if (isEqual(this.arrivalTime, this.actualArrivalTime))
              return 'On time'

            return 'By ' + formatDistance(this.arrivalTime, this.actualArrivalTime)

          case 'arrival_due':
            return 'Since ' + formatDistance(this.actualArrivalTime, new Date())

          case 'diverted':
            return this.statusDetail

          default:
            return null
        }
      },

      backgroundColorClass() {
        switch (this.status) {
          case 'scheduled':
          case 'arrival-due':
          case 'departure-due':
            return 'bg-gray-500'

          case 'on_time':
            return 'bg-green'

          case 'delayed':
          case 'cancelled':
          case 'diverted':
            return 'bg-red'

          case 'in_air':
          case 'arrived':
          default:
            return 'bg-primary'
        }
      }
    }
  })
</script>

<style scoped>
  .flight-status-box {
    @apply relative pl-10 pr-5 py-2 flex items-center;
  }

  .flight-status-box > .background-element {
    @apply w-full h-full absolute top-0 right-0 -mr-3 rounded-bl-xl;

    content: '';
    transform: skew(22deg);
  }

  @screen sm {
    .flight-status-box {
      @apply relative pl-16 pr-10 py-4 flex items-center;
    }
  }
</style>
