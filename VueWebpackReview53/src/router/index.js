import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Messages from '@/components/Messages.vue';
import News from '@/components/News.vue';
import MessagesDetail from '@/components/MessagesDetail.vue';
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/home',
      component: Home,
      children:[
        {
          path:'/home/news',
          component: News
        },
        {
          path:'/home/messages',
          component: Messages,
          children:[
            {
              path:'/home/messages/detail/:id',
              component: MessagesDetail
            }
          ]
        },
        {
          path:'/',
          redirect:'/home/news',
        }
      ]
    },
    {
      path:'/about',
      component: About
    },
    {
      path: '*',
      redirect:'/home/news'
    }
  ]
})
