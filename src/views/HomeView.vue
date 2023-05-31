<script setup lang="ts">
import buttonSlot from '@/components/slots/button.vue';
import images from "@/components/slots/images.vue";
</script>

<template>
    <div class="banner-hero relative h-40">
        <div class="box absolute text-sm top-4 right-1">
            <h1 class="text-shadeblack font-bold text-xl">
                Tênis Casual
            </h1>
            <span class="text-orange text-xl font-medium">Masculino</span>

            <div class="price">
                <span class="font-medium text-shadeblack text-xs">A partir de</span>
                <p class="text-xl text-shadeblack font-bold">
                    R$ 79,99
                </p>

                <buttonSlot>
                    Aproveite
                </buttonSlot>
            </div>
        </div>
    </div>
    <div class=" bg-orange p-4">
        <ul class="m-auto w-84 grid grid-cols-2 gap-4">

            <li class="flex gap-3  items-center">
                <img src="icons/creditcard.svg" alt="" class="w-8 h-8">
                <div>
                    <span class="font-normal text-white text-xs">Pague em até 10x</span>
                    <p class="font-bold text-white text-xs">Sem juros*</p>
                </div>
            </li>

            <li class="flex gap-3 items-center">
                <img src="icons/location.svg" alt="" class="w-8 h-8">
                <div>
                    <span class="font-normal text-white text-xs">Retire grátis</span>
                    <p class="font-bold text-white text-xs">Em nossas lojas</p>
                </div>
            </li>

            <li class="flex gap-3 items-center">
                <img src="icons/discount.svg" alt="" class="w-8 h-8">
                <div>
                    <span class="font-normal text-white text-xs">Ganhe 20% de</span>
                    <p class="font-bold text-white text-xs">desconto</p>
                </div>
            </li>

            <li class="flex gap-3 items-center">
                <img src="icons/delivery.svg" alt="" class="w-8 h-8">
                <div>
                    <span class="font-normal text-white text-xs">Frente grátis para</span>
                    <p class="font-bold text-white text-xs">regiões sul e sudeste</p>
                </div>
            </li>

            <li class="flex gap-3 items-center">
                <img src="icons/change.svg" alt="" class="w-8 h-8">
                <div>
                    <span class="font-normal text-white text-xs">Primeira troca grátis</span>

                </div>
            </li>
        </ul>
    </div>
    <main>
        <div class="shoes mt-10">
            <images sex="Calçados femininos" position="left-10" filter="bg-gradient-to-r ">
                <img src="images/calcados-femininos.png" alt="">
            </images>

            <images sex="Calçados masculino" position="right-10" filter="bg-gradient-to-l ">
                <img src="images/calcados-masculinos.png" alt="">
            </images>
        </div>
    </main>
</template>
