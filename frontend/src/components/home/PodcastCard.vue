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
                <span class="views">
                    15k views
                </span>
                <span class="time">
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
.podcast-card.dark:hover { background-color: var(--dark-soft); }
.podcast-card:hover { background-color: var(--light-soft); }

.podcast-card.dark .title,
.podcast-card.dark .footer { color: var(--light-hard); }

.podcast-card.dark .info a,
.podcast-card.dark .info p { color: #999; text-decoration: none; }

.podcast-card .title,
.podcast-card .footer { color: var(--dark-hard); }

.podcast-card .info a,
.podcast-card .info p { color: #555; text-decoration: none; }

.podcast-card {
    width: 350px;
    display: flex; flex-direction: column;
    cursor: pointer; padding: 10px;
    border-radius: var(--border-radius);
}

.thumbnail,
.thumbnail img {
    margin: 0; padding: 0;
    width: 100%; height: auto;
    border-radius: var(--border-radius);
}

.body {
    display: flex; flex-direction: column;
    padding: 0; margin: 0;
}

.body .title {
    margin: 0; padding: 8px 0;
    font-size: 0.9rem;
}

.channel {
    display: flex; flex-direction: row;
}

.channel img {
    width: 35px; border-radius: var(--border-radius);
}

.info {
    margin-left: 8px;
}

.info h2 {
    font-weight: 900;
}

.info h2,
.info p {
    margin: 0; padding: 0;
    font-size: 0.9rem;
}

.footer {
    display: flex; justify-content: space-between;
    border-top: 1px dashed #999;
    margin: 6px 0; padding: 6px 0;
}

.footer span {
    font-size: 0.9rem;
}
</style>