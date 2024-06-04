import { createWebHistory, createRouter } from 'vue-router';
import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppContacts from "./pages/AppContacts.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppSingleProject from "./pages/AppSingleProject.vue";
import NotFound from "./pages/NotFound.vue";

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
            },
            {
                path: '/projects/:id',
                name: 'project',
                component: AppSingleProject,
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'NotFound',
                component: NotFound
            },
        ]
})

export default router;