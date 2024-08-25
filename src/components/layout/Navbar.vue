<template>
  <Menubar :model="items" :pt="passThrough">
    <template #start>
      <h1 class="font-logo text-4xl sm:text-5xl text-pink-600">Dazzle</h1>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <component
        :is="item.route ? 'router-link' : 'a'"
        v-ripple
        :to="item.route ?? null"
        class="relative flex justify-between items-center"
        v-bind="props.action"
        v-on="item.events ? item.events : {}"
      >
        <component :is="item.badge != undefined ? 'SlideTopTransition' : 'Fragment'">
          <span
            key="menubar-item-piece-1"
            v-if="item.icon"
            :class="item.label ? `${item.icon} mr-2` : `${item.icon} py-1`"
          />
          <span key="menubar-item-piece-2" v-if="item.label">{{ item.label }}</span>
          <Badge
            key="menubar-item-piece-3"
            v-if="item.badge"
            class="absolute top-0.5 right-0.5 flex justify-center items-center ml-0.5 min-w-4 h-4 text-xs px-1"
          >
            <FadeTransition>
              <span :key="item.badge">{{ item.badge }}</span>
            </FadeTransition>
          </Badge>
          <i
            key="menubar-item-piece-4"
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down text-primary',
              {
                'pi-angle-down ml-2': root,
                'pi-angle-right': !root
              }
            ]"
          ></i>
        </component>
      </component>
    </template>
  </Menubar>
</template>

<script setup>
import FadeTransition from '../global/transitions/FadeTransition.vue'
import { computed, onBeforeMount, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore)
const { showCartSidebar } = cartStore

import Menubar from 'primevue/menubar'
import Badge from 'primevue/badge'
import axios from 'axios'

const productMenu = ref([])

onBeforeMount(() => {
  axios
    .get(`${import.meta.env.VITE_API_BASE_URL}/get-menu`)
    .then((response) => {
      productMenu.value = response.data
    })
    .catch((error) => {
      console.error(error)
    })
})

const items = computed(() => [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About Us',
    route: '/about'
  },
  {
    label: 'Products',
    items: productMenu.value
  },
  {
    label: 'Account',
    icon: 'pi pi-user',
    items: [
      {
        label: 'Log In',
        route: '/log-in'
      },
      {
        label: 'Sign Up',
        route: '/sign-up'
      },
      {
        separator: true
      },
      {
        label: 'Profile',
        route: '/profile'
      }
    ]
  },
  {
    label: '',
    icon: 'pi pi-heart'
  },
  {
    label: '',
    icon: 'pi pi-shopping-cart',
    badge: cart.value.length,
    events: {
      click: showCartSidebar
    }
  }
])

const passThrough = {
  root: {
    class:
      'fixed top-0 left-0 right-0 flex justify-between lg:justify-center my-0 py-1 px-3 bg-violet-100 rounded-none font-text text-base sm:text-lg z-[100]'
  },
  start: {
    class: 'me-3'
  },
  menu: {
    class: 'w-full max-w-screen-2xl bg-violet-100'
  },
  submenu: {
    class: 'bg-violet-100'
  },
  menuitem: {
    class: ['my-[2px] mx-0', '[&:nth-last-child(3)]:ms-auto']
  },
  icon: {
    class: 'm-0'
  },
  separator: {
    class: 'border-t-gray-300 hidden lg:block'
  }
}
</script>
