import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('./App.vue')
const About = () => import('./views/About.vue')

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
