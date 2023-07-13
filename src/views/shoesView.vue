<script setup lang="ts">
import { onMounted, ref } from 'vue';
import card from "@/components/shoe/card.vue"
import type { Mask } from '@/types/shopcart';

let shoes = ref<Mask[]>()

onMounted(async () => {
  window.scrollTo(0, 0);
  const api = await fetch("https://api.brchallenges.com/api/paqueta/shoes")
  const data = await api.json()

  shoes.value = data
})

</script>

<template>
  <main class="mt-20 max-w-5xl m-auto">
    <ul class="grid auto-cols-auto md:grid-cols-3 lg:grid-cols-4 pl-8 gap-2 justify-center items-center">
      <li v-for="shoe in shoes" :key="shoe.id">
        <card :shoe="shoe" />
      </li>
    </ul>
  </main>
</template>



