<template>
  <navigation />

  <RouterView />
</template>

<script setup lang="ts">
import navigation from "./components/navigation.vue"
import { RouterView } from 'vue-router';
</script>

