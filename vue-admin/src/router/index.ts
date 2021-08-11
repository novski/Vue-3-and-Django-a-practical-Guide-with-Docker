import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Register from '@/public/Register.vue'
import Login from '@/public/Login.vue'
import Secure from '@/secure/Secure.vue'
import Dashboard from '@/secure/dashboard/Dashboard.vue'
import Users from '@/secure/users/Users.vue'
import Profile from '@/secure/users/Profile.vue'

const routes: Array<RouteRecordRaw> = [
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {
    path: '', 
    component: Secure, 
    children:[
      {path: '', redirect: '/dashboard'},
      {path: '/dashboard', component: Dashboard},
      {path: '/users', component: Users},
      {path: '/profile', component: Profile}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
