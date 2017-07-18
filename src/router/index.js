/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Work from '@/views/Work'
import About from '@/views/About'
import Services from '@/views/Services'
import Contact from '@/views/Contact'
import Blog from '@/views/Blog'
import Shop from '@/views/Shop'
import TylerJMcCall from '@/views/TylerJMcCall'
import TravelJuliasWay from '@/views/TravelJuliasWay'
import CathyGersonStudios from '@/views/CathyGersonStudios'
import ChrisSobalvarro from '@/views/ChrisSobalvarro'
import SalonEtc from '@/views/SalonEtc'
import Aris from '@/views/Aris'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)
Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
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
      path: '/Services',
      name: 'Services',
      component: Services
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
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
      path: '/Tyler-J-McCall',
      name: 'TylerJMcCall',
      component: TylerJMcCall
    },
    {
      path: '/Arise',
      name: 'Arise',
      component: Aris
    },
    {
      path: '/Travel-Julias-Way',
      name: 'Travel-Julias-Way',
      component: TravelJuliasWay
    },
    {
      path: '/SalonEtc',
      name: 'SalonEtc',
      component: SalonEtc
    },
    {
      path: '/CathyGersonStudios',
      name: 'CathyGersonStudios',
      component: CathyGersonStudios
    },
    {
      path: '/ChrisSobalvarro',
      name: 'ChrisSobalvarro',
      component: ChrisSobalvarro
    }
  ]
})
