<template>
  <section class="text-center container mx-auto">
    <h2 class="text-5xl font-black mb-5">Features</h2>

    <p class="max-w-3xl inline-block mx-auto text-left text-xl text-gray-700 mb-12">
      Certe, inquam, pertinax non possim accommodare torquatos nostros? quos dolores eos, qui dolorem. Alii autem, quibus ego cum memoriter, tum etiam erga nos amice et quasi.
    </p>

    <div class="gap-16 cols-1 md:cols-2">
      <FeatureCard title="My Flights">
        <template v-slot:cover>
          <ResponsiveImage
            src="/images/mockups/my_flights{size}.png"
            class="mx-auto mt-10"
            alt="My flights mockup"
          />
        </template>

        Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
      </FeatureCard>

      <FeatureCard title="Flight Details">
        <template v-slot:cover>
          <ResponsiveImage
            src="/images/mockups/flight_details{size}.png"
            class="mx-auto mt-10"
            alt="Flight details mockup"
          />
        </template>

        Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
      </FeatureCard>

      <div class="md:pt-56">
        <FeatureCard title="Friends' Flights">
          <template v-slot:cover>
            <ResponsiveImage
              src="/images/mockups/friends_flights{size}.png"
              class="mx-auto mt-10"
              alt="Friends' flights mockup"
            />
          </template>

          Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
        </FeatureCard>
      </div>

      <FeatureCard title="Notifications">
        <template v-slot:cover>
          <ResponsiveImage
            src="/images/mockups/notifications{size}.png"
            class="mx-auto mt-10"
            alt="Notifications mockup"
          />
        </template>

        Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
      </FeatureCard>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'

  import FeatureCard from '../FeatureCard'
  import ResponsiveImage from '../../general/ResponsiveImage'

  export default Vue.extend({
    name: 'FeatureSection',

    components: { FeatureCard, ResponsiveImage }
  })
</script>
