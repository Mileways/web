<template>
  <div>
    <button
      class="text-primary bg-white px-8 py-4 rounded-lg text-center text-xl w-full hover"
      @click="openNewWindow"
    >
      Get Email updates
    </button>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'EMailButtonWhite',

    methods: {
      openNewWindow() {
        parent.open("http://eepurl.com/g-rWrH");
      }
    } 
  })
</script>

<style scoped>
  .hover {
    transition: all .1s ease-in;
    border: 1px solid white;
  }
  .hover:hover {
    color: white;
    background: transparent;
  }
</style>
