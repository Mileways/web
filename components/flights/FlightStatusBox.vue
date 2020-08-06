<template>
  <div  class="flight-status-box">
    <div
      class="background-element"
      :class="backgroundColorClass"
    />

    <div class="relative text-white">
      <span>{{ formattedStatus }}</span>

      <span class="font-semibold uppercase">{{ statusDetail }}</span>
    </div>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'FlightStatusBox',

    props: {
      status: { type: String, required: true },
      statusDetail: { type: String, required: false, default: null }
    },

    computed: {
      formattedStatus() {
        const statusMapping = {
          scheduled: 'Scheduled',
          on_time: 'On time',
          delayed: 'Delayed',
          in_air: 'In air',
          departure_due: 'Departure due',
          cancelled: 'Cancelled',
          diverted: 'Diverted',
          arrival_due: 'Arrival due',
          arrived: 'Arrived'
        }

        return statusMapping[this.status] || 'Unknown'
      },

      backgroundColorClass() {
        switch (this.status) {
          case 'scheduled':
            return 'bg-gray-500'

          case 'on_time':
            return 'bg-green-500'

          case 'delayed':
          case 'cancelled':
            return 'bg-red-500'

          case 'arrival-due':
          case 'departure-due':
          case 'diverted':
            return 'bg-orange-500'

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
    @apply relative pl-10 pr-5 py-4 flex items-center;
  }

  .flight-status-box > .background-element {
    @apply w-full h-full absolute top-0 right-0 -mr-3 rounded-bl-xl;

    content: '';
    transform: skew(22deg);
  }

  @screen sm {
    .flight-status-box {
      @apply relative pl-16 pr-10 py-5 flex items-center;
    }
  }
</style>
