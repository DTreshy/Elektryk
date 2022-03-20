<template>
    <div>
        <div 
        class="absolute top-0 left-0 h-full w-full z-20 bg-black opacity-50"
        :class="isOpen ? '' : 'hidden'"
        @click="isOpen = !isOpen"/>
        <aside
        class="transform left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
            <div class="w-full px-7 py-2 shadow-lg">
                <img src="/logo_name.svg" alt="Marcin Szczukowski logo" />
            </div>
            <nuxt-link
            v-for="item in items"
            :key="item"
            :to="item.url"
            @click="isOpen = !isOpen"
            class="text-primary-300 text-center w-full block py-3 font-bold text-lg">
                {{ item.text }}
            </nuxt-link>
        </aside>
    </div>
</template>

<script setup>
import { isDrawerOpen, menuItems } from '~~/compostables/states';

const isOpen = isDrawerOpen()
const items = menuItems

</script>