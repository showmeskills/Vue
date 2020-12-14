import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Payment from '../components/Payment.vue'
Vue.use(VueRouter)
Vue.prototype.$bus = new Vue();
const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/payment',
    name: 'payment',
    component: Payment,
  }

  
]

const router = new VueRouter({
  routes
})

export default router
