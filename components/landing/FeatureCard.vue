<template>
  <div
    class="bg-gray-200 rounded-4xl overflow-hidden mb-16"
    style="-webkit-column-break-inside: avoid;"
  >
    <slot name="cover" />

    <div class="bg-gray-100 p-10 text-left">
      <h3 class="text-3xl font-black">
        {{ title }}
      </h3>

      <p class="mb-0">
        <slot />
      </p>
    </div>
  </div>
</template>


<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'FeatureCard',

    props: {
      title: { type: String, required: false, default: 'Feature' }
    }
  })
</script>
