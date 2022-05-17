import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView";

export const routes = [
    {
        path: "/",
        name: "home",
        component: MainView,
        beforeEnter(to, from, next) {
            window.scrollTo({
                top: 0,
                behavior: "instant",
            });
            next();
            // ...
        },
    },
    {
        path: "/InfoCenter",
        name: "InfoCenter",
        component: () => import("../views/InfoPageOne"),
        beforeEnter(to, from, next) {
            window.scrollTo({
                top: 0,
                behavior: "instant",
            });
            next();
            // ...
        },
    },
    {
        path: "/Donate",
        name: "Donate",
        component: () => import("../views/InfoPageTwo"),
        beforeEnter(to, from, next) {
            window.scrollTo({
                top: 0,
                behavior: "instant",
            });
            next();
            // ...
        },
    },
    {
        path: "/MyCollection",
        name: "MyCollection",
        component: () => import("../views/MyCollectionView"),
        beforeEnter(to, from, next) {
            window.scrollTo({
                top: 0,
                behavior: "instant",
            });
            next();
            // ...
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active",
});

export default router;
