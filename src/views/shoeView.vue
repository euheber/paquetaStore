<script setup lang="ts">
import shoeSize from "@/components/shoe/shoeSize.vue"
import slotBtn from "@/components/slots/button.vue"
import card from "@/components/shoe/card.vue"
import {ref, onBeforeMount} from "vue";
import { useRoute } from "vue-router";
import { register } from "swiper/element";
import type { Mask } from "@/types/shoe"
import wishlist from "@/stores/wishlist";
import shoeModal from "@/components/shoe/shoeModal.vue"
import UserShopCart from "@/stores/shopcart"

const {insertShoe} = UserShopCart()

const child = ref<typeof shoeModal | null>(null);

const route = useRoute()
const { pushShoe } = wishlist()
const { checkIfShoeExists } = wishlist()


let shoe = ref<Mask>();
let shoeList = ref<Mask[]>()
let shoeExists = ref()

register()


onBeforeMount(async () => {
  window.scrollTo(0, 0);
  const id:string | string[] = route.params.id

  const data = await fetch(`https://api.brchallenges.com/api/paqueta/shoe/${id}`)
  const response = await data.json()

  shoe.value = response[0]

  const api = await fetch("https://api.brchallenges.com/api/paqueta/shoes")
  const shoes = await api.json()

  shoeList.value = shoes.slice(22)

  shoeExists.value = checkIfShoeExists(id.toString()).value
})


const wishlistShoe = (shoe: Mask) => shoeExists.value = pushShoe(shoe).value

const updateRoute = async () => {
  const id = route.params.id
  const data = await fetch(`https://api.brchallenges.com/api/paqueta/shoe/${id}`)
  const response = await data.json()
  shoeExists.value = checkIfShoeExists(id.toString()).value
  shoe.value = response[0]

}

const activeModal = () => {
  if(child.value != null){
    child.value.activeModal()
  } else {
    return
  }
}


let shoeSizes = ref<Number>(0)
const selectShoeSize = (size:number) => { 
  shoeSizes.value = size
}

const timesX = Math.floor(Math.random() * 15) + 3

</script>
<template>
  <main class="p-2 mt-5 relative max-w-5xl m-auto" v-if="shoe">
    <span class="text-sm">Paqueta</span> > <span class="border-b border-orange text-sm">{{ shoe.name }}</span>

    <section>
      <div class="img max-w-5xl m-auto flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-center">
        <div class="">

          <img :src="shoe.image" alt="" class="h-96">

          <div class="">
            <span class="text-sm">Compartilhe</span>
            <ul class=" flex gap-2">
              <li>
                <img src="/icons/instagram.svg" alt="ícone do instragram">
              </li>
              <li>
                <img src="/icons/facebook.svg" alt="ícone do facebook">
              </li>
              <li>
                <img src="/icons/twitter.svg" alt="ícone do twitter">
              </li>
              <li>
                <img src="/icons/youtube.svg" alt="ícone do youtube">
              </li>
              <li>
                <img src="/icons/pinterest.svg" alt="Ícone do pinterest">
              </li>
            </ul>
          </div>
        </div>
        <div class="comprar mt-5">
          <button>
            <i class="fa-regular fa-heart fa-xl text-orange"
              :class="[shoeExists ? 'fa-solid fa-heart' : 'fa-regular fa-heart']" @click="wishlistShoe(shoe)"></i>
          </button>

          <h1 class="font-montserrat text-xl font-bold">{{ shoe.name }}</h1>
          <span class="text-sm">Código do produto:</span> <span class="text-xs">{{ shoe.id }}</span>

          <div class="price mt-5">
            <div v-if="shoe.price.discount">
              <span class="text-md line-through mr-5" v-if="Number.isInteger(shoe.price.value)">R$ {{ shoe.price.value
              }}.00</span>
              <span class="text-md line-through mr-5" v-else>R$ {{ shoe.price.value }}</span>
              <p class="inline font-montserrat bg-success rounded-sm px-1">{{
                shoe.price.discount * 100 }}% <span class="uppercase font-montserrat font-bold text-sm">de desconto</span>
              </p>
              <p class="font-montserrat text-2xl font-bold uppercase mt-2">R$ {{
                (shoe.price.value - (shoe.price.value * shoe.price.discount)).toFixed(2) }}</p>

              <span class="text-shadeblack font-montserrat text-sm"> OU {{ timesX }}X de R$ {{
                ((shoe.price.value - (shoe.price.value * shoe.price.discount)) / timesX).toFixed(2) }}</span>
            </div>

            <div v-else>
              <p class="font-montserrat text-2xl font-bold uppercase mt-2" v-if="Number.isInteger(shoe.price.value)">R$ {{
                shoe.price.value }}.00</p>
              <p class="font-montserrat text-2xl font-bold uppercase mt-2" v-else>
                R$ {{ (shoe.price.value).toFixed(2) }}
              </p>
              <span class="text-shadeblack font-montserrat text-sm"> OU {{ timesX }}X de R$ {{ (shoe.price.value /
                timesX).toFixed(2) }}</span>
            </div>
          </div>

          <div class="size mt-3">
            <p class="font-montserrat text-sm text-shadeblack font-normal">Escolha a numeração:</p>

            <ul class="flex gap-2 mt-2">
                <shoeSize class="box border cursor-pointer hover:border-orange transition duration-200" @click="selectShoeSize(34)"  :class="[shoeSizes == 34 ? 'border border-orange' : 'border']">34</shoeSize>

                <shoeSize class="box border cursor-pointer hover:border-orange transition duration-200" @click="selectShoeSize(35)" :class="[shoeSizes == 35 ? 'border border-orange' : 'border']">35</shoeSize>

                <shoeSize class="box border cursor-pointer hover:border-orange transition duration-200" @click="selectShoeSize(36)" :class="[shoeSizes == 36 ? 'border border-orange' : 'border']">36</shoeSize>
          
                <shoeSize class="box border cursor-pointer hover:border-orange transition duration-200" @click="selectShoeSize(37)" :class="[shoeSizes == 37 ? 'border border-orange' : 'border']">37</shoeSize>
            
                <shoeSize class="box border cursor-pointer hover:border-orange transition duration-200" @click="selectShoeSize(38)" :class="[shoeSizes == 38 ? 'border border-orange' : 'border']">38</shoeSize>
          
                <shoeSize class="box border cursor-pointer hover:border-orange transition duration-200" @click="selectShoeSize(39)" :class="[shoeSizes == 39 ? 'border border-orange' : 'border']">39</shoeSize>
          
                <shoeSize class="box border cursor-pointer hover:border-orange transition duration-200" @click="selectShoeSize(40)" :class="[shoeSizes == 40 ? 'border border-orange' : 'border']">40</shoeSize>
            </ul>

            <button class="mt-5 hidden lg:block" @click="activeModal">Guia de tamanho</button>

            <slotBtn class="mt-5" v-if="!shoe.soldout" @click="insertShoe({...shoe, quantity: 1})">Adicionar ao carrinho</slotBtn>
            <slotBtn class="mt-5" v-else>Me avise quando chegar</slotBtn>
          </div>
        </div>
      </div>

      <div class="description mt-10">
        <h1 class="text-xl font-montserrat font-bold uppercase mt-5">Descrição do produto</h1>
        <p class="text-shadeblack text-md font-montserrat mt-3">
          {{ shoe.description }}
        </p>
      </div>
    </section>
  </main>

  <section class="max-w-5xl m-auto mt-5 px-2">
    <div class="header flex justify-between items-center">
      <h1 class="font-bold text-lg uppercase">Talvez possa lhe interessar</h1>
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
        <card :shoe=shoe class="m-auto" @click="updateRoute"/>
      </swiper-slide>
    </swiper-container>

  </section>

  <shoeModal ref="child" />
</template>

