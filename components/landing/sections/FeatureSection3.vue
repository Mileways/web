<template>
  <section class="bg-primary text-white py-24">
    <div class="container mx-auto">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-6xl font-black mb-8 leading-tight">
          Some Two Row Sample Headline For a Feature
        </h2>

        <p class="text-4xl mb-12 font-semibold text-gray-200">
          We love messaging. It’s our favorite way of collaborating, but not if it’s overwhelming and disorganized. We believe there’s a better way.
        </p>
      </div>

      <div class="rounded-4xl bg-gray-200 mb-8 flex items-center overflow-hidden text-black">
        <div class="px-20 w-7/12">
          <h3 class="font-black text-3xl mb-6">Notifications</h3>

          <p class="text-xl text-gray-700">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>

          <p class="text-xl text-gray-700 mb-0">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div class="bg-gray-300 w-5/12">
          <ResponsiveImage
            src="https://placekitten.com/440/610"
            alt=""
            :sizes="[]"
            class="w-full"
          />
        </div>
      </div>

      <div
        class="-mb-8 text-black gap-8 grid grid-cols-3"
      >
        <div class="flex flex-col">
          <div
              class="rounded-4xl text-white bg-cover bg-center pt-10 px-10 overflow-hidden mb-8"
              style="break-inside: avoid; background-image: url(https://placekitten.com/g/400/400);"
          >
            <h3 class="font-black text-3xl mb-3">Widgets</h3>

            <p>
              Ut placet, inquam tum dicere exorsus est.
            </p>

            <ResponsiveImage
                src="https://placekitten.com/267/183"
                alt=""
                :sizes="[]"
                class="w-full"
            />
          </div>

          <div
              class="rounded-4xl bg-gray-200 p-10 mb-8 flex-grow"
              style="break-inside: avoid;"
          >
            <h3 class="font-black text-3xl mb-3">Aircraft Illustrations</h3>

            <p class="text-gray-700 mb-8">
              Ut placet, inquam tum dicere exorsus est consecutus? laudem et impetus.
            </p>

            <ResponsiveImage
                src="https://placekitten.com/272/108"
                alt=""
                :sizes="[]"
                class="w-full"
            />
          </div>
        </div>

        <div class="flex flex-col">
          <div
              class="rounded-4xl bg-gray-200 p-10 mb-8 flex-grow"
              style="break-inside: avoid;"
          >
            <h3 class="font-black text-3xl mb-3">Statistics</h3>

            <p class="text-gray-700 mb-8">
              Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
            </p>

            <ResponsiveImage
                src="https://placekitten.com/240/56"
                alt=""
                :sizes="[]"
                class="w-full"
            />
          </div>

          <div
              class="rounded-4xl bg-gray-200 mb-8 overflow-hidden flex-grow"
              style="break-inside: avoid;"
          >
            <div class="p-10">
              <h3 class="font-black text-3xl mb-3">Airline Logos</h3>

              <p class="text-gray-700 mb-8">
                Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus.
              </p>
            </div>

            <ResponsiveImage
                src="https://placekitten.com/320/80"
                alt=""
                :sizes="[]"
                class="w-full"
            />
          </div>
        </div>

        <div class="flex flex-col">
          <div
              class="rounded-4xl bg-gray-200 p-10 mb-8 flex-grow"
              style="break-inside: avoid;"
          >
            <h3 class="font-black text-3xl mb-3">App Icons</h3>

            <p class="text-gray-700 mb-8">
              Ut placet, inquam tum.
            </p>

            <ResponsiveImage
                src="https://placekitten.com/208/134"
                alt=""
                :sizes="[]"
                class="w-full"
            />
          </div>

          <div
              class="rounded-4xl bg-gray-200 p-10 mb-8 flex-grow"
              style="break-inside: avoid;"
          >
            <h3 class="font-black text-3xl mb-3">Country flags</h3>

            <p class="text-gray-700 mb-8">
              Ut placet, inquam tum dicere exorsus est consecutus? laudem et impetus.
            </p>

            <ResponsiveImage
                src="https://placekitten.com/206/144"
                alt=""
                :sizes="[]"
                class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'

  import FeatureCard from '../FeatureCard'
  import ResponsiveImage from '../../general/ResponsiveImage'

  export default Vue.extend({
    name: 'FeatureSection2',

    components: { FeatureCard, ResponsiveImage }
  })
</script>
