import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import cartView from "@/views/cartView.vue";
import shoeView from "@/views/shoeView.vue";
import shoesView from "@/views/shoesView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/carrinho',
      name: 'cart',
      component: cartView
    },
    {
      path: '/sapato/:id',
      name: 'shoe',
      component: shoeView
    },
    {
      path: '/todosmodelos',
      name: 'shoes',
      component: shoesView
    },
  ]
})

export default router
