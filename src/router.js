import { createWebHistory, createRouter } from 'vue-router';
import AppHome from "./components/AppHome.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:
        [
            {
                path: '/',
                name: 'home',
                component: AppHome,
            },
            {
                path: '/projects',
                name: 'projects',
                component: AppProjects,
            },
            {
                path: '/contacts',
                name: 'contacts',
                component: AppContacts,
            },
            {
                path: '/about',
                name: 'about',
                component: AppAbout,
            }
        ]
})

export default router;