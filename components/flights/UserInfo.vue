<template>
  <div v-if="user && arrivalCity">
    <img
      :src="user.profilePicture"
      :alt="user.firstName"
      class="rounded-full h-20 sm:h-16 mx-auto"
    >

    <span class="text-xl sm:text-2xl mx-auto mt-3 inline-block">
      <span class="font-bold">{{ name }}</span>

      <span class="text-gray-300">flight to</span>

      <span class="font-bold">{{ arrivalCity }}</span>
    </span>
  </div>
</template>


<script>
  import Vue from 'vue'

  export default Vue.extend({
    name: 'UserInfo',

    props: {
      user: { type: Object, required: true },
      arrivalCity: { type: String, required: true }
    },

    computed: {
      name() {
        let name = this.user.firstName + '\''

        if (!['s', 'z'].includes(name[name.length - 1]))
          name += 's'

        return name
      }
    }
  })
</script>
