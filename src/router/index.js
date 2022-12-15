import Vue from 'vue'
import VueRouter from 'vue-router'
import Notify from '@/views/Notify'
import NotFound from '@/views/404'
import Home from "@/views/Home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  } ,
  {
    path: '/notify',
    name: 'notify',
    component: Notify
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
