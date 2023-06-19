<script lang= ts setup>
import buttonVue from '../slots/button.vue';
import UserStore from "@/stores/shopcart"
import UserWishlist from "@/stores/wishlist"
import { ref } from 'vue';
const { insertShoe } = UserStore()
const {pushShoe} = UserWishlist()

interface Mask {
  description: string,
  id: string,
  image: string,
  name: string,
  price: {
    value: number,
    discount: number
  },
  soldout: boolean
}

const props = defineProps<{ shoe: Mask }>()
let shoeExists = ref()

const wishlistShoe = () => { 
  shoeExists.value = pushShoe(props.shoe).value
}

</script>

<template>
  <div
    class="flex flex-col items-center justify-center border-shadeblack shadow-shadeblack shadow-lg rounded-md mt-5 w-52 py-3">
    <div class="w-40 flex flex-col justify-center items-center">
      <button class="ml-auto" @click="wishlistShoe">
        <i class="fa-regular fa-heart" :class="[shoeExists ? 'fa-solid fa-heart' : 'fa-regular fa-heart']"></i>

      </button>
      <img :src="props.shoe.image" alt="teste" class="h-28 w-36 mb-6">
      <p class="text-xs text-shadeblack mb-3 font-montserrat">{{ props.shoe.name }}</p>
      <span class="block font-bold text-sm text-shadeblack mr-auto font-montserrat">
        R${{ props.shoe.price.value }}
      </span>
      <span class="text-xs mr-auto mb-3 font-montserrat">
        OU 9X R${{ (props.shoe.price.value / 9).toFixed(2) }}
      </span>
      <buttonVue class="mr-auto" @click="insertShoe({...props.shoe, quantity: 1})">
        Comprar
      </buttonVue>
    </div>
  </div>
</template>

