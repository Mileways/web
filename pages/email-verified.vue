<template>
  <div class="min-h-screen bg-gray-100 p-4 flex flex-row justify-center items-start">
    <div class="bg-white rounded-lg p-4 text-center max-w-sm flex-grow">
      <div class="text-4xl mt-10">
        ✅
      </div>

      <div style="max-width: 240px" class="mx-auto mt-5">
        <h2 class="font-bold text-2xl">Email successfully verified</h2>

        <p class="mt-4">Thank you, you can now continue in the app and sign in.</p>

      </div>

      <p class="mt-8">
        <LinkButtonBlue href="mileways://">Open Mileways</LinkButtonBlue>
      </p>
    </div>
  </div>
</template>


<script>
import LinkButtonBlue from "~/components/general/LinkButtonBlue";

export default {
  components: {LinkButtonBlue}
}
</script>

<style scoped>
</style>
