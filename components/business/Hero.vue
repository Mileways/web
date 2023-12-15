<template>
    <section class="bg-white py-12">
        <div
            class="px-24 max-w-[1500px] mx-auto flex flex-col md:flex-row space-x-10 items-center">
            <div class="space-y-6">
                <h1 class="text-5xl leading-tight font-bold lg:mt-10">
                    Reach the largest community of air travelers in
                    the
                    world.
                </h1>

                <p class="text-2xl max-w-md">
                    Mileways - the world's social network for air
                    travelers.
                </p>

                <a :href="appStoreUrl">
                    <img src="/images/download.svg"
                        alt="Download on the App Store" class="h-10 mt-5">
                </a>
            </div>

            <div class="mt-10 max-w-4xl md:mt-0 hidden md:block">
                <ResponsiveImage src="/images/backgrounds/airport.jpg"
                    class="ml-auto" alt="Main mockup" />
            </div>

        </div>
    </section>
</template>

<script>
import Vue from 'vue';

import ResponsiveImage from '../general/ResponsiveImage';

export default Vue.extend({
    name: 'Hero',

    computed: {
        appStoreUrl() {
            return process.env.APP_STORE_URL;
        },
    },

    components: { ResponsiveImage },
})
</script>