import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: () => import(/* webpackChunkName: "proyectos" */ '../views/Proyectos.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/Recuperarcontrasena',
    name: 'Recuperar Contraseña',
    component: () => import(/* webpackChunkName: "login" */ '../views/Recovery.vue')
  },
  {
    path: '/Register',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "login" */ '../views/Register.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
