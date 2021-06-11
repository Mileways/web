<template>
  <NuxtContentRenderer
    :doc="doc"
    class="container mx-auto my-10"
  />
</template>


<script>
  import Vue from 'vue'

  import NuxtContentRenderer from '../../components/general/NuxtContentRenderer'

  export default Vue.extend({
    name: 'Page',

    components: {
      NuxtContentRenderer
    },

    async asyncData({ $content, params }) {
      if (!params.slug) return {}

      const doc = await $content(params.slug).fetch()

      return { doc }
    }
  })
</script>
