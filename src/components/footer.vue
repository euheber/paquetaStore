<script setup lang="ts">
import buttonSlot from "@/components/slots/button.vue"

</script>

<template>
    <footer class="mt-10 ">
        <section class="bg-orange">
            <div class="max-w-5xl p-5 md:flex m-auto lg:justify-between md:items-center">
                <div class="max-w-[350px] leading-10 lg:text-left">
                    <h1 class="font-bold text-md font-montserrat text-white uppercase lg:text-2xl">Seja o primeiro a receber
                        nossas ofertas
                        e novidades exclusivas</h1>
                </div>

                <form class="">
                    <h1 class="text-xs text-white">Nos informe o seu e-mail e nome para o melhor atendimento!</h1>

                    <div class="md:flex gap-5">
                        <label class="flex mt-3 gap-1 border-b border-white w-40">
                            <img src="/icons/email.svg" alt="" class="w-4">
                            <input type="text" class="input bg-orange text-xs p-2 outline-none text-white"
                                placeholder="seuemail@email.com">
                        </label>

                        <label class="flex mt-3 gap-1 border-b border-white w-40">
                            <img src="/icons/user.svg" alt="" class="w-4">
                            <input type="text" class="input bg-orange text-xs p-2 outline-none text-white"
                                placeholder="Seu nome">
                        </label>
                    </div>

                    <div class="flex items-center gap-1 mt-4">
                        <span class="mr-3 text-white font-montserrat text-sm">Tenho interesse em:</span>
                        <input type="checkbox"> <span class="text-white text-sm">Homens</span>
                        <input type="checkbox" class="ml-3"> <span class="text-white text-sm">Mulheres</span>
                    </div>

                    <buttonSlot class="text-white font-poppins mt-5 font-normal hover:text-shadeblack transition duration-500">Quero receber</buttonSlot>
                </form>
            </div>
        </section>

        <section class="max-w-5xl m-auto md:flex">
       
            <div class="bg-white p-5 max-w-xs">
                <h1 class="font-bold text-lg font-montserrat">Institucional</h1>
                <ul class="mt-5 space-y-2">
                    <li class="text-shadeblack text-sm hover:text-orange transition duration-500 cursor-pointer">Quem somos</li>
                    <li class="text-shadeblack text-sm hover:text-orange transition duration-500 cursor-pointer">Nossas lojas</li>
                    <li class="text-shadeblack text-sm hover:text-orange transition duration-500 cursor-pointer">Soluções corporativas</li>
                    <li class="text-shadeblack text-sm hover:text-orange transition duration-500 cursor-pointer">Politica de privacidade</li>
                    <li class="text-shadeblack text-sm hover:text-orange transition duration-500 cursor-pointer">Contrato de compra e venda</li>
                    <li class="text-shadeblack text-sm hover:text-orange transition duration-500 cursor-pointer">Crédito Pessoal</li>
                </ul>
            </div>

            <div class="bg-white p-5 max-w-xs">
                <h1 class="font-bold text-lg font-montserrat">Ajuda e suporte</h1>
                <ul class="mt-5 space-y-2">
                    <li class="text-shadeblack text-sm hover:text-orange transition duration-500 cursor-pointer">Troca e devolução</li>
                    <li class="text-shadeblack text-sm hover:text-orange transition duration-500 cursor-pointer">2ª Via do Boleto</li>
                    <li class="text-shadeblack text-sm hover:text-orange transition duration-500 cursor-pointer">Detalhamento de Fatura</li>
                    <li class="text-shadeblack text-sm hover:text-orange transition duration-500 cursor-pointer">Entregas</li>
                    <li class="text-shadeblack text-sm hover:text-orange transition duration-500 cursor-pointer">Meus Pedidos</li>
                    <li class="text-shadeblack text-sm hover:text-orange transition duration-500 cursor-pointer">Dúvidas Frequentes</li>
                    <li class="text-shadeblack text-sm hover:text-orange transition duration-500 cursor-pointer">Status do Pedido</li>
                </ul>
            </div>

            <div class="bg-white p-5 max-w-xs">
                <div class="contact">
                    <h1 class="font-bold text-lg font-montserrat">Atendimento</h1>
                    <a href="/" class="text-xs text-shadeblack hover:text-orange transition duration-500 cursor-pointer">Fale conosco</a>

                    <h1 class="font-bold mt-5 text-lg font-montserrat">Endereço</h1>
                    <p  class="text-xs text-shadeblack ">Rua Antonio Frederico Ozanan, 2601 Canoas - RS | CNPJ:
                        01.098.983/0175-02</p>

                    <h1 class="font-bold mt-5 text-lg font-montserrat">Trabalhe conosco</h1>
                    <a href="/" class="text-xs text-shadeblack hover:text-orange transition duration-500 cursor-pointer">Venha crescer com a Paquetá!</a>
                </div>
            </div>

            <div class="bg-white p-5 max-w-xs">
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
            </div>

            <div class="p-5 max-w-xs">
                <h1 class="font-bold text-lg">Premios e certificações</h1>

                <img src="/icons/certificate.png" alt="Certificado de segurança" class="mt-5">
                <img src="/icons/blindado.svg" alt="Bandeira" class="mt-5">
            </div>


        </section>
        <div class="bg-shadeblack p-3">
            <div class="flex items-center justify-center gap-3 max-w-3xl m-auto">
                <h1 class="uppercase text-white font-bold text-sm">uma empresa do grupo</h1>
                <img src="/icons/company.png" alt="Bandeira" class="w-40">
            </div>
        </div>
    </footer>
</template>