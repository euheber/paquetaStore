<script setup lang="ts">
import buttonSlot from '@/components/slots/button.vue';
import shoeSize from '@/components/shoe/shoeSize.vue';
import images from "@/components/slots/images.vue";
import card from '@/components/shoe/card.vue';
import { register } from 'swiper/element/bundle';
import { onMounted } from 'vue';
import { ref } from 'vue';

register();

type Mask = [
{
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
]



const shoeList = ref();
let slicedList = ref<Mask>()

onMounted(async () => {
    const api = await fetch("https://api.brchallenges.com/api/paqueta/shoes")
    const data = await api.json()

    shoeList.value = data
    slicedList.value = shoeList.value.slice(17)  
})

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
    <main class="p-2">
        <div class="shoes mt-10">
            <div class="shoe flex flex-col gap-2 justify-center items-center p-2">
                <images sex="Calçados femininos" position="left-10" filter="bg-gradient-to-r ">
                    <img src="images/calcados-femininos.png" alt="Calçado Feminino">
                </images>
                <div class="info">
                    <p class="text-sm font-medium">Escolher o seu sapato favorito entre nossa
                        <span class="font-bold">variedade de modelos e cores</span> não será uma tarefa
                        fácil, mas o que uma mulher não consegue fazer?
                    </p>

                    <buttonSlot class="px-24 mt-5">
                        Conferir
                    </buttonSlot>
                </div>
            </div>

            <div class="shoe flex flex-col gap-2 justify-center items-center p-2">
                <images sex="Calçados masculino" position="right-10" filter="bg-gradient-to-l ">
                    <img src="images/calcados-masculinos.png" alt="">
                </images>

                <div class="info text-sm font-medium">
                    <p class="text-sm">
                        Tenha em seu guarda roupa sapatos de qualidade e confortáveis, para o dia a dia, trabalho e até
                        mesmo para praticar esportes!
                    </p>

                    <buttonSlot class="px-24 mt-5 ml-40">
                        Conferir
                    </buttonSlot>
                </div>
            </div>
        </div>

        <div class="outlet mt-10">
            <div class="flex gap-4 justify-center items-center">
                <div class="logo w-36 flex flex-col">
                    <img src="images/logo.png" alt="PaquetáStore" class="w-32">
                    <span class="text-3xl text-orange font-bold uppercase self-end">Outlet</span>
                </div>

                <p class="text-sm">
                    Você também pode escolher o seu novo sapato favorito de acordo com a sua numeração.
                </p>
            </div>


            <ul class="mt-5 flex gap-2 flex-wrap">
                <shoeSize>33</shoeSize>
                <shoeSize>34</shoeSize>
                <shoeSize>35</shoeSize>
                <shoeSize>36</shoeSize>
                <shoeSize>37</shoeSize>
                <shoeSize>38</shoeSize>
                <shoeSize>39</shoeSize>
                <shoeSize>40</shoeSize>
                <shoeSize>41</shoeSize>
                <shoeSize>42</shoeSize>
                <shoeSize>43</shoeSize>
                <shoeSize>44</shoeSize>
            </ul>
        </div>

        <section class="mt-5">
            <div class="header flex justify-between items-center">
                <h1 class="font-bold text-lg uppercase">Destaques</h1>
                <a href="/" class="text-sm border-b-orange">Conferir tudo</a>
            </div>

            <swiper-container :slidesPerView="'1'" :centeredSlides="true" :pagination="{clickable: true,}" class="mySwiper pb-12">
                <swiper-slide v-for="shoe in slicedList" :key="shoe.id">
                    <card :shoe=shoe class="m-auto"/>
                </swiper-slide>
            </swiper-container>
        </section>
    </main>
</template>
