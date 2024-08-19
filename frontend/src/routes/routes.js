import Auth from "@/components/auth/Auth.vue";
import HomePage from "@/components/home/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: HomePage
    }, {
        path: '/auth',
        name: 'auth',
        component: Auth
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;