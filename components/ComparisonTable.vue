<template>
  <section>
    <h2 class="text-3xl font-bold mb-8">How does Mileways compare to App in the Air?</h2>
    <div class="overflow-hidden">
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th
              class="text-left pl-4 font-semibold text-[#9B9C9D] uppercase text-sm pb-4 align-bottom">
              Essential Features
            </th>
            <th class="text-left pb-4">
              <img src="/icons/mw-logo.svg" alt="Mileways" class="w-12 h-12 mb-4" />
              <div class="text-xl font-semibold">Mileways</div>
            </th>
            <th class="text-left pb-4">
              <img
                src="/icons/aita-logo.svg"
                alt="App in the Air"
                class="w-12 h-12 mb-4" />
              <div class="text-xl font-semibold">App in the Air</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(feature, index) in features"
            :key="feature.name"
            :class="{ 'bg-white': index % 2 === 0 }">
            <td class="py-4 font-medium pl-4 first:rounded-l-[16px]">
              {{ feature.name }}
            </td>
            <td class="py-4">
              <div v-if="feature.mileways === 'Available'" class="flex items-center">
                <img
                  src="/images/icons/checkmark-circle.svg"
                  alt="Checkmark"
                  class="w-6 h-6 mr-2" />
                <span>Available</span>
              </div>
              <span v-else>{{ feature.mileways }}</span>
            </td>
            <td class="py-4 last:rounded-r-[16px]">
              <div v-if="feature.appInTheAir === 'Available'" class="flex items-center">
                <img
                  src="/images/icons/checkmark-circle.svg"
                  alt="Checkmark"
                  class="w-6 h-6 mr-2" />
                <span>Available</span>
              </div>
              <span v-else>{{ feature.appInTheAir }}</span>
            </td>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        { name: "Flight information", mileways: "Available", appInTheAir: "Available" },
        { name: "Flight details", mileways: "Available", appInTheAir: "Available" },
        {
          name: "Delay, gate change, and cancellation alerts",
          mileways: "Available",
          appInTheAir: "Available",
        },
        {
          name: "Flight import from TripIt",
          mileways: "Available",
          appInTheAir: "Available",
        },
        {
          name: "Home screen and lock screen widgets",
          mileways: "Available",
          appInTheAir: "Available",
        },
        { name: "Apple Watch App", mileways: "Available", appInTheAir: "Available" },
        {
          name: "Export flights to calendar",
          mileways: "Available",
          appInTheAir: "Available",
        },
        { name: "Delightful stamps", mileways: "Available", appInTheAir: "Available" },
      ],
    };
  },
};
</script>
