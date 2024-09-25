<template>
    <div class="space-y-16 pb-12">
        <div class="max-w-3xl mx-auto px-5 font-sans"
            id="migration-guide">
            <h1 class="text-4xl font-semibold text-center mb-12 px-8">
                Migrate your App in the Air flight history into
                Mileways
                in 5 minutes
            </h1>
            <div class="bg-[#F2F2F2] rounded-[32px] p-8">
                <div v-for="(step, index) in steps" :key="index"
                    class="mb-12 last:mb-0">
                    <div class="flex justify-center mb-4">
                        <div
                            class="bg-[#E5E5E5] rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                            {{ index + 1 }}
                        </div>
                    </div>
                    <h2
                        class="text-2xl font-semibold text-center mb-2">
                        {{
                        step.title }}</h2>
                    <p
                        class="text-xl text-[#525455] text-center mb-4">
                        {{
                        step.description }}</p>
                    <button v-if="step.button" @click="step.action"
                        class="block mx-auto bg-black text-white rounded-full px-4 py-2 font-medium hover:bg-gray-800 transition-colors duration-200">
                        {{ step.button }}
                    </button>
                </div>
            </div>
        </div>
        <div class="bg-red-200 w-full h-full">
            <FeaturedAirlines class="hidden md:block" />
            <FeaturedAirlinesMobile class="md:hidden" />
        </div>
        <GetStarted />
    </div>
</template>

<script>
import FeaturedAirlines from "@/components/FeaturedAirlines";
import GetStarted from "@/components/GetStarted";
import FeaturedAirlinesMobile from "@/components/FeaturedAirlinesMobile";
export default {
    name: 'MigrateToMileways',
    data() {
        return {
            steps: [
                {
                    title: 'First, download Mileways from the App Store',
                    description: '',
                    button: 'Download Mileways',
                    action: this.downloadMileways
                },
                {
                    title: 'Then open App in the Air and export your data',
                    description: 'Export your data from App in the Air',
                    button: '',
                    action: null
                },
                {
                    title: 'Finally open Mileways and import it in settings',
                    description: 'Import your data into Mileways',
                    button: '',
                    action: null
                }
            ]
        }
    },
    methods: {
        downloadMileways() {
            window.open(process.env.APP_STORE_URL, '_blank')
        }
    },
    components: {
        FeaturedAirlines,
        FeaturedAirlinesMobile,
        GetStarted
    }
}
</script>

<style scoped>
.migrate-container
{
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.migrate-title
{
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
}

.steps-container
{
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 30px;
}

.step
{
    margin-bottom: 30px;
    position: relative;
}

.step-number
{
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
}
