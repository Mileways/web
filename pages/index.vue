<template>
  <div>
    <WelcomeSection />
    <FeatureSection />
    <DetailsSection />
    <StorySection />
    <CrewSection />

    <client-only>
      <CookieDisclaimer />
    </client-only>
  </div>
</template>

<script>
  import WelcomeSection from '../components/landing/sections/WelcomeSection'
  import FeatureSection from '../components/landing/sections/FeatureSection'
  import DetailsSection from '../components/landing/sections/DetailsSection'
  import StorySection from '../components/landing/sections/StorySection'
  import CrewSection from '../components/landing/sections/CrewSection'

  import CookieDisclaimer from '../components/general/CookieDisclaimer'

  export default {
    components: { WelcomeSection, FeatureSection, DetailsSection, StorySection, CrewSection, CookieDisclaimer }
  }
</script>
