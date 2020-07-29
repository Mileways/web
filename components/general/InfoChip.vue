<template>
  <div class="inline-block">
    <span class="text-sm text-gray-500">
      {{ title }}
    </span>

    <div class="bg-gray-200 rounded-lg py-1 px-3 my-3 flex">
      <img
        v-if="iconUrl"
        :src="iconUrl"
        alt="Icon"
        class="mr-3"
      >

      <span class="text-4xl font-bold flex-grow text-center">{{ text }}</span>
    </div>

    <span
      v-if="bottomText"
      class="text-sm text-gray-500"
    >
      {{ bottomText }}
    </span>
  </div>
</template>


<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'InfoChip',

    props: {
      title: { type: String, required: false, default: '-' },
      text: { type: String, required: false, default: '-' },
      bottomText: { type: String, required: false, default: null },
      iconUrl: { type: String, required: false, default: null },
    }
  })
</script>
