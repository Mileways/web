<template>
  <form
    v-if="isReady"
    :action="formUrl"
    method="post"
    class="flex"
  >
    <input type="hidden" name="u" :value="u">
    <input type="hidden" name="id" :value="id">

    <input
      type="email" placeholder="Sign up for news" autocapitalize="off" autocorrect="off"
      name="MERGE0" size="1" class="py-2 mx-5 focus:outline-none flex-shrink flex-grow"
    >

    <button class="bg-primary py-2 px-5 rounded-lg flex-shrink-0">
      <img src="/images/icons/send.svg" alt="Send icon">
    </button>
  </form>
</template>


<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'MailChimpSignUpForm',

    data() {
      return {
        u: null,
        id: null,
        formUrl: null
      }
    },

    computed: {
      isReady() {
        return this.u && this.id && this.formUrl
      }
    },

    mounted() {
      let config = process.env.MAILCHIMP_CONFIG || null

      if (!config) return

      config = JSON.parse(config)

      this.u = config.u
      this.id = config.id
      this.formUrl = config.formUrl
    }
  })
</script>
