<template>
        <div class="img relative">
            <slot></slot>

            <div class="filter from-oranger from-5% to-50% z-1 w-full h-full z-1 absolute top-0" :class="[props.filter]">
            </div>

            <p class="absolute bottom-20 text-2xl text-white uppercase font-normal w-28" :class="[props.position]">
                {{ props.sex }}
            </p>
        </div>
</template>

<script setup lang=ts>

const props = defineProps<{
    sex: string
    position: string
    filter: string
}>() 

</script>

