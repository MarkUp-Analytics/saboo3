import Vue from 'vue'
import Router from 'vue-router'
import Feed from './views/Feed.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/feed',
      name: 'feed',
      component: Feed
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
  ]
})
