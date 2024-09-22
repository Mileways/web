<template>
  <div class="relative">
    <img :src="backgroundImage" :alt="title" class="w-full h-auto object-contain" />
    <div class="absolute inset-0 flex flex-col justify-end p-6 space-y-2">
      <h3 class="text-xl font-medium">{{ title }}</h3>
      <p class="text-sm text-[#565859]">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
  },
};
</script>
