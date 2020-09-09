<template>
  <footer class="py-10 mt-10 bg-gray-100 text-sm">
    <div class="container mx-auto">
      <nav class="grid grid-cols-3">
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>About us</li>
        </ul>
      </nav>

      <span class="font-black mt-10 inline-block">&copy; {{ currentYear }} Mileways GmbH</span>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Header',

  computed: {
    currentYear() {
      return (new Date()).getFullYear()
    }
  }
}
</script>

<style scoped>
  footer nav ul li {
    @apply mb-3;
  }
</style>
