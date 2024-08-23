import { userKey } from "@/config/global.js";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: () => import('@/components/home/Home.vue')
    }, {
        path: '/auth',
        name: 'auth',
        component: () => import('@/components/auth/Auth.vue')
    }, {
        path: '/profile',
        name: 'profile',
        component: () => import('@/components/profile/Profile.vue'),
        meta: { requiresAuth: true }
    }, {
        path: '/upload',
        name: 'upload',
        component: () => import('@/components/upload/Upload.vue'),
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if (to.matched.some(record => record.meta.requiresAuth)) {
        const user = JSON.parse(json)
        user ? next() : next({ path: '/' })
    } else {
        next()
    }
})

export default router;