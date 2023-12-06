<template>
    <section class="bg-gray-100 py-16">
        <div class="flex flex-col items-center space-y-4">
            <p class="text-center text-xl text-primary">Some of our
                partners</p>
            <div
                class="grid grid-cols-1 px-24 md:px-0 md:grid-cols-5 gap-16 space-y-2 max-w-4xl items-center">
                <ResponsiveImage
                    src="/images/logos/business/lufthansa.png"
                    class="ml-auto" alt="Lufthansa" />
                <ResponsiveImage src="/images/logos/business/rimowa.png"
                    class="ml-auto" alt="RIMOWA" />
                <ResponsiveImage
                    src="/images/logos/business/muc-airport.png"
                    class="ml-auto" alt="Munich Airport" />
                <ResponsiveImage src="/images/logos/business/swiss.png"
                    class="ml-auto" alt="SWISS" />
                <ResponsiveImage src="/images/logos/business/tumi.png"
                    class="ml-auto" alt="TUMI" />
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