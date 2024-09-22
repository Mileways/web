<template>
  <div class="space-y-8 max-w-xl mx-auto">
    <div class="space-y-4 mb-6 font-medium">
      <h1 class="font-semibold mb-4">Our farewell to App in the Air</h1>
      <p>
        With a sad heart we have heard the news about App in the Air shutting down. Seeing
        competition go is always very emotional. Especially in this case where Mileways
        and App in the Air were founded around the same time back in 2011. Looking back we
        still remember all the buzz and news of Bayram and his team launching one new
        version after another, motivating us and everyone is this space to keep up with
        their speed and to build the best products for travellers.
      </p>

      <p>
        Thank you Bayram and Team for a great time of competition and we wish everyone
        from App in the Air just the very best for the future and all the success on their
        new ways. Whatever the new endeavours might be.
      </p>

      <p class="font-semibold">With love,<br />The Mileways Team</p>
    </div>
    <div class="bg-[#F2F2F2] rounded-[32px] p-4">
      <div class="flex items-start">
        <svg
          width="20"
          height="20"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-shrink-0 mr-2">
          <path
            d="M13.0003 23.8337C7.01724 23.8337 2.16699 18.9834 2.16699 13.0003C2.16699 7.01724 7.01724 2.16699 13.0003 2.16699C18.9834 2.16699 23.8337 7.01724 23.8337 13.0003C23.8337 18.9834 18.9834 23.8337 13.0003 23.8337ZM13.0003 21.667C17.7868 21.667 21.667 17.7868 21.667 13.0003C21.667 8.21385 17.7868 4.33366 13.0003 4.33366C8.21385 4.33366 4.33366 8.21385 4.33366 13.0003C4.33366 17.7868 8.21385 21.667 13.0003 21.667ZM11.917 7.58366H14.0837V9.75033H11.917V7.58366ZM11.917 11.917H14.0837V18.417H11.917V11.917Z"
            fill="#0D1012" />
        </svg>
        <div class="space-y-2">
          <p class="font-semibold mb-0 leading-[20px] flex items-center">
            You can now migrate your App in the Air flight history into Mileways!
          </p>
          <p class="font-semibold">
            <a
              class="text-primary flex items-center cursor-pointer"
              @click.prevent="scrollToGuide">
              Get started - takes 5 minutes
              <svg
                class="ml-2 w-3 h-3"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 5.01525L10.5962 0.725488L11.9094 1.95114L6 7.46661L0.0905704 1.95114L1.40381 0.725488L6 5.01525Z"
                  fill="#0099FF" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToGuide() {
      const guideElement = document.getElementById("migration-guide");
      if (guideElement) {
        guideElement.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
