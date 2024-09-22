<template>
  <div class="max-w-5xl mx-auto px-4 py-8 space-y-24">
    <div class="space-y-8 max-w-xl mx-auto">
      <div class="space-y-4 mb-6 font-medium">
        <h1 class="font-semibold mb-4">Our farewell to App in the Air</h1>
        <p>
          With a sad heart we have heard the news about App in the Air shutting down.
          Seeing competition go is always very emotional. Especially in this case where
          Mileways and App in the Air were founded around the same time back in 2011.
          Looking back we still remember all the buzz and news of Bayram and his team
          launching one new version after another, motivating us and everyone is this
          space to keep up with their speed and to build the best products for travellers.
        </p>

        <p>
          Thank you Bayram and Team for a great time of competition and we wish everyone
          from App in the Air just the very best for the future and all the success on
          their new ways. Whatever the new endeavours might be.
        </p>

        <p class="font-semibold">With love,<br />The Mileways Team</p>
      </div>

      <div class="bg-[#F2F2F2] rounded-[32px] p-4">
        <div class="flex items-start">
          <svg
            width="20"
            height="20"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-shrink-0 mr-2">
            <path
              d="M13.0003 23.8337C7.01724 23.8337 2.16699 18.9834 2.16699 13.0003C2.16699 7.01724 7.01724 2.16699 13.0003 2.16699C18.9834 2.16699 23.8337 7.01724 23.8337 13.0003C23.8337 18.9834 18.9834 23.8337 13.0003 23.8337ZM13.0003 21.667C17.7868 21.667 21.667 17.7868 21.667 13.0003C21.667 8.21385 17.7868 4.33366 13.0003 4.33366C8.21385 4.33366 4.33366 8.21385 4.33366 13.0003C4.33366 17.7868 8.21385 21.667 13.0003 21.667ZM11.917 7.58366H14.0837V9.75033H11.917V7.58366ZM11.917 11.917H14.0837V18.417H11.917V11.917Z"
              fill="#0D1012" />
          </svg>
          <div class="space-y-2">
            <p class="font-semibold mb-0 leading-[20px] flex items-center">
              You can now migrate your App in the Air flight history into Mileways!
            </p>
            <p class="font-semibold">
              <a href="/migrations/app-in-the-air" class="text-primary flex items-center">
                Get started - takes 5 minutes
                <svg
                  class="ml-2 w-3 h-3"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 5.01525L10.5962 0.725488L11.9094 1.95114L6 7.46661L0.0905704 1.95114L1.40381 0.725488L6 5.01525Z"
                    fill="#0099FF" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative min-h-screen space-y-12">
      <div class="max-w-4xl mx-auto">
        <div class="flex justify-start items-center space-x-2">
          <img
            src="/icons/aita-logo.svg"
            alt="App in the Air Logo"
            class="h-8 w-auto md:h-10" />
          <img src="/icons/mw-logo.svg" alt="Mileways Logo" class="h-8 w-auto md:h-10" />
        </div>
        <h1 class="font-semibold text-3xl md:text-5xl my-4 md:my-6 relative z-10">
          Mileways vs<br />App in the Air
        </h1>
        <p
          class="text-[#545658] relative z-10 max-w-md text-sm md:text-base w-full md:w-1/3">
          App in the Air has many powerful flight tools, Mileways takes it social,
          allowing you to see and track all yours and your friend's flights in one place.
        </p>
        <div class="relative md:absolute md:top-0 md:right-0 md:w-3/4 md:h-full">
          <div class="absolute top-0 right-0 w-full md:w-2/3 z-0">
            <img
              src="/images/map-plane.svg"
              alt="Plane Map"
              class="w-full h-auto object-contain md:object-right md:pl-12 md:pt-24 mt-4 md:mt-0 max-w-lg" />
          </div>
          <div class="z-0">
            <img
              src="/images/world-map.svg"
              alt="World Map"
              class="w-full h-auto md:h-[500px] object-contain md:object-right mt-4 md:mt-0" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 py-12">
        <FeatureCard
          title="Easily track your friends’ and family’s flights."
          description="Your friend’s flight automatically appear on the friends’ tab as they add their flights to Mileways."
          backgroundImage="/images/feature-box-1.svg" />
        <FeatureCard
          title="Richer flight data and additional insights for your flights."
          description="With our own flight data engine, we are able to provide data like checkin desk, inbound plane, and many more."
          backgroundImage="/images/feature-box-2.svg" />
        <FeatureCard
          title="Handcrafted stamps making travel more fun and delightful."
          description="We built Mileways because of problems we faced while travelling. We are constantly adding new features, so stay tuned."
          backgroundImage="/images/feature-box-3.svg" />
      </div>

      <div class="max-w-4xl mx-auto mt-24">
        <h2 class="font-semibold text-2xl md:text-3xl mb-8">
          How to migrate from App in the Air to Mileways
        </h2>
        <div class="relative">
          <!-- Background line -->
          <div class="absolute left-[10%] right-[10%] top-[24px]">
            <div class="w-full h-px bg-gray-300"></div>
          </div>

          <div class="flex flex-row justify-between relative z-10">
            <div class="flex flex-col items-center text-center w-[22%]">
              <img
                src="/images/icons/icon-download.svg"
                alt="App Store"
                class="w-12 h-12 mb-4" />
              <p class="font-medium text-sm">Download Mileways from the App Store</p>
            </div>
            <div class="flex flex-col items-center text-center w-[22%]">
              <img
                src="/images/icons/icon-plane.svg"
                alt="Add Flights"
                class="w-12 h-12 mb-4" />
              <p class="font-medium text-sm">
                Add your flights or import from App in the Air
              </p>
            </div>
            <div class="flex flex-col items-center text-center w-[22%]">
              <img
                src="/images/icons/icon-user.svg"
                alt="Invite Friends"
                class="w-12 h-12 mb-4" />
              <p class="font-medium text-sm">Invite and add your friends on Mileways</p>
            </div>
            <div class="flex flex-col items-center text-center w-[22%]">
              <img
                src="/images/icons/icon-user2.svg"
                alt="Friends Tab"
                class="w-12 h-12 mb-4" />
              <p class="font-medium text-sm">
                Their flights will appear in the friends' tab and vice versa!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeatureCard from "@/components/FeatureCard.vue";

export default {
  components: { FeatureCard },
};
</script>

<style scoped>
p:not(:last-child) {
  margin-bottom: 0; /* Override the mb-5 class */
}
</style>
