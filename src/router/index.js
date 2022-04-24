import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import City from '../views/City.vue'
import SpringView from '../views/SpringView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/city/:city',
    name: 'City',
    component: City,
    props: true
  },
  {
    path: '/spring/:citys',
    name: 'SpringView',
    component: SpringView,
    props: true
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
