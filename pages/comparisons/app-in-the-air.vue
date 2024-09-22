<template>
    <div class="max-w-5xl mx-auto px-4 py-8 space-y-24">
        <GoodbyeLetter />
        <AITALogoSection />
        <ComparisonTable />
        <MigrateToMileways />
    </div>
</template>

<script>
import AITALogoSection from "@/components/AITALogoSection.vue";
import ComparisonTable from "@/components/ComparisonTable.vue";
import GoodbyeLetter from "@/components/GoodbyeLetter.vue";
import MigrateToMileways from "@/components/MigrateToMileways.vue";

export default {
    components: {
        AITALogoSection,
        GoodbyeLetter,
        ComparisonTable,
        MigrateToMileways,
    },
};
</script>
