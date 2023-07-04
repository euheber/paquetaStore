<template>
<footer class="mt-10">
    <section class="bg-orange p-5">
        <div>
            <h1 class="font-bold text-md font-montserrat text-white uppercase">Seja o primeiro a receber nossas ofertas
                e novidades exclusivas</h1>
        </div>

        <form>
            <h1 class="text-xs text-white">Nos informe o seu e-mail e nome para o melhor atendimento!</h1>

            <label class="flex mt-3 gap-1 border-b border-white w-40">
                <img src="/icons/email.svg" alt="" class="w-4">
                <input type="text" class="input bg-orange text-xs p-2 outline-none text-white"
                    placeholder="seuemail@email.com">
            </label>

            <label class="flex mt-3 gap-1 border-b border-white w-40">
                <img src="/icons/user.svg" alt="" class="w-4">
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