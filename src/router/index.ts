import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/offers',
    name: 'offers',
    component: () => import(/* webpackChunkName: "home" */ '../views/Offers.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "home" */ '../views/FAQ.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
