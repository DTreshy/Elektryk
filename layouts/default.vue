<template>
  <div class=" lg:mx-24 mx-3">
      <nav class="lg:h-26 h-24 lg:px-8 py-4">
        <nuxt-link to="/" class=" inline-block my-auto">
          <img src="/logo_name.svg" alt="logo" class=" lg:w-64 w-40"/>
        </nuxt-link>
        <div to="" class="inline-block lg:p-4 py-2 lg:py-4 lg:text-xl text-sm text-primary-300 font-extrabold float-right">
            Zadzwoń 600 685 804
        </div>
        <nuxt-link to="kontakt" class=" group hidden float-right mr-20 my-auto">
          <div class=" p-4 text-xl text-primary-300 font-extrabold">
            Kontakt
          </div>
          <div class=" ml-3 -mt-4 h-0.5 w-0 group-
          
          hover:w-20 transition-all ease-in-out bg-primary-300 rounded-lg" />
        </nuxt-link>
      </nav>
    <slot />
  </div>
</template>