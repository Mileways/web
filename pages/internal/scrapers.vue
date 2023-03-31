<template>
  <div class="min-h-screen w-full bg-gray-100 p-4 flex flex-col justify-center items-center space-y-4">
    <h1 class="text-2xl font-semibold">All airports with scrapers</h1>
    <ScrapersMap/>
  </div>
</template>

<script>
import ScrapersMap from "../../components/flights/ScrapersMap";

export default {
  components: {ScrapersMap}
}
</script>

<style scoped>
</style>
