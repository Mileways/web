<template>
  <img
    :srcset="srcSet"
    :src="defaultSrc"
  >
</template>


<script>
  import Vue from 'vue'

  const sizePlaceholder = '{size}'

  export default Vue.extend({
    name: 'ResponsiveImage',

    props: {
      sizes: { type: Array, required: false, default: () => [2,3] },
      src: { type: String, required: true }
    },

    computed: {
      srcSet() {
        return this.sizes
          .map(s =>
            this.src.replace(sizePlaceholder, '_' + s + 'x') + ' ' + s + 'x'
          )
          .join(', ')
      },

      defaultSrc() {
        return this.src.replace(sizePlaceholder, '')
      }
    }
  })
</script>
