<template>
  <section class="container mx-auto my-32">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-5xl font-black mb-5 text-center">Crew</h2>

      <p class="text-xl">
        Certe, inquam, pertinax non possim accommodare torquatos nostros? quos dolores eos, qui dolorem.
        Alii autem, quibus ego cum memoriter, tum etiam erga nos amice et quasi.
      </p>
    </div>

    <div class="relative md:px-20 mt-10">
      <div
        class="w-full absolute left-0 rounded-4xl bg-cover hidden md:block"

        style="background-image: url(/images/sky.png); top: 6rem; bottom: 8rem; z-index: -1;"
      />

      <div class="mx-auto gap-8 cols-1 md:cols-2">
        <CrewCard
          name="Alex Lueck"
          position="Founder & CEO"
          responsive-image-path="/images/team/alex{size}.png"
        />

        <CrewCard
          name="Ivan Reif"
          position="Back-End Development"
          responsive-image-path="/images/team/ivan{size}.png"
        />

        <CrewCard
          name="Stephan Krusche"
          position="iOS Development"
          responsive-image-path="/images/team/stephan{size}.png"
        />

        <div class="md:pt-32">
          <CrewCard
            name="Gernot Poetsch"
            position="iOS Development"
            responsive-image-path="/images/team/gernot{size}.png"
          />
        </div>

        <CrewCard
          name="Rico Ocepek"
          position="Front-End Development"
          responsive-image-path="/images/team/rico{size}.png"
        />

        <CrewCard
          name="Yannick Lung"
          position="UI/UX Design"
          responsive-image-path="/images/team/yannick{size}.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'

  import CrewCard from '../CrewCard'

  export default Vue.extend({
    name: 'CrewSection',

    components: { CrewCard }
  })
</script>
