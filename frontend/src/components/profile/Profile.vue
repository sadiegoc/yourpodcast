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
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ProfilePage',
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
    width: 100%; height: 150px;
    display: flex; justify-content: center;
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
    height: 100%; width: auto;
    display: flex; flex-direction: column;
    justify-content: space-between; align-items: start;
    margin-left: 10px;
}

.data input {
    border: none; border-radius: var(--border-radius);
    padding: 10px 14px; outline: none;
}
</style>