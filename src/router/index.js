import { createRouter, createWebHistory } from "vue-router";
import HomeViews from "@/views/HomeViews.vue";
import Tasks from "@/components/Tasks.vue";
import NotFound from "@/components/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeViews,
        },
        {
            path: "/tasks",
            name: "tasks",
            component: Tasks,
        },
        {
            path: "/mahasiswa",
            name: "mahasiswa",
            component: () => import("@/components/Mahasiswa.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFound,
        }
    ],
});

export default router;