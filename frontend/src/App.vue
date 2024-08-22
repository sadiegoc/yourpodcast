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

  /* GLOBAL THEME CONFIG */
  .dark * { color: var(--light-soft); }
  * { color: var(--dark-soft); }

  a { text-decoration: none; }

  .dark hr { background-color: var(--dark-soft); }
  hr { background-color: var(--light-soft); }

  .dark input { color: var(--light-soft); background-color: var(--dark-soft); }
  input { color: var(--dark-soft); background-color: var(--light-soft); }

  .bg-hard.dark { background-color: var(--dark-hard); }
  .bg-hard { background-color: var(--light-hard); }

  .bg-soft.dark { background-color: var(--dark-soft); }
  .bg-soft { background-color: var(--light-soft); }

  .bg-soft-hover.dark:hover { background-color: var(--dark-soft); }
  .bg-soft-hover:hover { background-color: var(--light-soft); }

  .bg-hover.dark:hover { background-color: var(--dark-hover) !important; }
  .bg-hover:hover { background-color: var(--light-hover) !important; }

  .border-soft.dark { border-color: var(--dark-soft) !important; }
  .border-soft { border-color: var(--light-soft) !important; }

  .text-gray.dark { color: rgba(255, 255, 255, 0.4);; }
  .text-gray { color: rgba(0, 0, 0, 0.7); }


  /* DEFAULT COMPONENTS */  
  .btn {
    border: none;
    background-color: var(--theme);
    padding: 10px 25px; cursor: pointer;
    border-radius: var(--border-radius);
  } .btn:hover { background-color: var(--theme-contrast); }
</style>
