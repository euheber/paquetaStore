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
        <a href="/" class="">
          <img src="images/logo.png" alt="Logomarca Paquetá" class="w-40">
        </a>

        <ul class="flex gap-5">
          <li>
            <img src="icons/heart.svg" alt="ícone de lista de desejos" class="w-7">
          </li>
          <li>
            <img src="icons/bag.svg" alt="ícone de carrinho de compras" class="w-7">
          </li>
          <li>
            <img src="icons/login.svg" alt="ícone de login" class="w-7">
          </li>
        </ul>
       </div>

       <div class="sections mt-3">
        <ul class="flex justify-center flex-wrap gap-4">
          <li><a href="/" class="text-sm">Novidades</a></li>
          <li><a href="/" class="text-sm">Feminino</a></li>
          <li><a href="" class="text-sm">Masculino</a></li>
          <li><a href="/" class="text-sm">Paquetá-esportes</a></li>
          <li><a href="" class="text-sm">Outlet</a></li>
        </ul>
       </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {ref} from 'vue';


let  productsInCart = ref(0)
</script>



