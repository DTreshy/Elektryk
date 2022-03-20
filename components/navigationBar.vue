<template>
    <nav class="flex justify-between py-2">
        <div
        class="space-y-1 lg:hidden pt-3 px-2"
        @click="isOpen = !isOpen">
            <div 
            v-for="n in 3" 
            :key="n" 
            class="w-5 h-0.5 bg-primary-300"/>
        </div>
        <nuxt-link to="/" class=" inline-block my-auto">
          <img src="/logo_name.svg" alt="logo" class=" lg:w-64 w-40"/>
        </nuxt-link>
        <nuxt-link 
        v-for="item in items" 
        :key="item" 
        :to="item.url" 
        class=" group hidden lg:inline-block float-right mr-20">
          <div class=" p-4 text-xl text-primary-300 font-extrabold">
            {{ item.text }}
          </div>
          <div class=" ml-3 -mt-4 h-0.5 w-0 group-hover:w-20 transition-all ease-in-out bg-primary-300 rounded-lg" />
        </nuxt-link>
        <span class="w-8 lg:hidden"/>
      </nav>
</template>

<script setup>
import { isDrawerOpen, menuItems } from '~~/compostables/states';

const isOpen = isDrawerOpen()
const items = menuItems

</script>