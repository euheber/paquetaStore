<template>
  <main class="p-2 mt-5">
    <span class="text-sm">Paqueta</span> > <span class="border-b border-orange text-sm">nome do sapato</span>

    <section>
      <div class="img mt-8 w-80 m-auto flex flex-col gap-5">
        <div class="">
          <span>img aqui</span>
          <div class="socials">
            <span class="text-sm">Compartilhe</span>
            <ul class=" flex gap-2 mt-2">
              <li>
                <img src="/icons/instagram.svg" alt="ícone do instragram">
              </li>
              <li>
                <img src="/icons/facebook.svg" alt="ícone do facebook">
              </li>
              <li>
                <img src="/icons/twitter.svg" alt="ícone do twitter">
              </li>
              <li>
                <img src="/icons/youtube.svg" alt="ícone do youtube">
              </li>
              <li>
                <img src="/icons/pinterest.svg" alt="Ícone do pinterest">
              </li>
            </ul>
          </div>
        </div>
        <div class="comprar mt-5">
          <button>
            <i class="fa-regular fa-heart fa-xl text-orange"></i>
          </button>

          <h1 class="font-montserrat text-xl font-bold">titulo do produto</h1>
          <span class="text-sm">Código do produto:</span> <span class="text-sm">365087-2001152093</span>

          <div class="price mt-5">
            <span class="text-md line-through mr-5">R$ 000,00</span> <p class="inline font-montserrat bg-orange rounded-sm px-1">xx% <span class="uppercase font-montserrat font-bold text-sm">de desconto</span></p>

            <p class="font-montserrat text-2xl font-bold uppercase mt-2">r$ 999,90</p>
            <span class="text-shadeblack font-montserrat text-sm">ou 9x R$16,66</span>
          </div>

          <div class="size mt-3">
              <p class="font-montserrat text-sm text-shadeblack font-normal">Escolha a numeração:</p>

              <ul class="flex gap-2 mt-2">
                <li>
                  <shoeSize>34</shoeSize>
                </li>
                <li>
                  <shoeSize>35</shoeSize>
                </li>
                <li>
                  <shoeSize>36</shoeSize>
                </li>
                <li>
                  <shoeSize>37</shoeSize>
                </li>
                <li>
                  <shoeSize>38</shoeSize>
                </li>
                <li>
                  <shoeSize>39</shoeSize>
                </li>
                <li>
                  <shoeSize>40</shoeSize>
                </li>
              </ul>

              <a href="" class="text-sm font-bold text-shadeblack mt-5 block">Guia de tamanhos</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">

import UserWishlist from "@/stores/wishlist"
import shoeSize from "@/components/shoe/shoeSize.vue"
// const { pushShoe } = UserWishlist()
// const wishlistShoe = () => {
//   shoeExists.value = pushShoe(props.shoe).value
// }

</script>
