<template>
    <div class="text-center py-8 px-4 relative">
        <div class="flex justify-center items-center gap-8 mb-8">
            <div v-for="(airline, index) in airlines" :key="airline"
                class="flex items-center">
                <div
                    :class="{ 'gradient-overlay-right': index === airlines.length - 1 }">
                    <img :src="`/images/logos/airlines/${airline}.svg`"
                        :alt="airline"
                        class="w-32 h-32 object-contain" />
                </div>
            </div>
            <div>
                <div
                    class="inline-flex items-center text-sm text-primary font-semibold mb-4">
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
            <div v-for="(flag, index) in flags" :key="flag"
                class="flex items-center">
                <div
                    :class="{ 'gradient-overlay-left': index === 0 }">
                    <img :src="`/images/icons/flags/${flag}.svg`"
                        :alt="flag"
                        class="w-32 h-32 object-contain" />
                </div>
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

.gradient-overlay-right,
.gradient-overlay-left
{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.gradient-overlay-right img,
.gradient-overlay-left img
{
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.gradient-overlay-right img
{
    mask-image: linear-gradient(to right, black, transparent);
    -webkit-mask-image: linear-gradient(to right, black, transparent);
}

.gradient-overlay-left img
{
    mask-image: linear-gradient(to left, black, transparent);
    -webkit-mask-image: linear-gradient(to left, black, transparent);
}
</style>
