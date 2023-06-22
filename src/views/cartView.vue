<template>
    <main class="px-2 mt-10">
        <div class=" max-w-xs leading-none">
            <span class="text-shadeblack font-montserrat">Paqueta</span> > <span
                class="border-b border-orange">Sacola</span>
        </div>

        <h1 class="font-bold font-montserrat text-2xl mt-5">Sacola de compras</h1>

        <section class="flex flex-col gap-5">
            <div class="border-b border-orange w-16 text-right">
                <h1 class="font-bold font-montserrat text-md mt-5">Itens</h1>
            </div>

            <ul class="">
                <shoeInCart v-for="shoe in shoes" :key="shoe.id" :shoe='shoe'/>
            </ul>
        </section>
    </main>
</template>

<script setup lang="ts">
import UserCart from "@/stores/shopcart"
import shoeInCart from "@/components/shoe/shoeInCart.vue";
const { shoes } = UserCart()

</script>
