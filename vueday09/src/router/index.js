import Vue from 'vue'
import VueRouter from 'vue-router'
import Fetch from '../views/Fetch.vue'
import Axios from '../views/Axios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Fetch
  },
  {
    path: '/axios',
    name: 'Axios',
    component:Axios,
  }
]

const router = new VueRouter({
  routes
})

export default router
