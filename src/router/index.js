import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Work from '@/views/Work'
import About from '@/views/About'
import Blog from '@/views/Blog'
import Shop from '@/views/Shop'
import Aris from '@/views/Aris'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Work',
      name: 'Work',
      component: Work
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Aris',
      name: 'Arise',
      component: Aris
    }
  ]
})
