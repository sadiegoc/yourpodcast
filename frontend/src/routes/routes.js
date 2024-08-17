import Content from "@/components/templates/Content.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Content
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;