<template>
  <div>
    <section class="welcome-section">
        <div class="container mx-auto grid grid-cols-2">
          <div>
            <h1 class="text-5xl sm:text-6xl mt-3 font-black text-white">
              Go Travel.
            </h1>

            <p class="text-white text-4xl">
              Everything you need to know about your flights and your friends' flights.
              <br>

              <span class="font-bold">Fast, convenient and beautiful.</span>

              <img
                src="/images/download.svg"
                alt="Download on the App Store"
                class="h-10 mt-5"
              >
            </p>
          </div>

          <div>
            <img
              srcset="
                /images/mockups/main_mockup.png,
                /images/mockups/main_mockup_2x.png 2x,
                /images/mockups/main_mockup_3x.png 3x
              "
              src="/images/mockups/main_mockup.png"
              class="ml-auto"
              alt="Main mockup"
            >
          </div>
        </div>
    </section>

    <section class="text-center container mx-auto">
      <h2 class="text-4xl font-black mb-5">Features</h2>

      <p class="max-w-3xl inline-block mx-auto text-left text-xl text-gray-700 mb-20">
        Certe, inquam, pertinax non possim accommodare torquatos nostros? quos dolores eos, qui dolorem. Alii autem, quibus ego cum memoriter, tum etiam erga nos amice et quasi.
      </p>

      <div style="column-count: 2; column-gap: 4rem;">
        <FeatureCard title="My Flights">
          <template v-slot:cover>
            <img
                srcset="
                /images/mockups/my_flights.png,
                /images/mockups/my_flights_2x.png 2x,
                /images/mockups/my_flights_3x.png 3x
              "
                src="/images/mockups/my_flights.png"
                class="mx-auto mt-10"
                alt="My flights mockup"
            >
          </template>

          Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
        </FeatureCard>

        <FeatureCard title="Flight Details">
          <template v-slot:cover>
            <img
                srcset="
                /images/mockups/flight_details.png,
                /images/mockups/flight_details_2x.png 2x,
                /images/mockups/flight_details_3x.png 3x
              "
                src="/images/mockups/flight_details.png"
                class="mx-auto mt-10"
                alt="Flight details mockup"
            >
          </template>

          Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
        </FeatureCard>

        <div class="pt-56">
          <FeatureCard title="Friends' Flights">
            <template v-slot:cover>
              <img
                  srcset="
                  /images/mockups/friends_flights.png,
                  /images/mockups/friends_flights_2x.png 2x,
                  /images/mockups/friends_flights_3x.png 3x
                "
                  src="/images/mockups/friends_flights.png"
                  class="mx-auto mt-10"
                  alt="Friends' flights mockup"
              >
            </template>

            Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
          </FeatureCard>
        </div>

        <FeatureCard title="Notifications">
          <template v-slot:cover>
            <img
                srcset="
                /images/mockups/notifications.png,
                /images/mockups/notifications_2x.png 2x,
                /images/mockups/notifications_3x.png 3x
              "
                src="/images/mockups/notifications.png"
                class="mx-auto mt-10"
                alt="Notifications mockup"
            >
          </template>

          Ut placet, inquam tum dicere exorsus est consecutus? laudem et argumentandum et impetus. Ut placet, inquam tum dicere exorsus est laborum et dolorum fuga et fortibus.
        </FeatureCard>
      </div>
    </section>

    <section class="container mx-auto my-20">
      <div class="rounded-xl bg-gray-200 pt-10">
        <div class="w-9/12 mx-auto">
          <h2 class="text-4xl font-black mb-5">Details</h2>

          <p>
            <span class="font-bold">We love what we do.</span>
            And that’s why our product is not just a combination of third party services.
            We have challenged every feature built into Mileways, analyzed every detail, questioned the status quo of flight tracking.
          </p>

          <p>
            You’ll find many hand crafted elements in our service, from custom airline logos to beautifully designed country flags, everything is made  to tingle a travelers heart.
          </p>
        </div>

        <div>
          <img
            srcset="
              /images/airlines.png,
              /images/airlines_2x.png 2x,
              /images/airlines_3x.png 3x
            "
            src="/images/airlines.png"
            class="mx-auto mt-10"
            alt="Airline logos"
          >
        </div>
      </div>
    </section>

    <section class="container mx-auto my-20">
      <div class="w-9/12 mx-auto">
        <h2 class="text-4xl font-black mb-5">Story</h2>

        <p>
          <span class="font-bold">We've come a long way.</span>
          Started in 2013, Mileways was first a service for collecting and redeeming miles independently of airlines.
          We’ve learned it the hard way, that this was not really something people asked for.
        </p>
      </div>

      <div class="rounded-xl bg-gray-200 p-10 my-10">
        <img
          srcset="
            /images/old_webpage.png,
            /images/old_webpage_2x.png 2x,
            /images/old_webpage_3x.png 3x
          "
          src="/images/old_webpage.png"
          class="mx-auto mt-10"
          alt="Old webpage"
        >
      </div>

      <div class="w-9/12 mx-auto">
        <p>
          But ever since we believed, that the need was big for a simple, elegant and fast flight tracker.
          A place where people would be able to store their past and upcoming flights beautifully,
          a place where relevant information about flights is being sent ridiculously fast,
          a place where it’s super easy to share flight information with friends,
          maybe even without actively sharing it.
          And most of all, a reliable service which supports all air passengers and people serving the sky during their journeys.
        </p>

        <p>
          So we have used all our years of experience in this market,
          all our knowledge and power to deliver the new version of Mileways.
          And we hope you enjoy it as much as wo love to work on it.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
  import FeatureCard from '../components/landing/FeatureCard'

  export default {
    layout: 'empty',

    components: { FeatureCard }
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
      background-size: auto 10rem;
    }
  }

  @screen md {
    .welcome-section {
      @apply pt-40;

      background-size: auto 15rem;
    }
  }
</style>
