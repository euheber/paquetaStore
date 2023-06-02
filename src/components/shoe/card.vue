<script lang=ts setup>
import buttonVue from '../slots/button.vue';
</script>

<template>
  <div class="flex flex-col items-center justify-center border-shadeblack shadow-shadeblack shadow-2xl rounded-md mt-5 w-52 py-3">
    <div class="w-40 flex flex-col justify-center items-center">
        <img src="" alt="teste" class="h-28 w-36 mb-6">
        <p class="text-xs text-shadeblack mb-3">SCARPIN VIZZANO VERDE SALTO ALTO</p>
        <span class="block font-bold text-sm text-shadeblack mr-auto">
            R$ 149,99
        </span>
        <span class="text-xs mr-auto mb-3">
            OU 9X R$ 16,66
        </span>
        <buttonVue class="mr-auto">
            Comprar
        </buttonVue>
    </div>
  </div>
</template>

