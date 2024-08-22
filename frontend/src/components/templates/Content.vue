<template>
    <div class="content bg-hard" :class="{ dark: this.themeDark }">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'ContentTemp',
    computed: mapState(['themeDark'])
}
</script>

<style scoped>
    .content {
        grid-area: content;
        overflow: auto; padding: 40px 0;
    }

    .content::-webkit-scrollbar {
        background-color: transparent;
        width: 7px;
    }
    
    .content.dark::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: var(--light-soft);
    }

    .content::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: var(--dark-soft);
    }
</style>