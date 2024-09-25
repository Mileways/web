<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 md:pt-12 pb-4">
    <FeatureCard
      title="Easily track your friends’ and family’s flights."
      description="Your friend’s flight automatically appear on the friends’ tab as they add their flights to Mileways."
      backgroundImage="/images/feature-box-1.png" />
    <FeatureCard
      title="Richer flight data and additional insights for your flights."
      description="With our own flight data engine, we are able to provide data like checkin desk, inbound plane, and many more."
      backgroundImage="/images/feature-box-2.png" />
    <FeatureCard
      title="Handcrafted stamps making travel more fun and delightful."
      description="We built Mileways because of problems we faced while travelling. We are constantly adding new features, so stay tuned."
      backgroundImage="/images/feature-box-3.png" />
  </div>
</template>

<script>
import FeatureCard from "@/components/FeatureCard.vue";

export default {
  components: { FeatureCard },
};
</script>
