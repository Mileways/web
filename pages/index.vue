<template>
  <div class="flex flex-col min-h-screen bg-primary text-center pt-20">
    <img src="/images/logo_text.svg" alt="Mileways Logo" class="mx-auto">

    <h1 class="text-6xl font-black text-white">Flying Soon.</h1>

    <div class="flex items-center mt-10">
      <button class="inline-flex items-center ml-auto mr-5 py-2 px-10 bg-white text-black rounded-lg">
        <img src="/images/logos/twittter.svg" alt="Twitter Logo" class="mr-3">

        <span>Follow on Twitter</span>
      </button>

      <button class="inline-flex items-center mr-auto py-2 px-10 bg-white text-black rounded-lg">
        Sign up for news
      </button>
    </div>

    <img src="" alt="">

    <img
      srcset="
        /images/mockups/horizontal_phone.png,
        /images/mockups/horizontal_phone_2x.png 2x,
        /images/mockups/horizontal_phone_3x.png 3x
      "
      src="/images/mockups/horizontal_phone.png"
      alt="Horizontal phone"
      class="mx-auto mt-20"
    >

    <div
      class="flex-grow bg-no-repeat bg-cover"
      style="background-image: url('/images/clouds.svg');"
    >

    </div>
  </div>
</template>

<script>
  export default {
    layout: 'empty'
  }
</script>
