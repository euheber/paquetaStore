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
    <main class="p-2">
        <div class="shoes mt-10">
            <div class="shoe flex flex-col gap-2 justify-center items-center p-2">
                <images sex="Calçados femininos" position="left-10" filter="bg-gradient-to-r ">
                    <img src="/images/calcados-femininos.png" alt="Calçado Feminino">
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
                    <img src="/images/calcados-masculinos.png" alt="">
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
                    <img src="/images/logo.png" alt="PaquetáStore" class="w-32">
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
                <a href="/" class="text-sm border-b-orange border-b">Conferir tudo</a>
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

        <section class="">
            <h1 class="font-montserrat text-xl font-bold text-center">As melhores marcas estão aqui</h1>

            <div class="flex flex-wrap justify-between items-baseline mt-5">
                <img src="/icons/adidas.svg" alt="" class="w-16">
                <img src="/icons/viamarte.svg" alt="" class="w-24">
                <img src="/icons/bebece.svg" alt="" class="w-20">
                <img src="/icons/dumond.svg" alt="" class="w-24">
            </div>
        </section>
    </main>


    <footer class="mt-10">
        <section class="bg-orange p-5">
            <div>
                <h1 class="font-bold text-md font-montserrat text-white uppercase">Seja o primeiro a receber nossas ofertas
                    e novidades exclusivas</h1>
            </div>

            <form>
                <h1 class="text-xs text-white">Nos informe o seu e-mail e nome para o melhor atendimento!</h1>

                <label class="flex mt-3 gap-1 border-b border-white w-40">
                    <img src="icons/email.svg" alt="" class="w-4">
                    <input type="text" class="input bg-orange text-xs p-2 outline-none text-white"
                        placeholder="seuemail@email.com">
                </label>

                <label class="flex mt-3 gap-1 border-b border-white w-40">
                    <img src="icons/user.svg" alt="" class="w-4">
                    <input type="text" class="input bg-orange text-xs p-2 outline-none text-white" placeholder="Seu nome">
                </label>

                <div class="flex items-center gap-1 mt-4">
                    <span class="mr-3 text-white font-montserrat text-sm">Tenho interesse em:</span>
                    <input type="checkbox"> <span class="text-white text-sm">Homens</span>
                    <input type="checkbox" class="ml-3"> <span class="text-white text-sm">Mulheres</span>
                </div>

                <buttonSlot class="text-white font-poppins mt-5 font-normal">Quero receber</buttonSlot>
            </form>
        </section>

        <section class="bg-white p-5 max-w-xs">
            <div class="contact">
                <h1 class="font-bold text-lg">Atendimento</h1>
                <a href="/" class="text-xs text-shadeblack">Façe conosco</a>

                <h1 class="font-bold mt-5 text-lg">Endereço</h1>
                <a href="/" class="text-xs text-shadeblack">Rua Antonio Frederico Ozanan, 2601 Canoas - RS | CNPJ:
                    01.098.983/0175-02</a>

                <h1 class="font-bold mt-5 text-lg">Trabalhe conosco</h1>
                <a href="/" class="text-xs text-shadeblack">Venha crescer com a Paquetá!</a>
            </div>
        </section>

        <section class="bg-white p-5 max-w-xs">
            <h1 class="text-lg font-bold">Formas de pagamento</h1>

            <div class="grid grid-cols-3 gap-5 mt-5 justify-center items-center">
                <img src="/icons/mastercard.svg" alt="Bandeira Mastercard">
                <img src="/icons/americanexpress.svg" alt="Bandeira American Express">
                <img src="/icons/elo.svg" alt="Bandeira Elo">
                <img src="/icons/paqueta.svg" alt="Bandeira Paqueta">
                <img src="/icons/gaston.svg" alt="Bandeira Gaston">
                <img src="/icons/visa.png" alt="Bandeira Visa">
                <img src="/icons/hipercard.png" alt="Bandeira Hipercard">
                <img src="/icons/itau.png" alt="Bandeira Itau">
                <img src="/icons/boleto.svg" alt="Bandeira boleto bancário">
            </div>

            <h1 class="text-lg font-bold mt-4">Redes sociais</h1>

            <div class="flex gap-2 mt-2">
                <img src="/icons/instagram.svg" alt="Bandeira">
                <img src="/icons/facebook.svg" alt="Bandeira">
                <img src="/icons/twitter.svg" alt="Bandeira">
                <img src="/icons/youtube.svg" alt="Bandeira">
                <img src="/icons/pinterest.svg" alt="Bandeira">
            </div>
        </section>

        <section class="p-5 max-w-xs">
            <h1 class="font-bold text-lg">Premios e certificações</h1>

            <img src="/icons/certificate.png" alt="Certificado de segurança" class="mt-5">
            <img src="/icons/blindado.svg" alt="Bandeira" class="mt-5">
        </section>

        <section class="bg-shadeblack p-3">
            <div class="flex items-center justify-center gap-3 max-w-3xl">
                <h1 class="uppercase text-white font-bold text-sm">uma empresa do grupo</h1>
                <img src="/icons/company.png" alt="Bandeira" class="w-40">
            </div>
        </section>
    </footer>
</template>
