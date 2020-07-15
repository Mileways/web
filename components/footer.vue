<template>
  <footer class="py-10 mt-10 text-center">
    <span class="text-gray-400">&copy; {{ currentYear }} Mileways GmbH</span>
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
