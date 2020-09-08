<template>
  <div
    class="rounded-4xl bg-gray-100 p-5 mb-5 md:mb-10 flex relative items-center"
    style="break-inside: avoid;"
  >
    <ResponsiveImage
      v-if="responsiveImagePath"
      :src="responsiveImagePath"
      :alt="name"
      class="mr-5"
    />

    <div class="flex-grow">
      <h3 class="font-bold text-2xl">
        {{ name }}
      </h3>

      <span class="text-gray-400 text-xl">
        {{ position }}
      </span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  import ResponsiveImage from '../general/ResponsiveImage'

  export default Vue.extend({
    name: 'CrewCard',

    components: { ResponsiveImage },

    props: {
      name: { type: String, required: false, default: 'Crew member' },
      position: { type: String, required: false, default: 'Crew member' },
      responsiveImagePath: { type: String, required: false, default: null },
    }
  })
</script>
