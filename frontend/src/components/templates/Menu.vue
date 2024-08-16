<template>
    <aside class="menu" v-show="isMenuVisible"></aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'MenuTemp',
    computed: mapState(['isMenuVisible'])
}
</script>

<style scoped>
.menu {
    background-color: blueviolet;

    display: flex; flex-direction: column;
    align-items: flex-start; justify-content: center;

    width: 300px; height: calc(100vh - var(--header-height));
    position: absolute; top: var(--header-height);
}
</style>