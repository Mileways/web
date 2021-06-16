<template>
  <div class="bg-gray-700 pt-10 px-10" ref="container">
    <div class="relative">
      <ResponsiveImage
          src="/images/mockups/friends_flights{size}.png"
          alt="Friend's flight"
          class="w-full"
      />

      <div>
        <ResponsiveImage
            src="/images/elements/people/person1{size}.png"
            alt="Person"
            class="person transform rotate-12"
            :class="{ visible: visibilities[0] }"
            style="top: 52%; left: -8%; width: 23%;"
        />

        <ResponsiveImage
            src="/images/elements/people/person2{size}.png"
            alt="Person"
            class="person transform -rotate-6"
            :class="{ visible: visibilities[1] }"
            style="width: 17%; left: -7%; bottom: 2%;"
        />

        <ResponsiveImage
            src="/images/elements/people/person3{size}.png"
            alt="Person"
            class="person transform rotate-6"
            :class="{ visible: visibilities[2] }"
            style="width: 25%; right: -5%; top: -5%;"
        />

        <ResponsiveImage
            src="/images/elements/people/person4{size}.png"
            alt="Person"
            class="person transform"
            :class="{ visible: visibilities[3] }"
            style="width: 25%; top: -6%; left: -7%;"
        />

        <ResponsiveImage
            src="/images/elements/people/person5{size}.png"
            alt="Person"
            class="person transform rotate-18"
            :class="{ visible: visibilities[4] }"
            style="width: 17%; bottom: 2%; right: -5%;"
        />

        <ResponsiveImage
            src="/images/elements/people/person6{size}.png"
            alt="Person"
            class="person transform -rotate-6"
            :class="{ visible: visibilities[5] }"
            style="top: 28%; width: 25%; right: -9%;"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import ResponsiveImage from '../general/ResponsiveImage'

export default Vue.extend({
  name: 'FriendsIllustration',

  components: {
    ResponsiveImage
  },

  props: {
    friendsVisible: { type: Boolean, required: false, default: false }
  },

  data() {
    return {
      visibilities: [
          false,
          false,
          false,
          false,
          false,
          false
      ]
    }
  },

  watch: {
    friendsVisible(newValue) {
      if (newValue) this.makeVisible()

      else {
        for (let i = 0; i < this.visibilities.length; i++) {
          Vue.set(this.visibilities, i, false)
        }
      }
    }
  },

  methods: {
    makeVisible() {
      let i = 0

      const intervalId = setInterval(() => {
        Vue.set(this.visibilities, i, true)

        i++

        if (i >= this.visibilities.length) clearInterval(intervalId)
      }, 100)
    }
  }
})
</script>

<style scoped>
.person {
  @apply absolute scale-0 transition-all duration-500;
}

.person.visible {
  @apply scale-100;

  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>
