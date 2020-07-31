<template>
  <div
    v-if="airportInfo"
    class="flex-grow w-1/3"
    :class="classes"
  >
    <span class="hidden sm:inline-block text-gray-500 truncate w-full">{{ airportInfo.name }}</span>

    <span class="font-bold text-black text-2xl sm:text-4xl">{{ airportInfo.fs }}</span>
    <br>

    <div
      class="flex items-center"
      :class="{ 'flex-row-reverse': alignment === 'right' }"
    >
      <img
        :src="countryFlagUrl"
        :alt="airportInfo.countryCode"
        class="h-4 w-4"
      >

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
      },

      countryFlagUrl() {
        return '/images/icons/flags/' + this.airportInfo.countryCode + '.svg'
      }
    }
  })
</script>
