<template>
  <div
    class="flex-grow w-1/3"
    :class="classes"
  >
    <span class="text-lg sm:text-xl font-semibold">{{ formattedEstimatedDate }}</span>
    <br>

    <span class="text-gray-500 text-sm sm:text-base">{{ estimatedWeekday }}</span>
    <br>

    <span
      class="font-bold text-black text-2xl sm:text-4xl"
      :class="delayColorClass"
    >
      {{ formattedEstimatedTime }}
    </span>
    <br>

    <div
      v-if="isDelayed || isEarly"
      class="flex items-center flex-wrap sm:flex-no-wrap"
      :class="{ 'flex-row-reverse': alignment === 'right' }"
    >
      <span
        class="text-gray-500 line-through inline-block w-full sm:w-auto text-sm sm:text-base"
      >
        {{ formattedTime }}
      </span>

      <span
        class="sm:mx-2 text-sm sm:text-base"
        :class="delayColorClass"
      >
        {{ delayText }}
      </span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  import { parseISO } from 'date-fns'

  const timeFormat = { hour: 'numeric', minute: 'numeric' }
  const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' }
  const delayThreshold = 60 * 1000

  export default Vue.extend({
    name: 'AirportInfo',

    props: {
      time: { type: String, required: true },
      estimatedTime: { type: String, required: false, default: null },
      alignment: {
        required: false,
        default: 'left',
        validator(value) {
          return ['left', 'right'].includes(value)
        }
      }
    },

    data() {
      return {
        parsedTime: parseISO(this.time),
        parsedEstimatedTime: parseISO(this.estimatedTime || this.time)
      }
    },

    computed: {
      classes() {
        return ['text-' + this.alignment]
      },

      formattedEstimatedDate() {
        return new Intl.DateTimeFormat('en-US', dateFormat).format(this.parsedEstimatedTime)
      },

      estimatedWeekday() {
        return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(this.parsedEstimatedTime)
      },

      formattedTime() {
        return new Intl.DateTimeFormat('en-US', timeFormat).format(this.parsedTime)
      },

      formattedEstimatedTime() {
        return new Intl.DateTimeFormat('en-US', timeFormat).format(this.parsedEstimatedTime)
      },

      delay() {
        return this.parsedEstimatedTime.getTime() - this.parsedTime.getTime()
      },

      isDelayed() {
        return this.delay >= delayThreshold
      },

      isEarly() {
        return this.delay <= -delayThreshold
      },

      delayColorClass() {
        return {
          'text-red-500': this.isDelayed,
          'text-green-500': this.isEarly,
        }
      },

      delayText() {
        let text = ''

        const absDelay = Math.abs(this.delay)

        const hourDelay = new Date(absDelay).getHours() - 1
        const minuteDelay = new Date(absDelay).getMinutes()

        if (hourDelay) text += hourDelay + ' h '
        else if (minuteDelay) text += minuteDelay + ' min '

        if (this.isEarly) text += 'early'
        else if (this.isDelayed) text += 'delay'

        return text
      }
    }
  })
</script>
