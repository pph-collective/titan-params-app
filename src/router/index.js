import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContent from '../views/MainContent.vue'
import DocsContent from '../views/DocsContent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/params',
    name: 'params',
    component: MainContent
  },
  {
    path: '/docs',
    name: 'docs',
    component: DocsContent
  },
  {
    path: '*',
    redirect: '/index.html'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
