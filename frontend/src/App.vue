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
    --dark-half: #2c2c2c;
    --dark-soft: #4c4c4c;

    --light-hard: white;
    --light-half: #ddd;
    --light-soft: #aaa;

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
  .dark * { color: var(--light-half); }
  * { color: var(--dark-half); }

  a { text-decoration: none; }

  .dark hr { background-color: var(--dark-half); }
  hr { background-color: var(--light-half); }

  .dark input { color: var(--light-half); background-color: var(--dark-half); }
  input { color: var(--dark-half); background-color: var(--light-half); }

  .bg-hard.dark { background-color: var(--dark-hard); }
  .bg-hard { background-color: var(--light-hard); }

  .bg-soft.dark { background-color: var(--dark-half); }
  .bg-soft { background-color: var(--light-half); }

  .bg-soft-hover.dark:hover { background-color: var(--dark-half); }
  .bg-soft-hover:hover { background-color: var(--light-half); }

  .bg-hover.dark:hover { background-color: var(--dark-soft) !important; }
  .bg-hover:hover { background-color: var(--light-soft) !important; }

  .border-hard.dark { border-color: var(--dark-hard) !important; }
  .border-hard { border-color: var(--light-hard) !important; }

  .border-half.dark { border-color: var(--dark-half) !important; }
  .border-half { border-color: var(--light-half) !important; }

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
