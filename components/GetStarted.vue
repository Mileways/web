<template>
    <div
        class="max-w-4xl mx-auto text-center bg-gradient-to-b from-[#F2F2F2] to-[#F9F9F9] p-6 rounded-[32px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05),_0_2px_4px_rgba(0,0,0,0.05)]">
        <div
            class="inline-flex items-center text-sm text-primary font-medium mb-4">
            <img src="/images/icons/two-arrows.svg" alt="Global"
                class="w-4 h-4 mr-2" />
            HOW IT WORKS
        </div>
        <h1 class="text-4xl font-semibold mb-8">
            Get started with Mileways
        </h1>
        <button
            class="bg-primary text-white font-semibold py-3 px-6 rounded-full mb-16">
            Download Mileways
        </button>

        <InstallationSteps />
    </div>
</template>

<script>
import InstallationSteps from "@/components/InstallationSteps";

export default {
    components: {
        InstallationSteps
    }
}
</script>
