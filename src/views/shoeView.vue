<script setup lang="ts">
import slotBtn from "@/components/slots/button.vue"
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import shoeSize from "@/components/shoe/shoeSize.vue"
import type { Mask } from "@/types/shoe"

let shoe = ref<Mask>();

onMounted(async () => {
  const param = useRoute().params.id
  const data = await fetch(`https://api.brchallenges.com/api/paqueta/shoe/${param}`)
  const response = await data.json()

  shoe.value = response[0]

})

const timesX = Math.floor(Math.random() * 15) + 3

</script>
<template>
  <main class="p-2 mt-5" v-if="shoe">
    <span class="text-sm">Paqueta</span> > <span class="border-b border-orange text-sm">{{ shoe.name }}</span>

    <section>
      <div class="img mt-8 w-80 m-auto flex flex-col gap-5">
        <div class="">
          <img :src="shoe.image" alt="">
          <div class="socials">
            <span class="text-sm">Compartilhe</span>
            <ul class=" flex gap-2 mt-2">
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
            <i class="fa-regular fa-heart fa-xl text-orange"></i>
          </button>

          <h1 class="font-montserrat text-xl font-bold">{{ shoe.name }}</h1>
          <span class="text-sm">Código do produto:</span> <span class="text-xs">{{ shoe.id }}</span>

          <div class="price mt-5">
            <div v-if="shoe.price.discount">
              <span class="text-md line-through mr-5" v-if="Number.isInteger(shoe.price.value)">R$ {{ shoe.price.value }}.00</span>
              <span class="text-md line-through mr-5" v-else>R$ {{ shoe.price.value }}</span>
              <p class="inline font-montserrat bg-success rounded-sm px-1">{{
                shoe.price.discount * 100 }}% <span class="uppercase font-montserrat font-bold text-sm">de desconto</span>
              </p>
              <p class="font-montserrat text-2xl font-bold uppercase mt-2">R$ {{
             (shoe.price.value-(shoe.price.value * shoe.price.discount)).toFixed(2)}}</p>
            
            <span class="text-shadeblack font-montserrat text-sm"> OU {{ timesX }}X de R$ {{ ((shoe.price.value-(shoe.price.value * shoe.price.discount)) / timesX).toFixed(2) }}</span>
            </div>

            <div v-else>
              <p class="font-montserrat text-2xl font-bold uppercase mt-2" v-if="Number.isInteger(shoe.price.value)">R$ {{
              shoe.price.value }},00</p>
            <p class="font-montserrat text-2xl font-bold uppercase mt-2" v-else="Number.isInteger(shoe.price.value)">
              R$ {{ (shoe.price.value).toFixed(2)}}
            </p>
            <span class="text-shadeblack font-montserrat text-sm"> OU {{ timesX }}X de R$ {{ (shoe.price.value  / timesX).toFixed(2) }}</span>
            </div>
          </div>

          <div class="size mt-3">
            <p class="font-montserrat text-sm text-shadeblack font-normal">Escolha a numeração:</p>

            <ul class="flex gap-2 mt-2">
              <li>
                <shoeSize>34</shoeSize>
              </li>
              <li>
                <shoeSize>35</shoeSize>
              </li>
              <li>
                <shoeSize>36</shoeSize>
              </li>
              <li>
                <shoeSize>37</shoeSize>
              </li>
              <li>
                <shoeSize>38</shoeSize>
              </li>
              <li>
                <shoeSize>39</shoeSize>
              </li>
              <li>
                <shoeSize>40</shoeSize>
              </li>
            </ul>

            <a href="" class="text-sm font-bold text-shadeblack mt-5 block">Guia de tamanhos</a>
            <slotBtn class="mt-5">Comprar</slotBtn>
          </div>
        </div>
      </div>

      <div class="description">
        <h1 class="text-xl font-montserrat font-bold uppercase mt-5">Descrição do produto</h1>  
        <p class="text-shadeblack text-md font-montserrat mt-3">
          {{ shoe.description }}
        </p>
      </div>
    </section>
  </main></template>

