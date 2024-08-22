<template>
    <div class="profile" :class="{ dark: themeDark }">
        <form class="user-form" @submit.prevent="save()">
            <div class="image">
                <img :src="user.profilePath" alt="Profile">
                <button @click.prevent="editImg()">
                    edit
                </button>
            </div>
            <div class="data">
                <input type="text" class="bg-hover" :value="user.name" :class="{ dark: themeDark }">
                <button class="btn" type="submit">Save</button>
            </div>
        </form>

        <div class="my-podcasts">
            <div class="podcasts-configs" :class="{ dark: themeDark }">
                <h1 class="title">Your podcasts</h1>
                <div class="configs">
                    <router-link to="/upload" v-if="user">
                        <i class="fa fa-upload"></i>
                        Upload
                    </router-link>
                </div>
            </div>
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
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PodcastCard from '../home/PodcastCard.vue';

export default {
    name: 'ProfilePage',
    components: { PodcastCard },
    computed: mapState(['user', 'themeDark']),
    methods: {
        save () {
            console.log('save')
        },
        editImg () {
            console.log('edit')
        }
    }
}
</script>

<style scoped>
button {
    cursor: pointer;
}

.profile {
    margin: 0; padding: 0;
    width: 100%;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
}

.user-form {
    display: flex; flex-direction: row;
    align-items: start; justify-content: start;
}

.image {
    position: relative;
    width: 150px; height: 150px;
}

.image img, .image button {
    position: absolute;
    height: 100%; width: 100%;
    border-radius: var(--border-radius);
}

.image button {
    border: none; display: none;
    background: rgba(0, 0, 0, 0.3);
    color: white;
}

.image:hover button {
    display: block;
}

.data {
    height: 150px; width: auto;
    display: flex; flex-direction: column;
    justify-content: space-between; align-items: start;
    margin-left: 10px;
}

.data input {
    border: none; border-radius: var(--border-radius);
    padding: 10px 14px; outline: none;
}

.my-podcasts {
    padding: 0 0 50px 0;
    display: grid; justify-content: space-evenly;
    grid-template-rows: 1fr auto;
    grid-template-columns: auto;
    grid-template-areas: 'configs';
    gap: 20px;
}

.podcasts-configs {
    grid-area: configs;
    border-bottom: 1px dashed;
    margin: 20px 10px 0 10px;

    display: flex; justify-content: space-between;
    align-items: center;
}

.podcasts-configs .title {
    font-size: 1.4rem;
}

@media (max-width: 390px) {
    .user-form {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .data {
        justify-content: start; align-items: center;
        height: auto;
    }

    .data input {
        margin: 15px 0;
    }
}

@media (min-width: 760px) {
    .my-podcasts {
        grid-template-columns: auto auto;
        grid-template-areas: 'configs configs';
    }
}

@media (min-width: 1150px) {
    .my-podcasts {
        grid-template-columns: auto auto auto;
        grid-template-areas: 'configs configs configs';
    }
}

@media (min-width: 1540px) {
    .my-podcasts {
        grid-template-columns: auto auto auto auto;
        grid-template-areas: 'configs configs configs configs';
    }
}
</style>