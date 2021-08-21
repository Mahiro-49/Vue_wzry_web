import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import("../views/Main.vue")
const Home = () => import("../views/Home.vue")
const Article = () => import("../views/Article.vue")
const Hero = () => import("../views/Hero.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '/', name: 'home', component: Home },
      { path: '/articles/:id', name: 'Article', component: Article, props: true }, 
    ]
  },
  {
    path: '/heroes/:id', name: 'Hero', component: Hero, props: true
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
