<template>
<li>
    <div class="w-32">
        <img :src="props.shoe.image" alt="">
    </div>
    <div>
        <h1 class="font-bold text-xl font-monteserrat">{{ props.shoe.name }}</h1>
        <p class="text-sm text-shadeblack font-montserrat">Código do produto: {{ props.shoe.id }}</p>

        <ul class="mt-5">
            <li class="font-bold font-montserrat text-md">Numeração: <span class="text-shadeblack text-sm">39</span></li>
            <li class="font-bold font-montserrat text-md">Cor: <span class="text-shadeblack text-sm">Preto</span></li>
            <li class="font-bold font-montserrat text-md">Quantidade: <span class="text-shadeblack text-sm">{{ props.shoe.quantity }}</span></li>
            <li class="font-bold font-montserrat text-md">Preço: <span class="text-shadeblack text-sm">R$ {{ props.shoe.price.value }}</span></li>
        </ul>
    </div>

    <button class="mt-5"><i class="fa-regular fa-trash-can"></i> Remover</button>
</li>
</template>

<script setup lang="ts">
import type {Mask} from "@/types/shopcart"

const props = defineProps<{ shoe:Mask }>()
</script>
