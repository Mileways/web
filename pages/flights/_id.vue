<template>
  <div class="w-11/12 mx-auto max-w-5xl">
    <div class="bg-white rounded-lg shadow-lg py-10 px-10 mb-10">
      Title
    </div>

    <div class="bg-white rounded-lg shadow-lg py-10 px-10 mb-10">
      Map
    </div>

    <div class="bg-white rounded-lg shadow-lg py-10 px-10 mb-10">
      Details
    </div>
  </div>
</template>


<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'FlightView'
  })
</script>

<style>
  body {
    @apply bg-gray-200;
  }
</style>
