<template>
    <div class="content" :class="{ dark: this.themeDark }">
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
    .content.dark { background-color: var(--dark-hard); }
    .content { background-color: var(--light-hard); }
    .content {
        grid-area: content;
        padding: 20px;
        overflow: auto;
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