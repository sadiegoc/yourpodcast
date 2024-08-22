<template>
    <div class="podcast-card bg-soft-hover" :class="{ dark: this.themeDark }">
        <div class="container">
            <div class="thumbnail">
                <img src="@/assets/imgs/thumbnail.jpg" alt="Thumbnail">
            </div>
            <div class="body">
                <h1 class="title">#33 CAT CAST - GM Magnus Carlsen and GM Supi</h1>
                <div class="channel">
                    <router-link to="#">
                        <img src="../../../../storage/profiles/imgs/default.jpg" alt="Logo">
                    </router-link>
                    <div class="info">
                        <router-link to="#">
                            <h2 class="text-gray" :class="{ dark: themeDark }">Cat Cast</h2>
                        </router-link>
                        <p class="text-gray" :class="{ dark: themeDark }">5 hours ago</p>
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
.podcast-card {
    width: 100%;
    border-radius: var(--border-radius);
}

.podcast-card .container {
    display: flex; flex-direction: column;
    cursor: pointer; padding: 10px;
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
    font-size: 0.9rem; word-break: break-all;
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
    margin: 6px 0 0 0; padding: 6px 0 0 0;
}

.footer span {
    font-size: 0.9rem;
}
</style>