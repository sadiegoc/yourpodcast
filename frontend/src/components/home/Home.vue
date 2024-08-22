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
    display: grid; justify-content: center;
    grid-template-columns: auto;
    gap: 20px;
}

@media (min-width: 760px) {
    .home {
        grid-template-columns: auto auto;
    }
}

@media (min-width: 1150px) {
    .home {
        grid-template-columns: auto auto auto;
    }
}

@media (min-width: 1540px) {
    .home {
        grid-template-columns: auto auto auto auto;
    }
}
</style>