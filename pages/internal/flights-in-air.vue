<template>
    <div class="min-h-screen w-full bg-gray-100 p-4 flex flex-col justify-center items-center space-y-4">
      <h1 class="text-2xl font-semibold">Flights currently in air</h1>
      <InAirFlightsMap/>
    </div>
  </template>
  
  <script>
  import InAirFlightsMap from "../../components/flights/InAirFlightsMap";
  
  export default {
    components: {InAirFlightsMap}
  }
  </script>
  
  <style scoped>
  </style>
  