<template>
  <div class="bg-blue border-rounded w-full h-2 border border-blue rounded-full inline-block">
    <div
      class="bg-white h-full w-full rounded-full"
      :style="barStyles"
    />
  </div>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'ProgressBar',

    props: {
      progress: { type: Number, default: 0 }
    },

    computed: {
      barStyles() {
        return {
          width: (this.progress * 100) + '%'
        }
      }
    }
  })
</script>
