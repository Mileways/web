<template>
    <div class="text-center py-8 px-4 relative">
        <div class="flex justify-center items-center gap-8 mb-8">
            <div v-for="airline in airlines" :key="airline"
                class="space-x-8">
                <img :src="`/images/logos/airlines/${airline}.svg`"
                    :alt="airline" class="w-32 h-32" />
            </div>
            <div>
                <div
                    class="inline-flex items-center text-sm text-primary font-medium mb-4">
                    <img src="/images/icons/globe.svg" alt="Global"
                        class="w-4 h-4 mr-2" />
                    GLOBAL
                </div>
                <h2 class="text-4xl font-semibold mb-4">Supports all
                    airlines and airports</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Mileways is equipped and ready to serve travelers
                    from all around the world
                    flying their preferred airlines.
                </p>
            </div>
            <div v-for="flag in flags" :key="flag" class="space-x-8">
                <img :src="`/images/icons/flags/${flag}.svg`"
                    :alt="flag" class="w-32 h-32" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FeaturedAirlines",
    data() {
        return {
            airlines: ["LH", "DL", "QF"],
            flags: ["MX", "AU", "HK"],
        };
    },
};
</script>

<style scoped>
.text-content
{
    max-width: 600px;
}
</style>
