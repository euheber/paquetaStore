<script setup lang="ts">
import type { Mask } from "@/types/shoe"
import userWishlist from "@/stores/wishlist"

const { pushShoe } = userWishlist()
const props = defineProps<{ shoe: Mask }>()
</script>

<template>
    <li class="border-b border-orange p-2 flex flex-col items-center w-96 lg:w-[1024px] gap-10 m-auto lg:flex-row">
        <div class="w-32">
            <RouterLink :to="`/sapato/${props.shoe.id}`">
                <img :src="props.shoe.image" alt="">
            </RouterLink>
        </div>
        <div class=" lg:w-[600px]">
            <h1 class="font-bold text-xl font-monteserrat">{{ props.shoe.name }}</h1>
            <p class="text-sm text-shadeblack font-montserrat">Código do produto: {{ props.shoe.id }}</p>
            <ul class="mt-5">
                <li class="font-bold font-montserrat text-md" >Preço: 
                    <span class="text-shadeblack text-sm"  v-if="Number.isInteger(props.shoe.price.value)">R$ {{props.shoe.price.value }}.00</span>
                    <span class="text-shadeblack text-sm"  v-else>R$ {{props.shoe.price.value }}</span>
                </li>
            </ul>
        </div>
     
        <button class="mt-5 place-self-start" @click="pushShoe(props.shoe)"><i class="fa-regular fa-trash-can"></i>
            Remover</button>
    </li>
</template>


