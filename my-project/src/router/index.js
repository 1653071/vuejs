import Vue from 'vue'
import Router from 'vue-router'

import UsersScreen from '../views/UsersScreen.vue'
import LoginScreen from '../views/LoginScreen.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UsersScreen',
      component: UsersScreen
    },
    {
      path: '/login',
      name: 'LoginScreen',
      component: LoginScreen
    }
  ]
})
