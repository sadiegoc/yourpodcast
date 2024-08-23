<template>
    <header class="header bg-hard" :class="{ dark: themeDark }">
        <div class="navbar">
            <div class="container">
                <div class="left">
                    <button class="toggle-menu bg-hover" :class="{ dark: themeDark }" @click="toggleMenu()">
                        <i class="fa" :class="icon"></i>
                    </button>
                    <router-link to="/" class="brand" :class="{ dark: themeDark }">
                        Your
                        <br>
                        Podcast
                    </router-link>
                </div>
                <div class="center">
                    <div class="search bg-soft bg-hover" :class="{ dark: themeDark }">
                        <button><i class="fa fa-search"></i></button>
                        <input type="search" placeholder="search...">
                    </div>
                </div>
                <div class="right">
                    <button class="btn-search">
                        <i class="fa fa-search"></i>
                    </button>
                    <div class="user-dropdown bg-hover" :class="{ dark: themeDark }">
                        <div class="user-button">
                            <i v-if="!user" class="fa fa-bars"></i>
                            <i v-if="user" class="fa fa-angle-down"></i>
                            <span v-if="user">{{ user.name }}</span>
                            <img v-if="user" :src="user.profilePath" alt="Profile" width="40px">
                        </div>
                        <div class="user-dropdown-content bg-hard border-half" :class="{ dark: themeDark }">
                            <div class="dropdown-menu">
                                <router-link to="/home">
                                    <i class="fa fa-home"></i>
                                    Home
                                </router-link>
                                <a @click="toggleTheme()">
                                    <img v-if="themeDark" src="@/assets/imgs/sun.svg" alt="Sun" height="16px">
                                    <img v-else src="@/assets/imgs/moon.svg" alt="Moon" height="16px">
                                    {{ themeDark ? 'Light' : 'Dark' }}
                                </a>
                                <hr v-if="user">
                                <router-link to="/profile" v-if="user">
                                    <i class="fa fa-user"></i>
                                    Profile
                                </router-link>
                                <router-link to="/upload" v-if="user">
                                    <i class="fa fa-upload"></i>
                                    Upload
                                </router-link>
                                <hr>
                                <a href @click.prevent="logout()" v-if="user">
                                    <i class="fa fa-sign-out"></i>
                                    Logout
                                </a>
                                <router-link v-if="!user" class="btn-auth" to="/auth">
                                    <i class="fa fa-sign-out"></i>
                                    Login / Sign Up
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { userKey } from '@/config/global';
import { mapState } from 'vuex';

export default {
    name: 'HeaderTemp',
    methods: {
        toggleMenu () {
            this.$store.commit('toggleMenu')
        },
        toggleTheme () {
            this.$store.commit('toggleTheme')
        },
        logout () {
            this.$store.commit('setUser', null)
            localStorage.removeItem(userKey)
            this.$router.push({ name: 'home' })
        }
    },
    computed: {
        ...mapState(['user', 'themeDark']),
        icon () {
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
        }
    }
}
</script>

<style scoped>
    /* THEME CONFIGS */
    .search input:hover { background: transparent; }
    
    .search.dark input::-webkit-search-cancel-button { background-image: url(../../assets/imgs/close-white.png); }
    .search input::-webkit-search-cancel-button { background-image: url(../../assets/imgs/close-black.png); }
    
    .user-dropdown-content.dark a:hover { background-color: var(--dark-soft); }
    .user-dropdown-content a:hover { background-color: var(--light-soft); }

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
        color: var(--theme);
    }

    .left .brand:hover {
        color: var(--theme-contrast);
    }

    /* CENTER CONFIGS */
    .center {
        flex-grow: 1;
        padding: 0 30px;
    }

    .search {
        padding: 10px 8px; margin: 0 auto;
        border-radius: var(--border-radius);
        max-width: 400px;
        
        display: flex; align-items: center;
    }
    
    .search input {
        border: none; outline: none;
        background: transparent; border-radius: 0;

        margin: 0; padding: 0 0 0 5px;
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
        border-radius: var(--border-radius);
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
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        border-left: 2px solid;
        border-bottom: 2px solid;
        border-right: 2px solid;
    }

    .user-dropdown-content a {
        padding: 10px;
        border-radius: var(--border-radius);
    }
    
    
    .user-dropdown-content a i, .user-dropdown-content a img {
        margin-right: 5px;
    }
    
    .dropdown-menu {
        display: flex; flex-direction: column;
        flex-wrap: wrap;
    }

    .dropdown-menu a {
        text-decoration: none; cursor: pointer;
        display: flex; align-items: center;
    }

    .dropdown-menu hr {
        border: 0;
        width: 100%;
        height: 1px;
    }

    @media (max-width: 640px) {
        .user-button span, .user-button .fa-angle-down {
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