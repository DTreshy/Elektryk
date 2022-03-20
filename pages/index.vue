<template>
    <div class="flex">
        <img src="/main_electric.svg" class=" main_picture" />
        <div class=" lg:w-5/12 mt-44 lg:mt-36 lg:ml-8 lg:pr-8">
            <div class="flex justify-center lg:justify-start">
                <div class="inline-block text-accent-300 font-lg">
                    24/7
                </div>
                <div class="inline-block lg:ml-6 ml-2 text-primary-300 font-lg">
                    Usługi
                </div>
            </div>
            <div class="text-primary-300 font-lg text-center lg:text-left">
                Elektryczne
            </div>
            <div class="text-primary-300 lg:mt-6 mt-3 lg:mb-12 mb-5 font-bold lg:text-2xl text-center lg:text-left">
                Szukasz dobrego Elektryka w Toruniu i okolicach, 
                który dzięki swojemu wieloletniemu doświadczeniu pomoże Ci w usunięciu usterek lub wykonaniu solidnej instalacji elektrycznej?
            </div>
            <div class=" justify-center lg:justify-start">
                <nuxt-link to="kontakt" class="lg:px-6 py-5 text-white bg-accent-300 hover:bg-accent-400 transition-all ease-in-out w-52 text-xl font-bold rounded-lg text-center">
                    KONTAKT
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.font-lg{
    @apply lg:text-8xl text-5xl font-extrabold;
}
</style>