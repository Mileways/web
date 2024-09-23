<template>
  <div class="default">
    <Header :class="headerClass" :textColor="textColor" />

    <div class="min-h-screen bg-[#FAFAFA]">
      <nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRoute } from 'vue-router';

export default {
  components: { Header, Footer },
  // Depending on the route, set the background color of the header
  computed: {
    headerClass() {
      console.log(this.$route.name);
      return this.$route.name === 'comparisons-app-in-the-air' ? 'bg-[#FAFAFA]' : 'bg-primary';
    },
    textColor() {
      return this.$route.name === 'comparisons-app-in-the-air' ? 'black' : 'white';
    }
  }
};
</script>

<style>
.bg-home
{
  background-color: blue;
}

.bg-about
{
  background-color: green;
}

.bg-default
{
  background-color: red;
}
</style>
