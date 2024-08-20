<template>
    <div class="auth-content" :class="{ dark: themeDark }">
        <form class="auth-modal">
            <h1 class="title">Your Podcast</h1>
            <hr>
            <h2 class="auth-title">{{ showSignup ? 'Sign Up' : 'Login' }}</h2>

            <input v-if="showSignup" type="text" placeholder="Name" v-model="user.name">
            <input type="email" placeholder="E-mail" v-model="user.email">
            <input type="password" placeholder="Password" v-model="user.password">
            <input v-if="showSignup" type="password" placeholder="Confirm password" v-model="user.confirmPassword">

            <button v-if="showSignup" @click.prevent="signup">Sign Up</button>
            <button v-else @click.prevent="signin">Login</button>

            <a href @click.prevent="showSignup = !showSignup">
                <span v-if="showSignup">Already have a registration? Login</span>
                <span v-else>Don't have a registration? Sign Up</span>
            </a>
        </form>
    </div>
</template>

<script>
import { userKey } from '@/config/global';
import auth from '@/services/auth';

export default {
    name: 'AuthPage',
    data () {
        return {
            showSignup: false,
            user: {}
        }
    },
    methods: {
        signin () {
            auth.login(this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push({ name: 'home' })
                })
                .catch(err => console.log(err))
        },
        signup () {
            auth.register(this.user)
                .then(() => {
                    this.user = {}
                    this.$router.push({ path: '/auth' })
                    this.showSignup = false
                })
                .catch(err => console.log(err))
        }
    },
    computed: {
        themeDark () {
            return this.$store.state.themeDark
        }
    }
}
</script>

<style scoped>
.auth-content.dark .auth-title,
.auth-content.dark a,
.auth-content.dark button
{ color: var(--light-soft); }

.auth-content .auth-title,
.auth-content a,
.auth-content button
{ color: var(--dark-soft); }

.auth-content.dark input { color: var(--light-soft); background-color: var(--dark-soft); }
.auth-content input { color: var(--dark-soft); background-color: var(--light-soft); }

.auth-content.dark input:hover { background-color: var(--dark-hover); }
.auth-content input:hover { background-color: var(--light-hover); }

.auth-content {
    height: 100%;
    display: flex;
    justify-content: center; align-items: center;
}

.auth-modal {
    width: 350px;
    padding: 35px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.auth-modal .title {
    font-family: pixelmania;
    text-transform: uppercase;
    font-size: 0.8rem;
    color: var(--theme);
}

.auth-title {
    font-size: 1.4rem;
    font-weight: 100;
    margin: 10px 0 15px 0;
    text-transform: uppercase;
}

.auth-modal input {
    width: 100%; margin-bottom: 15px; padding: 14px 18px;
    outline: none; font-size: 0.9rem; border-radius: var(--border-radius);
    border: none;
}

.auth-modal button {
    align-self: flex-end;
    background-color: var(--theme);
    padding: 10px 25px; margin: auto;
    border: none; cursor: pointer;
    border-radius: var(--border-radius);
}

.auth-modal button:hover {
    background-color: var(--theme-contrast);
}

.auth-modal a {
    margin-top: 35px;
    text-decoration: none;
}

.auth-modal hr {
    border: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right,
        rgba(120,120,120,0),
        rgba(120,120,120,0.95),
        rgba(120,120,120,0)
    );
}
</style>