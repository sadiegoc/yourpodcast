import Auth from "@/components/auth/Auth.vue";
import Home from "@/components/home/Home.vue";
import Profile from "@/components/profile/Profile.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/auth',
        name: 'auth',
        component: Auth
    }, {
        path: '/profile',
        name: 'profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;