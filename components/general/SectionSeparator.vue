<template>
  <h2
    class="relative h-0 border-b border-gray-200 mt-4 mb-6"
    @click="$emit('click')"
  >
    <span
      v-if="$slots['default']"
      class="absolute block text-gray-300 text-sm uppercase px-3"
      :class="underlyingBackgroundClass"
      style="left: 50%; line-height: 30px; height: 30px; top: -15px; transform: translateX(-50%);"
    >
      <slot />
    </span>
  </h2>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'SectionSeparator',

    props: {
      underlyingBackgroundClass: { type: String, required: false, default: 'bg-white' }
    }
  })
</script>
