import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Flow from '../views/Flow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/flow',
    name: 'Flow',
    component: Flow
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
