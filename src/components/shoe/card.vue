<script lang= ts setup>
import buttonVue from '../slots/button.vue';
import UserStore from "@/stores/shopcart"
import UserWishlist from "@/stores/wishlist"
import { ref } from 'vue';
import type { Mask } from "@/types/shoe"
import { RouterLink } from 'vue-router'
const { insertShoe } = UserStore() 
const { pushShoe } = UserWishlist()

const props = defineProps<{ shoe:Mask }>()
let shoeExists = ref()

const wishlistShoe = () => {
  shoeExists.value = pushShoe(props.shoe).value
}

const timesX = Math.floor(Math.random() * 15) + 3
</script>

<template>
  <div
    class="flex flex-col items-center justify-center border-shadeblack shadow-shadeblack shadow-lg rounded-md mt-5 w-52 py-3 h-80">
    <div class="w-40 flex flex-col justify-center items-center">
      <button class="ml-auto" @click="wishlistShoe">
        <i class="fa-regular fa-heart text-orange" :class="[shoeExists ? 'fa-solid fa-heart' : 'fa-regular fa-heart']"></i>
      </button>
      <router-link :to="`/sapato/${props.shoe.id}`">
        <img :src="props.shoe.image" alt="teste" class="h-28 w-36 mb-6">
      </router-link>
      <p class="text-xs text-shadeblack mb-3 font-montserrat">{{ props.shoe.name }}</p>
      <span class="block font-bold text-sm text-shadeblack mr-auto font-montserrat">
        R${{ props.shoe.price.value }}
      </span>
      <span class="text-xs mr-auto mb-3 font-montserrat">
        OU {{ timesX }}X de R$ {{ (props.shoe.price.value / timesX).toFixed(2) }}
      </span>
      <buttonVue class="mr-auto text-xs font-bold" @click="insertShoe({ ...props.shoe, quantity: 1 })">
        Adicionar ao carrinho
      </buttonVue>
    </div>
  </div>
</template>

