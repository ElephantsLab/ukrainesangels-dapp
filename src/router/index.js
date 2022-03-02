import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView";

export

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainView
    },
    {
        path: '/InfoCenter',
        name: 'InfoCenter',
        component: () => import("../views/InfoPageOne")
    },
    {
        path: '/Donate',
        name: 'Donate',
        component: () => import("../views/InfoPageTwo")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;