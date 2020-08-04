<template>
  <div v-if="user && arrivalCity">
    <img
      :src="user.profilePicture"
      :alt="user.firstName"
      class="rounded-full h-20 sm:h-32 mx-auto"
    >

    <span class="font-bold text-xl sm:text-2xl mx-auto my-5 inline-block">
      {{ heading }}
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
      heading() {
        const name = this.user.firstName

        let heading = name + '\''

        if (!['s', 'z'].includes(name[name.length - 1]))
          heading += 's'

        return heading + ' flight to ' + this.arrivalCity
      }
    }
  })
</script>
