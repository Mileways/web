<template>
  <div class="default">
    <Header />

    <div class="min-h-screen">
      <nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: { Header, Footer }
}
</script>
