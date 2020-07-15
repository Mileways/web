<template>
  <div class="default">
    <Header />

    <nuxt class="mt-8" />

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'

export default {
  components: { Header, Footer }
}
</script>
