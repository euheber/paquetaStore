<script lang= ts setup>
import buttonVue from '../slots/button.vue';
import UserStore from "@/stores/shopcart";
import UserWishlist from "@/stores/wishlist";

import { RouterLink } from 'vue-router';
import type { Mask } from "@/types/shoe";
import { ref } from 'vue';
import { onMounted } from 'vue';


const { insertShoe } = UserStore()
const { pushShoe } = UserWishlist()
const { checkIfShoeExists } = UserWishlist()

let shoeExists = ref()

let wishlisted = ref(false)
let shoped = ref(false)
const props = defineProps<{ shoe: Mask }>()

onMounted(() => {
  shoeExists.value = checkIfShoeExists(props.shoe.id).value
})

const wishlistShoe = () => {
  const reference = shoeExists.value = pushShoe(props.shoe).value

  if(reference){
    wishlisted.value = !wishlisted.value
  setTimeout(() => { 
    wishlisted.value = !wishlisted.value
  }, 1500)
  }
}


const addToCart = () => { 
  insertShoe({ ...props.shoe, quantity: 1 })

  shoped.value = !shoped.value
  setTimeout(() => { 
    shoped.value = !shoped.value
  }, 1500)
}

const scrollTo = () => { 
  window.scrollTo(0, 0);
}


const timesX = Math.floor(Math.random() * 15) + 3

</script>

<template>
  <div class="flex flex-col  border-shadeblack shadow-shadeblack shadow-lg rounded-md mt-5 w-52 h-80 relative">
    <div class=" bg-orange w-full text-center text-white text-sm font-montserrat rounded-t-sm absolute"
      v-if="props.shoe.soldout">Esgotado</div>

    <div class="w-44 h-90 flex flex-col justify-center items-center m-auto h-72">
      <button class="ml-auto mt-1" @click="wishlistShoe">
        <i class="fa-regular fa-heart text-orange"
          :class="[shoeExists ? 'fa-solid fa-heart' : 'fa-regular fa-heart']"></i>
      </button>
      <router-link :to="`/sapato/${props.shoe.id}`" @click="scrollTo">
        <img :src="props.shoe.image" alt="" class="h-28 w-36 mb-6">
      </router-link>
      <p class="text-xs text-shadeblack mb-1 mr-auto font-montserrat">{{ props.shoe.name }}</p>
      <span class="block font-bold text-sm text-shadeblack mr-auto font-montserrat"
        v-if="Number.isInteger(props.shoe.price.value)">
        R$ {{ props.shoe.price.value }}.00
      </span>
      <span class="block font-bold text-sm text-shadeblack mr-auto font-montserrat" v-else>
        R$ {{ props.shoe.price.value }}
      </span>
      <span class="text-xs mr-auto mb-3 font-montserrat">
        OU {{ timesX }}X de R$ {{ (props.shoe.price.value / timesX).toFixed(2) }}
      </span>
      <buttonVue v-if="!props.shoe.soldout" class=" text-xs font-bold w-full mt-auto hover:text-shadeblack transition duration-500"
        @click="addToCart">
        Adicionar ao carrinho
      </buttonVue>
      <buttonVue v-else class="text-xs font-bold mt-auto
       w-full bg-orange hover:text-shadeblack transition duration-500">
        Me avise quando chegar
      </buttonVue>
    </div>


    <TransitionGroup  enter-active-class="animate__animated animate__fadeIn"  leave-active-class="animate__animated animate__fadeOut">
      <div class="absolute top-0 bg-orange py-4 text-center font-montserrat text-xs font-bold w-full"  v-if="wishlisted">
        <p class="text-white font-montserrat">Adicionado a lista de desejos</p>
      </div>

      <div class="absolute top-0 bg-orange py-4 text-center font-montserrat text-xs font-bold w-full"  v-if="shoped">
        <p class="text-white font-montserrat">Adicionado ao carrinho</p>
      </div>
    </TransitionGroup >
  </div>
</template>

