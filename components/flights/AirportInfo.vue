<template>
  <div
    class="flex-grow w-1/3"
    :class="classes"
  >
    <span class="text-gray-500">{{ airportInfo.name }}</span>
    <br>

    <span class="font-bold text-black text-4xl">{{ airportInfo.fs }}</span>
    <br>

    <div
      class="flex"
      :class="{ 'flex-row-reverse': alignment === 'right' }"
    >
      <span>{{ airportInfo.countryCode }}</span>
      <span class="text-gray-500 mx-2">{{ airportInfo.city }}</span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'AirportInfo',

    props: {
      airportInfo: { type: Object, required: true },
      alignment: {
        required: false,
        default: 'left',
        validator(value) {
          return ['left', 'right'].includes(value)
        }
      }
    },

    computed: {
      classes() {
        return ['text-' + this.alignment]
      }
    }
  })
</script>
