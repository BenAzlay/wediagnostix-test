import Vue from 'vue'
import VueRouter from 'vue-router'
import UploadPage from '../views/UploadPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UploadPage',
    component: UploadPage
  },
  {
    path: '/images',
    name: 'AllImages',
    component: () => import(/* webpackChunkName: "images" */ '../views/AllImages.vue')
  },
  {
    path: '/recent-images',
    name: 'RecentImages',
    component: () => import(/* webpackChunkName: "recent-images" */ '../views/RecentImages.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
