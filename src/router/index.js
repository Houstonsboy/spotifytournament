import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RodeoVsAstroworld from '../views/Tournament.vue'
import LoadingDock from '@/views/LoadingDock.vue';
import DawnFMVsAfterHours from '@/components/AfterHoursVsDawnFM.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/RodeoVsAstroworld',
    name: 'RodeoVsAstroworld',
    component: RodeoVsAstroworld
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/LoadingDock',
    name: 'LoadingDock',
    component: LoadingDock
  },
  {
    path: '/DawnFMVsAfterHours',
    name: 'DawnFMVsAfterHours',
    component: DawnFMVsAfterHours
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
