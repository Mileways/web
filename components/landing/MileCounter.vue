<template>
  <div class="relative bg-gray-200 p-1 rounded-lg">
    <div class="grid grid-cols-7 gap-1">
      <div
        v-for="char in mileCharacters"
        class="text-center text-2xl bg-white rounded-md py-1"
      >{{ char }}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import ResponsiveImage from '../general/ResponsiveImage'

export default Vue.extend({
  name: 'MileCounter',

  data() {
    return {
      digits: 7,
      miles: 385732
    }
  },

  mounted() {
    setInterval(() => this.miles++, 2000)
  },

  computed: {
    mileCharacters() {
      const milesChars = this.miles.toString().split('')
      const missingDigits = this.digits - milesChars.length

      const fillArray = new Array(missingDigits).fill(0);

      return [
          ...fillArray,
          ...milesChars
      ]
    }
  }
})
</script>
