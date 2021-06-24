<template>
  <div
    v-if="doc"
    class="content-renderer-container"
  >
    <nuxt-content
      :document="doc"
    />
  </div>
</template>


<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'NuxtContentRenderer',

  props: {
    doc: { type: Object, required: false, default: false }
  }
})
</script>

<style scoped>
.content-renderer-container::v-deep .nuxt-content h1 {
  @apply text-5xl font-bold mb-5;
}

.content-renderer-container::v-deep .nuxt-content h2 {
  @apply text-4xl font-semibold mb-5 mt-10;
}

.content-renderer-container::v-deep .nuxt-content h3 {
  @apply text-3xl font-semibold mb-5 mt-8;
}

.content-renderer-container::v-deep .nuxt-content h4 {
  @apply text-2xl font-semibold mb-5 mt-6;
}

.content-renderer-container::v-deep .nuxt-content li {
  @apply list-disc mb-3;
}

.content-renderer-container::v-deep .nuxt-content li p {
  @apply inline;
}

.content-renderer-container::v-deep .nuxt-content a {
  @apply text-primary;
}

.content-renderer-container::v-deep .nuxt-content ul {
  @apply mb-5;
}

.content-renderer-container::v-deep .nuxt-content blockquote {
  @apply ml-4 border-l-4 border-primary pl-4 my-5 inline-block;
}
</style>
