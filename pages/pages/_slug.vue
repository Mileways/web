<template>
  <div
    v-if="doc"
    class="container mx-auto mt-10"
  >
    <nuxt-content
      :document="doc"
    />
  </div>
</template>


<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Page',

    async asyncData({ $content, params }) {
      if (!params.slug) return {}

      const doc = await $content(params.slug).fetch()

      return { doc }
    }
  })
</script>
