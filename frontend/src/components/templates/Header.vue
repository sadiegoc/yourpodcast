<template>
    <header class="header">
        <div class="navbar">
            <div class="container">
                <div class="left">
                    <button class="toggle-menu" @click="toggleMenu()">
                        <i class="fa" :class="icon" style="color: #fff;"></i>
                    </button>
                    <router-link to="/" class="brand">
                        Your
                        <br>
                        Podcast
                    </router-link>
                </div>
                <div class="center">
                    <div class="search">
                        <button><i class="fa fa-search" style="color: #fff;"></i></button>
                        <input type="search" placeholder="search...">
                    </div>
                </div>
                <div class="right">
                    <button class="btn-search">
                        <i class="fa fa-search" style="color: #fff;"></i>
                    </button>
                    <div class="user-dropdown">
                        <div class="user-button">
                            <i class="fa fa-angle-down"></i>
                            <span>Username</span>
                            <img src="../../../../storage/profiles/imgs/default.jpg" alt="Profile" width="40px">
                        </div>
                        <div class="user-dropdown-content">
                            <div class="dropdown-menu">
                                <router-link to="/home">
                                    <i class="fa fa-home"></i>
                                    Home
                                </router-link>
                                <a href>
                                    <i class="fa fa-sign-out"></i>
                                    Logout
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
        }
    },
    computed: {
        icon () {
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
        }
    }
}
</script>

<style scoped>
    .navbar, .header { margin: 0; padding: 0; }
    .header {
        grid-area: header;
        background-color: #1c1c1c;
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

    .left .toggle-menu:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .left .brand {
        font-family: pixelmania;
        text-transform: uppercase;
        font-size: 0.6rem; color: white;
        cursor: pointer;
    }

    /* CENTER CONFIGS */
    .center {
        flex-grow: 1;
        padding: 0 30px;
    }

    .search {
        background-color: #2c2c2c;
        padding: 10px 8px; margin: 0 auto;
        border-radius: 5px;
        max-width: 400px;
        
        display: flex; align-items: center;
    }
    
    .search input {
        border: none; outline: none;
        background: transparent; border-radius: 0;
        color: white;

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
        background-image: url(../../assets/imgs/close-white.png);
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
        color: white;
    }

    .user-button span {
        margin: 0 10px;
    }

    .user-dropdown:hover {
        background-color: rgba(0, 0, 0, 0.1);
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
        background-color: #1c1c1c;
        min-width: 170px;
        padding: 10px;
        display: none;
    }
    
    .dropdown-menu {
        display: flex; flex-direction: column;
        flex-wrap: wrap;
    }

    .dropdown-menu a {
        text-decoration: none; color: white;
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