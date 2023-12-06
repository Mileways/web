<template>
    <div>
        <Hero />
        <Partners />
        <Stats />
    </div>
</template>

<script>

import Hero from '../components/business/Hero';
import Partners from '../components/business/Partners';
import Stats from '../components/business/Stats';

export default {
    components: { Hero, Partners, Stats }
}
</script>
