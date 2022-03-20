import { createRouter, createWebHistory } from 'vue-router'
import SignInView  from '@/views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import ResetView from '../views/ResetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: SignInView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/reset',
      name: 'reset',
      component: ResetView
    }
  ]
})

export default router
