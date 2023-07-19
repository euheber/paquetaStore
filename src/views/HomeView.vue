<script setup lang="ts">
import buttonSlot from '@/components/slots/button.vue';
import shoeSize from '@/components/shoe/shoeSize.vue';
import images from "@/components/slots/images.vue";
import card from '@/components/shoe/card.vue';
import { register } from 'swiper/element/bundle';
import { onMounted } from 'vue';
import { ref } from 'vue';
import type { Mask } from "@/types/shoe"

register();

let shoeList = ref<Mask[]>()

onMounted(async () => {
    const api = await fetch("https://api.brchallenges.com/api/paqueta/shoes")
    const data = await api.json()

    shoeList.value = data.slice(17)
})

</script>


<template>
    <div class="banner-hero h-40 mt-5 md:h-[250px] md:pt-10 lg:h-[500px] lg:pt-32">
        <div class="max-w-6xl m-auto">
            <div class="w-40 md:mr-5 lg:w-[350px] ml-auto lg:mr-0">
                <h1 class="text-shadeblack font-bold text-xl lg:text-5xl">
                    Tênis Casual
                </h1>
                <span class="text-orange text-xl font-medium">Masculino</span>

                <div class="price">
                    <span class="font-medium text-shadeblack text-xs">A partir de</span>
                    <p class="text-xl text-shadeblack font-bold lg:text-2xl">
                        R$ 79,99
                    </p>

                    <buttonSlot class="w-40">
                        Aproveite
                    </buttonSlot>
                </div>
            </div>
        </div>
    </div>

    <div class=" bg-orange p-4">
        <ul class="m-auto max-w-5xl grid grid-cols-2 gap-4 lg:grid-cols-5 lg:grid-rows-1 lg:gap-2">
            <li class="flex gap-3 items-center">
                <img src="/icons/creditcard.svg" alt="" class="w-8 h-8">
                <div>
                    <span class="font-normal text-white text-xs">Pague em até 10x</span>
                    <p class="font-bold text-white text-xs">Sem juros*</p>
                </div>
            </li>

            <li class="flex gap-3 items-center">
                <img src="/icons/location.svg" alt="" class="w-8 h-8">
                <div>
                    <span class="font-normal text-white text-xs">Retire grátis</span>
                    <p class="font-bold text-white text-xs">Em nossas lojas</p>
                </div>
            </li>

            <li class="flex gap-3 items-center">
                <img src="/icons/discount.svg" alt="" class="w-8 h-8">
                <div>
                    <span class="font-normal text-white text-xs">Ganhe 20% de</span>
                    <p class="font-bold text-white text-xs">desconto</p>
                </div>
            </li>

            <li class="flex gap-3 items-center">
                <img src="/icons/delivery.svg" alt="" class="w-8 h-8">
                <div>
                    <span class="font-normal text-white text-xs">Frente grátis para</span>
                    <p class="font-bold text-white text-xs">regiões sul e sudeste</p>
                </div>
            </li>

            <li class="flex gap-3 items-center">
                <img src="/icons/change.svg" alt="" class="w-8 h-8">
                <div>
                    <span class="font-normal text-white text-xs">Primeira troca grátis</span>

                </div>
            </li>
        </ul>
    </div>
    <main class="p-2 max-w-5xl  m-auto">
        <div class="shoes mt-10">
            <div class="flex flex-col gap-2 justify-center items-center lg:flex-row">
                <images sex="Calçados femininos" position="left-10" filter="bg-gradient-to-r">
                    <img src="/images/calcados-femininos.png" alt="Calçado Feminino">
                </images>
                <div class="max-w-[500px] md:text-center lg:text-right lg:mb-20">
                    <p class="text-sm lg:text-lg font-montserrat">Escolher o seu sapato favorito entre nossa
                        <span class="font-bold">variedade de modelos e cores</span> não será uma tarefa
                        fácil, mas o que uma mulher não consegue fazer?
                    </p>

                    <buttonSlot class="px-24 mt-5 mb-5">
                        Conferir
                    </buttonSlot>
                </div>
            </div>

            <div class="flex flex-col gap-2 justify-center items-center lg:flex-row lg:mt-10">
                <images sex="Calçados masculino" position="right-10" filter="bg-gradient-to-l" class="lg:order-2">
                    <img src="/images/calcados-masculinos.png" alt="">
                </images>

                <div class=" max-w-[500px] md:text-center lg:text-left lg:mb-20 lg:order-1">
                    <p class="text-sm lg:text-lg font-montserrat">
                        Tenha em seu guarda roupa sapatos de qualidade e confortáveis, para o dia a dia, trabalho e até
                        mesmo para praticar esportes!
                    </p>

                    <buttonSlot class="px-24 mt-5">
                        Conferir
                    </buttonSlot>
                </div>
            </div>
        </div>

        <div class="outlet mt-10">
            <div class="flex gap-4 justify-center items-center lg:justify-between">
                <div class="logo w-36 flex flex-col">
                    <img src="/images/logo.png" alt="PaquetáStore" class="w-32">
                    <span class="text-3xl text-orange font-bold uppercase self-end">Outlet</span>
                </div>

                <div class="max-w-lg lg:text-right">
                    <p class="text-sm lg:text-lg">
                        Você também pode escolher o seu novo sapato favorito de acordo com a sua numeração.
                    </p>
                </div>
            </div>


            <ul class="mt-5 flex gap-2 flex-wrap lg:justify-around">
                <shoeSize class="border border-shadeblack ">33</shoeSize>
                <shoeSize class="border border-shadeblack ">34</shoeSize>
                <shoeSize class="border border-shadeblack ">35</shoeSize>
                <shoeSize class="border border-shadeblack ">36</shoeSize>
                <shoeSize class="border border-shadeblack ">37</shoeSize>
                <shoeSize class="border border-shadeblack ">38</shoeSize>
                <shoeSize class="border border-shadeblack ">39</shoeSize>
                <shoeSize class="border border-shadeblack ">40</shoeSize>
                <shoeSize class="border border-shadeblack ">41</shoeSize>
                <shoeSize class="border border-shadeblack ">42</shoeSize>
                <shoeSize class="border border-shadeblack ">43</shoeSize>
                <shoeSize class="border border-shadeblack ">44</shoeSize>
            </ul>
        </div>

        <section class="mt-10">
            <div class="header flex justify-between items-center">
                <h1 class="font-bold text-lg uppercase">Destaques</h1>
                <router-link to="/todosmodelos" class="text-sm border-b-orange border-b">
                    Conferir tudo
                </router-link>

            </div>

            <swiper-container :slidesPerView="'1'" :breakpoints="{
                1024: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 3,
                },
            }" :centeredSlides="false" :pagination="{ clickable: true, }" class="mySwiper pb-12">
                <swiper-slide v-for="shoe in shoeList" :key="shoe.id">
                    <card :shoe=shoe class="m-auto" />
                </swiper-slide>
            </swiper-container>
        </section>

        <section class="mt-10 mb-10">
            <h1 class="font-montserrat text-xl font-bold text-center">As melhores marcas estão aqui</h1>

            <div class="flex flex-wrap justify-between items-baseline mt-5">
                <img src="/icons/adidas.svg" alt="" class="w-16">
                <img src="/icons/viamarte.svg" alt="" class="w-24">
                <img src="/icons/bebece.svg" alt="" class="w-20">
                <img src="/icons/dumond.svg" alt="" class="w-24">
            </div>
        </section>
    </main>
</template>
