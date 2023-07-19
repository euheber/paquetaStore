<script lang="ts" setup>
import  UserCart  from "@/stores/shopcart"
import UserWishlist from "@/stores/wishlist"
import { useRoute } from "vue-router";

const route = useRoute()

const shoes = UserCart()
const wishlist = UserWishlist()

</script>

<template>
  <header>
    <div class="bg-orange py-4">
      <div class="flex  items-center justify-between max-w-5xl m-auto px-3">
        <p class="text-white text-sm font-normal">Loja de Calçados e Moda Online</p>

        <div class="flex gap-4 ">
          <div class="flex md: items-center justify-center">
            <img src="/icons/phone.svg" alt="Icone de fone">
            <span class="hidden text-white font-montserrat ml-1 md:block">Fale conosco</span> 
          </div>

          <div class="flex items-center justify-center">
            <img src="/icons/location.svg" alt="Icone de fone">
            <span class="hidden text-white font-montserrat ml-1 md:block">Encontrar uma loja física</span>
          </div>
        </div>
      </div>
    </div>

    <nav class="pt-1 max-w-5xl m-auto  px-2">
      <div class="flex justify-between items-center mt-2">
        <router-link to="/">
          <img src="/images/logo.png" alt="Logomarca Paquetá" class="w-40">
        </router-link>

        <ul class="flex gap-5">
          <li class="relative">
            <router-link to="/listadedesejos">
              <img src="/icons/heart.svg" alt="ícone de lista de desejos" class="w-7">
            </router-link>
            <span
              class="absolute flex justify-center items-center bottom-4 left-5 bg-yellowish w-6 rounded-xl text-white font-normal">
              {{ wishlist.wishlist.length }}
            </span>
          </li>
          <li class="relative">
            <router-link to="/carrinho">
              <img src="/icons/bag.svg" alt="ícone de carrinho de compras" class="w-7">
            </router-link>
            <span
              class="absolute flex justify-center items-center bottom-4 left-5 bg-yellowish w-6 rounded-xl text-white font-normal">
              {{ shoes.shoes.length }}
            </span>
          </li>
          <li>
            <img src="/icons/login.svg" alt="ícone de login" class="w-7">
          </li>
        </ul>
      </div>

      <div class="sections mt-3" v-if="route.name == 'home'">
        <ul class="flex justify-center flex-wrap gap-6">
          <li class="hover:text-orange transition duration-500"><a href="/" class="text-sm">Novidades</a></li>
          <li class="hover:text-orange transition duration-500"><a href="/" class="text-sm">Feminino</a></li>
          <li class="hover:text-orange transition duration-500"><a href="/" class="text-sm">Masculino</a></li>
          <li class="hover:text-orange transition duration-500"><a href="/" class="text-sm">Paquetá-esportes</a></li>
          <li class="hover:text-orange transition duration-500"><a href="/" class="text-sm">Outlet</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>




