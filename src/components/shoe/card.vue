<script lang= ts setup>
import buttonVue from '../slots/button.vue';
import UserStore from "@/stores/shopcart"
import UserWishlist from "@/stores/wishlist"
import { RouterLink } from 'vue-router'
import type { Mask } from "@/types/shoe"
import { ref } from 'vue';
import { onMounted } from 'vue';

const { insertShoe } = UserStore() 
const { pushShoe } = UserWishlist()
const { checkIfShoeExists } = UserWishlist()

const props = defineProps<{ shoe:Mask }>()
let shoeExists = ref()

onMounted(() => {
  shoeExists.value = checkIfShoeExists(props.shoe.id).value
})

const wishlistShoe = () => {
  shoeExists.value = pushShoe(props.shoe).value
}

const timesX = Math.floor(Math.random() * 15) + 3


</script>

<template>
  <div
    class="flex flex-col  border-shadeblack shadow-shadeblack shadow-lg rounded-md mt-5 w-52 h-80 relative">
    <div class=" bg-orange w-full text-center text-white text-sm font-montserrat rounded-t-sm absolute" v-if="props.shoe.soldout">Esgotado</div>
   
    <div class="w-44 h-90 flex flex-col justify-center items-center m-auto h-72">
      <button  class="ml-auto mt-1" @click="wishlistShoe">
        <i class="fa-regular fa-heart text-orange" :class="[shoeExists ? 'fa-solid fa-heart' : 'fa-regular fa-heart']"></i>
      </button>
      <router-link :to="`/sapato/${props.shoe.id}`">
        <img :src="props.shoe.image" alt="" class="h-28 w-36 mb-6">
      </router-link>
      <p class="text-xs text-shadeblack mb-1 mr-auto font-montserrat">{{ props.shoe.name }}</p>
      <span class="block font-bold text-sm text-shadeblack mr-auto font-montserrat" v-if="Number.isInteger(props.shoe.price.value)">
        R${{ props.shoe.price.value }}.00
      </span>
      <span class="block font-bold text-sm text-shadeblack mr-auto font-montserrat" v-else>
        R${{ props.shoe.price.value }}
      </span>
      <span class="text-xs mr-auto mb-3 font-montserrat">
        OU {{ timesX }}X de R$ {{ (props.shoe.price.value / timesX).toFixed(2) }}
      </span>
      <buttonVue v-if="!props.shoe.soldout" class=" text-xs font-bold w-full mt-auto" @click="insertShoe({ ...props.shoe, quantity: 1 })">
        Adicionar ao carrinho
      </buttonVue>
      <buttonVue v-else  class=" text-xs font-bold mt-auto
       w-full bg-orange " >
        Me avise quando chegar
      </buttonVue>
    </div>
  </div>
</template>

