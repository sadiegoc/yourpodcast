<template>
    <header class="header" :class="{ dark: this.themeDark }">
        <div class="navbar">
            <div class="container">
                <div class="left">
                    <button class="toggle-menu" :class="{ dark: this.themeDark }" @click="toggleMenu()">
                        <i class="fa" :class="icon"></i>
                    </button>
                    <router-link to="/" class="brand" :class="{ dark: this.themeDark }">
                        Your
                        <br>
                        Podcast
                    </router-link>
                </div>
                <div class="center">
                    <div class="search" :class="{ dark: this.themeDark }">
                        <button><i :class="{ dark: this.themeDark }" class="fa fa-search"></i></button>
                        <input type="search" placeholder="search...">
                    </div>
                </div>
                <div class="right">
                    <button class="btn-search">
                        <i :class="{ dark: this.themeDark }" class="fa fa-search"></i>
                    </button>
                    <div class="user-dropdown" :class="{ dark: this.themeDark }">
                        <div class="user-button">
                            <i :class="{ dark: this.themeDark }" class="fa fa-angle-down"></i>
                            <span>Username</span>
                            <img src="../../../../storage/profiles/imgs/default.jpg" alt="Profile" width="40px">
                        </div>
                        <div class="user-dropdown-content">
                            <div class="dropdown-menu">
                                <router-link to="/home">
                                    <i :class="{ dark: this.themeDark }" class="fa fa-home"></i>
                                    Home
                                </router-link>
                                <a href>
                                    <i :class="{ dark: this.themeDark }" class="fa fa-sign-out"></i>
                                    Logout
                                </a>
                                <a @click="toggleTheme()">
                                    <i class="sun" v-if="this.themeDark">
                                        <img src="@/assets/imgs/sun.svg" alt="Sun" height="16px">
                                    </i>
                                    <i class="moon" v-if="!this.themeDark">
                                        <img src="@/assets/imgs/moon.svg" alt="Moon" height="16px">
                                    </i>
                                    Light
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderTemp',
    methods: {
        toggleMenu () {
            this.$store.commit('toggleMenu')
        },
        toggleTheme () {
            this.$store.commit('toggleTheme')
        }
    },
    computed: {
        icon () {
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
        },
        themeDark () {
            return this.$store.state.themeDark
        }
    },
    mounted () {
        console.log(localStorage.getItem('theme'))
    }
}
</script>

<style scoped>
    /* THEME CONFIGS */
    .header.dark { background-color: var(--dark-hard); }
    .header { background-color: var(--light-hard);; }

    .left .toggle-menu.dark:hover { background-color: var(--dark-hover); }
    .left .toggle-menu:hover { background-color: var(--light-hover) }

    .left .toggle-menu.dark i { color: var(--light-hard); }
    .left .toggle-menu i { color: var(--dark-hard); }
    
    .left .brand.dark { color: var(--light-hard);; }
    .left .brand { color: var(--dark-hard); }
    
    .search.dark { background-color: var(--dark-soft); }
    .search { background-color: var(--light-soft); }
    
    .search.dark:hover { background-color: var(--dark-hover); }
    .search:hover { background-color: var(--light-hover); }
    
    .search.dark input { color: var(--light-hard); }
    .search input { color: var(--dark-hard); }
    
    .search.dark input::-webkit-search-cancel-button { background-image: url(../../assets/imgs/close-white.png); }
    .search input::-webkit-search-cancel-button { background-image: url(../../assets/imgs/close-black.png); }
    
    .user-dropdown.dark:hover { background-color: var(--dark-hover); }
    .user-dropdown:hover { background-color: var(--light-hover); }
    
    .user-dropdown.dark .user-button { color: var(--light-hard); }
    .user-dropdown .user-button { color: var(--dark-hard); }
    
    .user-dropdown.dark .user-dropdown-content { background-color: var(--dark-hard); }
    .user-dropdown .user-dropdown-content { background-color: var(--light-hard); }
    
    .user-dropdown.dark .user-dropdown-content a { background-color: var(--dark-hard); }
    .user-dropdown .user-dropdown-content a { background-color: var(--light-hard); }
    
    .user-dropdown.dark .user-dropdown-content a:hover { background-color: var(--dark-hover); }
    .user-dropdown .user-dropdown-content a:hover { background-color: var(--light-hover); }
    
    .user-dropdown.dark .dropdown-menu a { color: var(--light-hard); }
    .user-dropdown .dropdown-menu a { color: var(--dark-hard); }
    i.dark { color: var(--light-hard); }
    i { color: var(--dark-hard); }

    /* GENERAL CONFIGS */

    .navbar, .header { margin: 0; padding: 0; }
    .header {
        grid-area: header;
        position: relative;
    }

    .container {
        display: flex; flex-direction: row;
        align-items: center; justify-content: space-between;

        position: absolute;
        margin: 0; padding: 0;
        width: 100%; height: 100%;
    }

    /* LEFT CONFIGS */

    .left {
        display: flex; align-items: center;
    }

    .left i {
        font-size: 1.5rem;
    }

    .left .toggle-menu {
        background: transparent;
        border: none; border-radius: 50%;
        cursor: pointer;

        width: 45px; height: 45px;
        padding: 0; margin: 0 15px;
    }


    .left .brand {
        font-family: pixelmania;
        text-transform: uppercase;
        font-size: 0.6rem;
        cursor: pointer;
    }

    /* CENTER CONFIGS */
    .center {
        flex-grow: 1;
        padding: 0 30px;
    }

    .search {
        padding: 10px 8px; margin: 0 auto;
        border-radius: 5px;
        max-width: 400px;
        
        display: flex; align-items: center;
    }
    
    .search input {
        border: none; outline: none;
        background: transparent; border-radius: 0;

        margin: 0; padding: 0;
        width: 100%;

        font-size: 0.9rem;
    }

    .search button {
        background: transparent; border: none;
        border-radius: 0;
        margin: 0; padding: 0 5px 0 0;
    }

    .search input::-webkit-search-cancel-button {
        -webkit-appearance: none;
        cursor: pointer;

        height: 14px;
        width: 14px;
        background-size: cover;
    }

    /* RIGHT CONFIGS */
    .right {
        margin: 0; padding: 0;
        display: flex;
    }

    .user-dropdown {
        display: block;
    }
    
    .user-button {
        display: flex; align-items: center;
        height: 60px; cursor: pointer;
        padding: 0 15px;
    }

    .user-button span {
        margin: 0 10px;
    }

    .user-button img {
        border-radius: 5px;
    }


    .user-dropdown:hover .user-dropdown-content {
        display: block;
    }

    .btn-search {
        border: none; background: none;
        cursor: pointer; display: none;
    }

    .user-dropdown-content {
        position: absolute; right: 0;
        min-width: 170px;
        padding: 10px;
        display: none;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .user-dropdown-content a {
        padding: 10px;
        border-radius: 5px;
    }


    .user-dropdown-content a i {
        margin-right: 5px;
    }
    
    .dropdown-menu {
        display: flex; flex-direction: column;
        flex-wrap: wrap;
    }

    .dropdown-menu a {
        text-decoration: none; cursor: pointer;
    }

    @media (max-width: 640px) {
        .user-button span, .user-button i {
            display: none;
        }

        .left .brand {
            font-size: 0.5rem;
        }
    }

    @media (max-width: 490px) {
        .center {
            display: none;
        }

        .btn-search {
            display: block;
        }
    }

</style>