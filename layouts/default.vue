<template>
  <div class="default">
    <Header />

    <div class="min-h-screen flex items-start">
      <nuxt class="mt-10" />
    </div>

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
