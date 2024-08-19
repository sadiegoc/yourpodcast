<template>
    <div class="home">
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
        <PodcastCard></PodcastCard>
    </div>
</template>

<script>
import PodcastCard from './PodcastCard.vue';

export default {
    name: 'HomePage',
    components: { PodcastCard }
}
</script>

<style scoped>
.home {
    display: grid; justify-content: space-evenly;
    grid-template-columns: auto;
    gap: 30px;
}

@media (min-width: 825px) {
    .home {
        grid-template-columns: auto auto;
    }
}

@media (min-width: 1226px) {
    .home {
        grid-template-columns: auto auto auto;
    }
}

@media (min-width: 1624px) {
    .home {
        grid-template-columns: auto auto auto auto;
    }
}
</style>