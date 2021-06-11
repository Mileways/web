<template>
  <section class="container mx-auto py-24">
    <div class="max-w-3xl mx-auto">
      <h2 class="h2 text-primary">
        Flight information as it should be.
      </h2>

      <p class="h4 text-gray-700 mb-8 font-semibold">
        Flying can and should be comfortable. Instead, in times like these, we travel with uncertainty and anxiety.
        We think we can do better.
      </p>

      <p class="text-2xl text-gray-700 mb-12">
        We have identified the problems faced by many air travelers and translated them into a modern, contemporary user experience, finally creating the a flight tracker that will meet all your needs.
      </p>
    </div>

    <div class="light-card flex-card mb-8">
      <div class="bg-gray-300 pt-12 px-12 w-full lg:w-5/12">
        <ResponsiveImage
          src="/images/mockups/flights{size}.png"
          alt="Flights"
        />
      </div>

      <div class="p-10 lg:px-20 lg:py-0 w-full lg:w-7/12">
        <h3 class="h3 mb-6">Flights</h3>

        <p class="text-xl text-gray-700">
          Flight information can be overwhelming. Airport information, travel times, flight numbers and hey, another gate change…
        </p>

        <p class="text-xl text-gray-700 mb-0">
          It’s easy to lose track of everything, especially if you travel regularly. Reduced to the essential and most important and delivered to you at the right time — the information provided by Mileways will always be relevant and accurate.
          <br>

          You can have your peace of mind.
        </p>
      </div>
    </div>

    <div class="light-card flex-card mb-8">
      <div class="p-10 lg:px-20 lg:py-0 lg:w-7/12">
        <h3 class="h3 mb-6">Flight Details</h3>

        <p class="text-xl text-gray-700">
          As the travel date approaches, any oh so small information around a flight becomes all the more important.
        </p>

        <p class="text-xl text-gray-700 mb-0">
          Is my flight delayed? Is there a time difference? What will the weather be like? All this information is just a tap away.
        </p>
      </div>

      <div class="bg-gray-300 pt-12 px-12 w-full lg:w-5/12">
        <ResponsiveImage
          src="/images/mockups/flight_details{size}.png"
          alt="Flight details"
          class="w-full"
        />
      </div>
    </div>

    <div class="light-card flex-card mb-8">
      <div class="bg-gray-300 w-full lg:w-5/12">
        <ResponsiveImage
            src="/images/mockups/notifications{size}.png"
            alt="Notifications"
            class="w-full"
        />
      </div>

      <div class="p-10 lg:px-20 lg:py-0 w-full lg:w-7/12">
        <h3 class="h3 mb-6">Notifications</h3>

        <p class="text-xl text-gray-700">
          The closer the date of the next departure gets, the more important the relevant information becomes.
        </p>

        <p class="text-xl text-gray-700">
          It’s stressful enough at the airport, so you should at least be able to rely on reliable flight updates.
        </p>

        <p class="text-xl text-gray-700 mb-0">
          From gate changes to flight cancellations — with Mileways, notifications are accurate to the second.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'

  import ResponsiveImage from '../../general/ResponsiveImage'

  export default Vue.extend({
    name: 'FeatureSection1',

    components: { ResponsiveImage }
  })
</script>
