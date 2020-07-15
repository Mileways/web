<template>
  <a href="#" @click.prevent="goTo">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    targetId: { type: String, required: true }
  },

  computed: {
    href() {
      return '#' + this.targetId
    }
  },

  methods: {
    goTo() {
      this.$router.push({
        path: '/' + this.href
      })

      const scrollTo = document.querySelector(this.href)

      if (!scrollTo) return

      scrollTo.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>
