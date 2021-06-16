<template>
  <div class="relative">
    <div class="absolute top-0 w-full mt-10 text-white text-center date-font">
      <span class="text-6xl mb-0 leading-none">{{ currentTime }}</span>
      <br>

      <span class="text-lg">{{ currentDate }}</span>
    </div>

    <ResponsiveImage
      src="/images/mockups/notifications{size}.png"
      alt="Notifications"
      class="w-full"
    />
  </div>
</template>

<script>
import Vue from 'vue'

import ResponsiveImage from '../general/ResponsiveImage'

export default Vue.extend({
  name: 'Lockscreen',

  components: { ResponsiveImage },

  data() {
    return {
      currentDate: null,
      currentTime: null
    }
  },

  mounted() {
    this.setCurrentDate()
    this.setCurrentTime()

    setInterval(() => {
      this.setCurrentDate()
      this.setCurrentTime()
    }, 10000)
  },

  methods: {
    setCurrentTime() {
      const formatter = new Intl.DateTimeFormat(undefined, {
        timeStyle: 'short',
        hour12: false
      })

      this.currentTime = formatter.format(Date.now())
    },

    setCurrentDate() {
      const weekdayFormatter = new Intl.DateTimeFormat(undefined, {
        weekday: 'long'
      })

      const dateFormatter = new Intl.DateTimeFormat(undefined, {
        month: 'long',
        day: 'numeric'
      })

      const date = Date.now()

      this.currentDate = weekdayFormatter.format(date) + ', ' + dateFormatter.format(date)
    }
  }
})
</script>

<style>
  .date-font {
    font-family: sans-serif;
    font-weight: 100;
  }
</style>
