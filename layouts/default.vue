<template>
  <div class="default">
    <Header />

    <div class="min-h-screen bg-[#FAFAFA]">
      <nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
  components: { Header, Footer },
};
</script>
