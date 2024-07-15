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
        class="flex items-center"
        v-bind="props.action"
      >
        <span v-if="item.icon" :class="item.label ? `${item.icon} mr-2` : `${item.icon} py-1`" />
        <span v-if="item.label">{{ item.label }}</span>
        <Badge
          v-if="item.badge"
          class="flex justify-center items-center ml-0.5 min-w-4 h-4 text-xs"
          :value="item.badge < 100 ? item.badge : '99+'"
        />
        <i
          v-if="hasSubmenu"
          :class="[
            'pi pi-angle-down text-primary',
            {
              'pi-angle-down ml-2': root,
              'pi-angle-right ml-auto': !root
            }
          ]"
        ></i>
      </component>
    </template>
  </Menubar>
</template>

<script setup>
import { ref } from 'vue'

import Menubar from 'primevue/menubar'
import Badge from 'primevue/badge'

const items = ref([
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
    items: [
      {
        label: 'Clothes',
        items: [
          {
            label: "Men's clothes",
            route: '/products'
          },
          {
            label: "Women's clothes",
            route: '/products'
          }
        ]
      },
      {
        label: 'Shoes',
        items: [
          {
            label: "Men's shoes",
            route: '/products'
          },
          {
            label: "Women's shoes",
            route: '/products'
          }
        ]
      },
      {
        label: 'Accessories',
        route: '/products'
      }
    ]
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
    icon: 'pi pi-shopping-bag',
    badge: '3'
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
