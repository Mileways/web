<template>
  <div
      class="teaser-page-container"
  >
    <div class="container mx-auto">
      <img src="/images/logo_text.svg" alt="Mileways Logo" class="mx-auto">

      <h1 class="text-5xl sm:text-6xl mt-3 font-black text-white">Flying August 25th.<br>You may stay excited!</h1>

      <div class="sm:flex items-center mt-10">
        <div class="action-item-wrapper ml-auto">
          <div class="action-item sm:mr-5 mb-5 sm:mb-0">
            <TwitterFollowButton />
          </div>
        </div>

        <div class="action-item-wrapper mr-auto">
          <div class="action-item">
            <MailChimpSignUpForm class="flex-grow" />
          </div>
        </div>
      </div>
    </div>

    <div class="phone-mockup-wrapper">
      <div class="container mx-auto mt-20">
        <img
            srcset="
              /images/mockups/horizontal_phone.png,
              /images/mockups/horizontal_phone_2x.png 2x,
              /images/mockups/horizontal_phone_3x.png 3x
            "
            src="/images/mockups/horizontal_phone.png"
            class="mx-auto"
            alt="Horizontal phone"
        >
      </div>
    </div>
  </div>
</template>

<script>
import MailChimpSignUpForm from '../components/teaser/MailchimpSignUpForm'
import TwitterFollowButton from '../components/teaser/TwitterFollowButton'

export default {
  layout: 'empty',
  components: { MailChimpSignUpForm, TwitterFollowButton }
}
</script>

<style scoped>
.teaser-page-container {
  @apply flex flex-col text-center pt-20 bg-primary;
}
.phone-mockup-wrapper {
  @apply bg-no-repeat mt-auto;
  background-image: url(/images/clouds.svg);
  background-position: center calc(99.99999% + 1px);
  background-repeat: repeat-x;
  background-size: auto 7rem;
}
.action-item-wrapper {
  @apply block;
}
.action-item {
  @apply inline-flex items-center bg-white text-black border-white border-2 overflow-hidden rounded-lg;
  width: 256px;
}
@screen sm {
  .action-item-wrapper {
    @apply inline-block;
  }
  .phone-mockup-wrapper {
    background-size: auto 10rem;
  }
}
@screen md {
  .teaser-page-container {
    @apply pt-40;
  }
  .phone-mockup-wrapper {
    background-size: auto 15rem;
  }
}
</style>
