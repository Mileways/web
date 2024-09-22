<template>
  <section>
    <h2 class="text-4xl font-semibold w-1/2 mb-8">
      How does Mileways compare <br />to App in the Air?
    </h2>
    <div class="overflow-hidden">
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th
              class="text-left pl-4 font-semibold text-[#9B9C9D] uppercase text-sm pb-4 align-bottom">
              Essential Features
            </th>
            <th class="text-left pb-4 pr-8">
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
                  class="w-5 h-5 mr-2" />
                <span>Available</span>
              </div>
              <div v-else class="flex items-center text-[#9B9C9D]">
                <img
                  src="/images/icons/cross-circle.svg"
                  alt="Cross"
                  class="w-5 h-5 mr-2" />
                <span>{{ feature.mileways }}</span>
              </div>
            </td>
            <td class="py-4 last:rounded-r-[16px]">
              <div v-if="feature.appInTheAir === 'Available'" class="flex items-center">
                <img
                  src="/images/icons/checkmark-circle.svg"
                  alt="Checkmark"
                  class="w-5 h-5 mr-2" />
                <span>Available</span>
              </div>
              <div v-else class="flex items-center text-[#9B9C9D]">
                <img
                  src="/images/icons/cross-circle.svg"
                  alt="Cross"
                  class="w-5 h-5 mr-2" />
                <span>{{ feature.appInTheAir }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="my-4" />
    <div class="overflow-hidden">
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th
              class="text-left pl-4 font-semibold text-[#9B9C9D] uppercase text-sm pb-4 align-bottom">
              Additional Features you'll love
            </th>
            <th class="text-left pb-4 invisible pr-8">
              <div class="text-xl font-semibold">Mileways</div>
            </th>
            <th class="text-left pb-4 invisible">
              <div class="text-xl font-semibold">App in the Air</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(feature, index) in additionalFeatures"
            :key="feature.name"
            :class="{ 'bg-white': index % 2 === 0 }">
            <td
              class="py-4 font-medium pl-4 first:rounded-l-[16px]"
              v-html="feature.name"></td>
            <td class="py-4">
              <div v-if="feature.mileways === 'Available'" class="flex items-center">
                <img
                  src="/images/icons/checkmark-circle.svg"
                  alt="Checkmark"
                  class="w-5 h-5 mr-2" />
                <span>Available</span>
              </div>
              <div v-else class="flex items-center text-[#9B9C9D]">
                <img
                  src="/images/icons/cross-circle.svg"
                  alt="Cross"
                  class="w-5 h-5 mr-2" />
                <span>{{ feature.mileways }}</span>
              </div>
            </td>
            <td class="py-4 last:rounded-r-[16px]">
              <div v-if="feature.appInTheAir === 'Available'" class="flex items-center">
                <img
                  src="/images/icons/checkmark-circle.svg"
                  alt="Checkmark"
                  class="w-5 h-5 mr-2" />
                <span>Available</span>
              </div>
              <div v-else class="flex items-center text-[#9B9C9D]">
                <img
                  src="/images/icons/cross-circle.svg"
                  alt="Cross"
                  class="w-5 h-5 mr-2" />
                <span>{{ feature.appInTheAir }}</span>
              </div>
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
      additionalFeatures: [
        {
          name: "Inbound plane tracking",
          mileways: "Available",
          appInTheAir: "Unavailable",
        },
        {
          name: "'Ready for boarding' notifications",
          mileways: "Available",
          appInTheAir: "Unavailable",
        },
        {
          name: "Check-in desk information",
          mileways: "Available",
          appInTheAir: "Unavailable",
        },
        { name: "Friends network", mileways: "Available", appInTheAir: "Unavailable" },
        {
          name: "'Friends' flights' timeline",
          mileways: "Available",
          appInTheAir: "Unavailable",
        },
        {
          name: "Live tracking for friends' flights",
          mileways: "Available",
          appInTheAir: "Unavailable",
        },
        {
          name: "Web live flight sharing",
          mileways: "Available",
          appInTheAir: "Unavailable",
        },
        {
          name: "Detailed aircraft liveries <span class='text-[#CBCBCC]'>*selected aircrafts</span>",
          mileways: "Available",
          appInTheAir: "Unavailable",
        },
        {
          name: "Seatmaps <span class='text-[#CBCBCC]'>*selected aircrafts</span>",
          mileways: "Available",
          appInTheAir: "Unavailable",
        },
      ],
    };
  },
};
</script>
