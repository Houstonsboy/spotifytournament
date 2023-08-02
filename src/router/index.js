import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import testpage from '../views/Tournament.vue'
import LoadingDock from '@/views/LoadingDock.vue';
import Menu from '@/views/MenuView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/testpage',
    name: 'testpage',
    component: testpage
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
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
