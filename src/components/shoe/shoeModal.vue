<script setup lang="ts">
import { onClickOutside } from "@vueuse/core"
import { ref } from "vue";

let modalRef = ref()
let modal = ref(false)

onClickOutside(modalRef, (e) => {
    activeModal()
})

const activeModal = (): void => {
    const body = document.querySelector("body") as HTMLBodyElement
    modal.value = !modal.value

    if (modal.value) {
        body.style.overflow = 'hidden'
        window.scrollTo(0, 0);
    } else {
        body.style.overflow = 'scroll'
    }
}

defineExpose({
    activeModal
})
</script>


<template>
    <div class="hidden absolute w-screen h-screen top-0 bottom-0 rounded-md lg:flex justify-center items-center bg-transparent" v-if="modal">
        <div class="bg-white w-[550px] h-fit rounded-md flex"  ref="modalRef">
            <div class="w-[250px] p-2">
                <h1 class="font-montserrat font-bold text-md text-orange uppercase">Guia de tamanhos</h1>

                <ul>
                    <li class="text-xs p-1 mr-1">
                        <span class="w-4 text-center text-white inline-block rounded-lg bg-orange mr-1">1</span>
                        Fique de pé em cima de uma folha de papel.
                    </li>
                    <li class="text-xs p-1 mr-1">
                        <span class="w-4 text-center text-white inline-block rounded-lg bg-orange">2</span>
                        Faça um risco no seu calcanhar e outro na frente do seu dedão.
                    </li>
                    <li class="text-xs p-1 mr-1">
                        <span class="w-4 text-center text-white inline-block rounded-lg bg-orange">3</span>
                        Agora é só medir o comprimento entre essas duas linhas e pronto!.
                    </li>
                </ul>

                <img src="/icons/foot.svg" alt="Icone do pé" class="w-24 mt-5 mx-auto">
            </div>

            <div class="p-2">
                <i class="fa-solid fa-xmark ml-64 text-lg cursor-pointer" @click="activeModal"></i>
                <table>
                    <tr>
                        <th class="text-sm font-montserrat text-shadeblack">Número do calçado</th>
                        <th class="text-sm font-montserrat text-shadeblack">Comprimento do pé</th>
                    </tr>
                    <tr class="border-b border-shadeblack text-center">
                        <td class="font-montserrat font-bold">33</td>
                        <td class="font-montserrat">21,6 - 22,2 cm</td>
                    </tr>
                    <tr class="border-b border-shadeblack text-center">
                        <td class="font-montserrat font-bold">34</td>
                        <td class="font-montserrat">22,3 - 22,9 cm</td>
                    </tr>
                    <tr class="border-b border-shadeblack text-center">
                        <td class="font-montserrat font-bold">35</td>
                        <td class="font-montserrat">23,0 - 23,6 cm</td>
                    </tr>
                    <tr class="border-b border-shadeblack text-center">
                        <td class="font-montserrat font-bold">36</td>
                        <td class="font-montserrat">23,7 - 24,2 cm</td>
                    </tr>
                    <tr class="border-b border-shadeblack text-center">
                        <td class="font-montserrat font-bold">37</td>
                        <td class="font-montserrat">24,3 - 24,8 cm</td>
                    </tr>
                    <tr class="border-b border-shadeblack text-center">
                        <td class="font-montserrat font-bold">38</td>
                        <td class="font-montserrat">24,9 - 25,5 cm</td>
                    </tr>
                    <tr class="border-b border-shadeblack text-center">
                        <td class="font-montserrat font-bold">39</td>
                        <td class="font-montserrat">25,6 - 26,2 cm</td>
                    </tr>
                    <tr class="border-b border-shadeblack text-center">
                        <td class="font-montserrat font-bold">40</td>
                        <td class="font-montserrat">26,3 - 26,8 cm</td>
                    </tr>
                    <tr class="border-b border-shadeblack text-center">
                        <td class="font-montserrat font-bold">41</td>
                        <td class="font-montserrat">26,9 - 27,5 cm</td>
                    </tr>
                    <tr class="border-b border-shadeblack text-center">
                        <td class="font-montserrat font-bold">42</td>
                        <td class="font-montserrat">27,6 - 28,2 cm</td>
                    </tr>
                    <tr class="border-b border-shadeblack text-center">
                        <td class="font-montserrat font-bold">43</td>
                        <td class="font-montserrat">28,3 - 28,7 cm</td>
                    </tr>
                    <tr class="border-b border-shadeblack text-center">
                        <td class="font-montserrat font-bold">44</td>
                        <td class="font-montserrat">28,8 - 29,4 cm</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>


