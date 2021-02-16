import { createRouter, createWebHistory } from 'vue-router'
// import Hats from './../views/SidebarContent/Hats.vue'
// import Default from '../views/NavbarContent/Default.vue'
const routes = [
  // NAVBAR ROUTES
  {
    path: '/',
    name: 'Default',
    components: { 
      Default: () => import('../views/NavbarContent/Default.vue'),
      News: () => import('../views/SidebarContent/NewsApp.vue')
    }
  },
  {
    path: '/About',
    name: 'About',
    components: { 
      About: () => import('../views/NavbarContent/About.vue'),
      News: () => import('../views/SidebarContent/NewsApp.vue')
    }
  },
  // SIDEBAR ROUTES
  {
    path: '/Classical',
    name: 'Classical',
    components: { Classical: () => import('../views/SidebarContent/ClassicalApp.vue') }
  },
  {
    path: '/Hats',
    name: 'Hats',
    components: {Hats: () => import('../views/SidebarContent/Hats.vue')}
  },
  {
    path: '/Admin',
    name: 'Admin',
    components: {Admin: () => import('../components/Admin.vue')}    
  },
  {
    path: '/detailview/hats/:id',
    name: 'DetailView',
    components: {DetailView: () => import('../views/SidebarContent/DetailView.vue')}    
  },
  {
    path: '/Logged',
    name: 'Logged',
    components: {Logged: () => import('../components/Logged.vue')}    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
