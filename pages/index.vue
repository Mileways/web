<template>
  <div>
    <WelcomeSection />
    <FeatureSection1 />
    <FeatureSection2 />
    <FeatureSection3 />

    <client-only>
      <CookieDisclaimer />
    </client-only>
  </div>
</template>

<script>
  import WelcomeSection from '../components/landing/sections/WelcomeSection'
  import FeatureSection1 from '../components/landing/sections/FeatureSection1'
  import FeatureSection2 from '../components/landing/sections/FeatureSection2'
  import FeatureSection3 from '../components/landing/sections/FeatureSection3'

  import CookieDisclaimer from '../components/general/CookieDisclaimer'

  export default {
    components: { WelcomeSection, FeatureSection1, FeatureSection2, FeatureSection3, CookieDisclaimer }
  }
</script>
