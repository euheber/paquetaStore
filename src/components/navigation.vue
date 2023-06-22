<script lang="ts" setup>
import  UserCart  from "@/stores/shopcart"
import UserWishlist from "@/stores/wishlist"

const shoes = UserCart()
const wishlist = UserWishlist()
</script>

<template>
  <header>
    <div class="bg-orange py-4">
      <div class="flex  items-center justify-between max-w-5xl m-auto px-3">
        <p class="text-white text-sm font-normal">Loja de Calçados e Moda Online</p>

        <div class="flex gap-4 ">
          <div class="flex">
            <img src="icons/phone.svg" alt="Icone de fone">
            <span class="hidden">Fale conosco</span>
          </div>

          <div class="flex">
            <img src="icons/location.svg" alt="Icone de fone">
            <span class="hidden">Encontrar uma loja física</span>
          </div>
        </div>
      </div>
    </div>

    <nav class="pt-1 max-w-5xl m-auto  px-2">
      <div class="flex justify-between items-center">
        <router-link to="/">
          <img src="images/logo.png" alt="Logomarca Paquetá" class="w-40">
        </router-link>

        <ul class="flex gap-5">
          <li class="relative">
            <a href=""><img src="icons/heart.svg" alt="ícone de lista de desejos" class="w-7"></a>
            <span
              class="absolute flex justify-center items-center bottom-4 left-5 bg-yellowish w-6 rounded-xl text-white font-normal">
              {{ wishlist.wishlist.length }}
            </span>
          </li>
          <li class="relative">
            <router-link to="/carrinho">
              <img src="icons/bag.svg" alt="ícone de carrinho de compras" class="w-7">
            </router-link>
            <span
              class="absolute flex justify-center items-center bottom-4 left-5 bg-yellowish w-6 rounded-xl text-white font-normal">
              {{ shoes.shoes.length }}
            </span>
          </li>
          <li>
            <img src="icons/login.svg" alt="ícone de login" class="w-7">
          </li>
        </ul>
      </div>

      <div class="sections mt-3">
        <ul class="flex justify-center flex-wrap gap-6">
          <li><a href="/" class="text-sm">Novidades</a></li>
          <li><a href="/" class="text-sm">Feminino</a></li>
          <li><a href="/" class="text-sm">Masculino</a></li>
          <li><a href="/" class="text-sm">Paquetá-esportes</a></li>
          <li><a href="/" class="text-sm">Outlet</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>




