import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContent from '../views/MainContent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'params',
    component: MainContent
  },
  {
    path: '/docs',
    name: 'docs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DocsContent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
