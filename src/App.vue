<template>
  <navigation />
  
  <RouterView />
  <footerComponent />
</template>

<script setup lang="ts">
import navigation from "@/components/navigation.vue"
import footerComponent from "@/components/footer.vue"
import { RouterView } from 'vue-router';
</script>

