<template>
  <section class="container mx-auto py-12 lg:py-24">
    <div class="max-w-3xl mx-auto">
      <h2 class="h2 text-primary">
        Flight information as it should be.
      </h2>

      <p class="h4 text-gray-700 mb-8 font-semibold">
        Flying can and should be comfortable. Instead, in times like
        these, we travel with uncertainty and anxiety.
        We think we can do better.
      </p>

      <p class="text-lg lg:text-2xl text-gray-700 mb-12">
        We have identified the problems faced by many air travelers and
        translated them into a modern, contemporary user experience,
        finally creating the a flight tracker that will meet all your
        needs.
      </p>
    </div>

    <div class="grid gap-8">
      <div class="light-card flex-card">
        <div
          class="bg-gray-300 pt-8 px-8 lg:pt-12 lg:px-12 w-full lg:w-5/12">
          <ResponsiveImage src="/images/mockups/flights{size}.png"
            alt="Flights" />
        </div>

        <div class="p-8 lg:px-20 lg:py-0 w-full lg:w-7/12">
          <h3 class="h3 mb-6">Flights</h3>

          <p class="lg:text-xl text-gray-700">
            Flight information can be overwhelming. Airport information,
            travel times, flight numbers and hey, another gate change…
          </p>

          <p class="lg:text-xl text-gray-700 mb-0">
            It’s easy to lose track of everything, especially if you
            travel regularly. Reduced to the essential and most
            important and delivered to you at the right time — the
            information provided by Mileways will always be relevant and
            accurate.
            <br>

            You can have your peace of mind.
          </p>
        </div>
      </div>

      <div class="light-card flex-card">
        <div class="p-8 lg:px-20 lg:py-0 lg:w-7/12">
          <h3 class="h3 mb-6">Flight Details</h3>

          <p class="lg:text-xl text-gray-700">
            As the travel date approaches, any oh so small information
            around a flight becomes all the more important.
          </p>

          <p class="lg:text-xl text-gray-700 mb-0">
            Is my flight delayed? Is there a time difference? What will
            the weather be like? All this information is just a tap
            away.
          </p>
        </div>

        <div
          class="bg-gray-300 pt-8 px-8 lg:pt-12 lg:px-12 w-full lg:w-5/12">
          <ResponsiveImage
            src="/images/mockups/flight_details{size}.png"
            alt="Flight details" class="w-full" />
        </div>
      </div>

      <div class="light-card flex-card">
        <div class="w-full lg:w-5/12">
          <Lockscreen />
        </div>

        <div class="p-8 lg:px-20 lg:py-0 w-full lg:w-7/12">
          <h3 class="h3 mb-6">Notifications</h3>

          <p class="lg:text-xl text-gray-700">
            The closer the date of the next departure gets, the more
            important the relevant information becomes.
          </p>

          <p class="lg:text-xl text-gray-700">
            It’s stressful enough at the airport, so you should at least
            be able to rely on reliable flight updates.
          </p>

          <p class="lg:text-xl text-gray-700 mb-0">
            From gate changes to flight cancellations — with Mileways,
            notifications are accurate to the second.
          </p>
        </div>
      </div>

      <div class="light-card flex-card">
        <div class="p-8 lg:px-12 lg:py-0 w-full lg:w-6/12">
          <h3 class="h3 mb-6">Beautiful Aircraft Illustrations</h3>

          <p>Mileways Exclusive</p>

          <p class="lg:text-xl text-gray-700 mb-0">
            Now even in the design of your favourite airline.
            Curious about your aircraft? Mileways has true-to-life
            illustrations of your aircraft, some even with the livery
            of your airline.
          </p>
        </div>

        <div class="w-full lg:w-1/2">
          <div class="bg-gray-300 p-8">
            <ResponsiveImage
              src="/images/mockups/airline-aircraft{size}.png"
              alt="Airport greeting sign" class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';

import ResponsiveImage from '../../general/ResponsiveImage';
import Lockscreen from '../../landing/Lockscreen';

export default Vue.extend({
  name: 'FeatureSection1',

  components: { ResponsiveImage, Lockscreen }
})
</script>
