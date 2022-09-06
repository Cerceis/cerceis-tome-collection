import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ListOfTome from '../views/ListOfTome.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: ListOfTome
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
