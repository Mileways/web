<template>
  <div class="relative min-h-screen">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-start items-center space-x-2">
        <img src="/icons/aita-logo.svg" alt="App in the Air Logo"
          class="h-8 w-auto md:h-10" />
        <img src="/icons/mw-logo.svg" alt="Mileways Logo"
          class="h-8 w-auto md:h-10" />
      </div>
      <h1
        class="font-semibold text-3xl md:text-5xl my-4 md:my-6 relative z-10">
        Mileways vs<br />App in the Air
      </h1>
      <p
        class="text-[#545658] relative z-10 max-w-md text-sm md:text-base w-full md:w-1/3">
        App in the Air has many powerful flight tools, Mileways takes
        it social, allowing
        you to see and track all yours and your friend's flights in
        one place.
      </p>
      <div
        class="relative md:absolute md:top-0 md:right-0 md:w-3/4 md:h-full">
        <div class="absolute top-0 right-0 w-full md:w-2/3 z-0">
          <img src="/images/map-plane.png" alt="Plane Map"
            class="w-full h-auto object-contain md:object-right md:pl-12 md:pt-24 mt-4 md:mt-0 max-w-lg" />
        </div>
        <div class="z-0">
          <img src="/images/world-map.svg" alt="World Map"
            class="w-full h-auto md:h-[500px] object-contain md:object-right mt-4 md:mt-0" />
        </div>
      </div>
    </div>
    <FeatureCards />
    <div class="mt-12">
      <InstallationSteps />
    </div>
  </div>
</template>

<script>
import FeatureCards from "@/components/FeatureCards.vue";
import InstallationSteps from "@/components/InstallationSteps.vue";

export default {
  components: { FeatureCards, InstallationSteps },
};
</script>
