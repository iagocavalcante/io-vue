import Vue from 'vue'
import { IonicVueRouter } from '@modus/ionic-vue'
import MainPage from './MainPage.vue'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: MainPage },
    { path: '/blog', component: () => import ('@/domains/posts/Post') }
  ]
})
