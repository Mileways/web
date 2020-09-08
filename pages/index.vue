<template>
  <div>
    <section class="welcome-section">
        <div class="container mx-auto grid grid-cols-2">
          <div class="mt-5">
            <h1 class="text-5xl sm:text-6xl mt-3 font-black text-white">
              Go Travel.
            </h1>

            <p class="text-white text-4xl max-w-md">
              Everything you need to know about your flights and your friends' flights.
              <br>

              <span class="font-bold">
                Fast, convenient
                <br>
                and beautiful.
              </span>

              <img
                src="/images/download.svg"
                alt="Download on the App Store"
                class="h-10 mt-5"
              >
            </p>
          </div>

          <div>
            <ResponsiveImage
              src="/images/mockups/main_mockup{size}.png"
              class="ml-auto"
              alt="Main mockup"
            />
          </div>
        </div>
    </section>

    <section class="text-center container mx-auto">
      <h2 class="text-5xl font-black mb-5">Features</h2>

      <p class="max-w-3xl inline-block mx-auto text-left text-xl text-gray-700 mb-12">
        Certe, inquam, pertinax non possim accommodare torquatos nostros? quos dolores eos, qui dolorem. Alii autem, quibus ego cum memoriter, tum etiam erga nos amice et quasi.
      </p>

      <div class="gap-16 cols-2">
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

        <div class="pt-56">
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

    <section class="container mx-auto my-20">
      <div class="rounded-4xl bg-gray-200 pt-16">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-5xl font-black mb-5">Details</h2>

          <p class="text-xl">
            <span class="font-black">We love what we do.</span>
            And that’s why our product is not just a combination of third party services.
            We have challenged every feature built into Mileways, analyzed every detail, questioned the status quo of flight tracking.
          </p>

          <p class="text-xl">
            You’ll find many hand crafted elements in our service, from custom airline logos to beautifully designed country flags, everything is made  to tingle a travelers heart.
          </p>
        </div>

        <div>
          <ResponsiveImage
            src="/images/airlines{size}.png"
            class="mx-auto mt-10 w-full"
            alt="Airline logos"
          />
        </div>
      </div>
    </section>

    <section class="container mx-auto my-32">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-5xl font-black mb-5">Story</h2>

        <p class="text-xl">
          <span class="font-black">We've come a long way.</span>
          Started in 2013, Mileways was first a service for collecting and redeeming miles independently of airlines.
          We’ve learned it the hard way, that this was not really something people asked for.
        </p>
      </div>

      <div class="rounded-4xl bg-gray-200 p-10 my-10">
        <ResponsiveImage
          src="/images/old_webpage{size}.png"
          class="mx-auto mt-10"
          alt="Old webpage"
        />
      </div>

      <div class="max-w-3xl mx-auto">
        <p class="text-xl">
          But ever since we believed, that the need was big for a simple, elegant and fast flight tracker.
          A place where people would be able to store their past and upcoming flights beautifully,
          a place where relevant information about flights is being sent ridiculously fast,
          a place where it’s super easy to share flight information with friends,
          maybe even without actively sharing it.
          And most of all, a reliable service which supports all air passengers and people serving the sky during their journeys.
        </p>

        <p class="text-xl">
          So we have used all our years of experience in this market,
          all our knowledge and power to deliver the new version of Mileways.
          And we hope you enjoy it as much as wo love to work on it.
        </p>
      </div>
    </section>

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
  </div>
</template>

<script>
  import FeatureCard from '../components/landing/FeatureCard'
  import CrewCard from '../components/landing/CrewCard'

  import ResponsiveImage from '../components/general/ResponsiveImage'

  export default {
    layout: 'empty',

    components: { FeatureCard, CrewCard, ResponsiveImage }
  }
</script>

<style scoped>
  .welcome-section {
    @apply flex flex-col pt-20 bg-primary bg-no-repeat mt-auto;

    background-image: url(/images/clouds.svg);
    background-position: center calc(99.99999% + 1px);
    background-repeat: repeat-x;
    background-size: auto 7rem;
  }

  @screen sm {
    .welcome-section {
      background-size: auto 8rem;
    }
  }

  @screen md {
    .welcome-section {
      @apply pt-40;

      background-size: auto 19rem;
    }
  }
</style>
