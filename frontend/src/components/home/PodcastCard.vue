<template>
    <div class="podcast-card" :class="{ dark: this.themeDark }">
        <div class="thumbnail">
            <img src="@/assets/imgs/thumbnail.jpg" alt="Thumbnail">
        </div>
        <div class="body">
            <h1 class="title">Um titulo qualquer</h1>
            <div class="channel">
                <router-link to="#">
                    <img src="../../../../storage/profiles/imgs/default.jpg" alt="Logo">
                </router-link>
                <div class="info">
                    <router-link to="#">
                        <h2>Channel name</h2>
                    </router-link>
                    <p>time</p>
                </div>
            </div>
            <div class="footer">
                <span>
                    01:54:56
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'PodcastCard',
    computed: mapState(['themeDark'])
}
</script>

<style scoped>
.podcast-card.dark .title,
.podcast-card.dark .footer {
    color: var(--light-hard);
}

.podcast-card.dark .info a,
.podcast-card.dark .info p {
    color: #999;
    text-decoration: none;
}

.podcast-card .title,
.podcast-card .footer {
    color: var(--dark-hard);
}

.podcast-card .info a,
.podcast-card .info p {
    color: #888;
    text-decoration: none;
}

.podcast-card {
    width: 350px;
    display: flex; flex-direction: column;
    cursor: pointer;
}

.thumbnail {
    margin: 0; padding: 0;
    width: 100%; height: auto;
}

.thumbnail img {
    width: 100%;
}

.body {
    display: flex; flex-direction: column;
    padding: 5px; margin: 0;
}

.body .title {
    margin: 0; padding: 0;
}

.channel {
    display: flex; flex-direction: row;
}

.channel img {
    width: 35px; border-radius: var(--border-radius);
}

.info {
    margin-left: 5px;
}

.info h2, .info p {
    margin: 0; padding: 0;
}

.info p {
    font-size: 0.8rem;
}

.footer {
    display: flex; justify-content: end;
}

.footer span {
    font-size: 0.9rem;
}
</style>