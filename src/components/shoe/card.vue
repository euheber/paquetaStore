<script lang= ts setup>
import buttonVue from '../slots/button.vue';
import userCounterStore from "@/stores/shopcart"

const { insertShoe } = userCounterStore()
const { getShoes } = userCounterStore()

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

const teste = () =>  {
  console.log(getShoes())
}

</script>

<template>
  <div
    class="flex flex-col items-center justify-center border-shadeblack shadow-shadeblack shadow-lg rounded-md mt-5 w-52 py-3">
    <div class="w-40 flex flex-col justify-center items-center">
      <img :src="props.shoe.image" alt="teste" class="h-28 w-36 mb-6" @click="teste">
      <p class="text-xs text-shadeblack mb-3 font-montserrat">{{ props.shoe.name }}</p>
      <span class="block font-bold text-sm text-shadeblack mr-auto font-montserrat">
        R${{ props.shoe.price.value }}
      </span>
      <span class="text-xs mr-auto mb-3 font-montserrat">
        OU 9X R${{ (props.shoe.price.value / 9).toFixed(2) }}
      </span>
      <buttonVue class="mr-auto" @click="insertShoe({id: props.shoe.id, name: props.shoe.name, price: props.shoe.price.value})">
        Comprar
      </buttonVue>
    </div>
  </div>
</template>

