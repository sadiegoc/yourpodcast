<template>
  <div class="app">
    <HeaderTemp></HeaderTemp>
    <MenuTemp></MenuTemp>
    <ContentTemp></ContentTemp>
  </div>
</template>

<script>
import HeaderTemp from '@/components/templates/Header.vue'
import MenuTemp from '@/components/templates/Menu.vue'
import ContentTemp from '@/components/templates/Content.vue'

export default {
  name: 'App',
  components: { HeaderTemp, MenuTemp, ContentTemp }
}
</script>

<style>
  :root {
    --header-height: 60px;

    --dark-hard: #181818;
    --dark-soft: #2c2c2c;
    --dark-hover: rgba(255, 255, 255, 0.2);

    --light-hard: white;
    --light-soft: #ddd;
    --light-hover: rgba(0, 0, 0, 0.2);

    --theme: #FF9F1C;
    --theme-contrast: #E08300;

    --border-radius: 8px;
  }

  @font-face {
    font-family: pixelmania;
    src: url(./assets/fonts/Pixelmania.ttf);
  }

  @font-face {
    font-family: louis-bold;
    src: url(./assets/fonts/louis/LouisGeorgeCafeBold.ttf);
  }

  * {
    font-family: louis-bold;
    font-size: 1rem;
  }

  body {
    margin: 0;
  }

  .app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh; display: grid;
    grid-template-rows: var(--header-height) 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "header header" "content content";
  }

</style>
