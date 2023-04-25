<template>
  <a class="text-white bg-primary px-8 py-3 rounded-lg text-center text-xl w-full hover inline-block">
    <slot />
  </a>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'LinkButtonBlue'
})
</script>

<style scoped>
.hover {
  transition: all .1s ease-in;
  border: 1px solid #00a1f2;
}

.hover:hover {
  @apply text-primary;
  background: transparent;
}
</style>
