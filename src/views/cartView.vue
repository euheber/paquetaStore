<template>
    <main class="mt-10 p-2">
      <div class="bg-light-gray rounded-sm pt-1 max-w-5xl m-auto">
        <div class=" max-w-xs leading-none ml-1">
            <span class="text-shadeblack font-montserrat">Paqueta</span> > <span
                class="border-b border-orange">Carrinho</span>
        </div>

        <section class="flex flex-col gap-5">
            <div class="border-b border-orange w-16 text-right">
                <h1 class="font-bold font-montserrat text-md mt-5">Itens</h1>
            </div>

            <ul class="flex flex-col gap-2">
                <shoeInCart v-for="shoe in shoes" :key="shoe.id" :shoe='shoe'/>
            </ul>
        </section>
      </div>
    </main>
</template>

<script setup lang="ts">
import UserCart from "@/stores/shopcart"
import shoeInCart from "@/components/shoe/shoeInCart.vue";
const { shoes } = UserCart()

</script>
