<script setup>
import { ref } from "vue";

import Menubar from "primevue/menubar"

const items = ref([
  {
    label: 'Home'
  },
  {
    label: 'About Us'
  },
  {
    label: 'Products',
    items: [
      {
        label: 'Clothes',
        items: [
          {
            label: 'Men\'s clothes',
          },
          {
            label: 'Women\'s clothes',
          }
        ]
      },
      {
        label: 'Shoes',
        items: [
          {
            label: 'Men\'s shoes',
          },
          {
            label: 'Women\'s shoes',
          }
        ]
      },
      {
        label: 'Accessories'
      }
    ]
  },
  {
    label: 'Cart',
    right: true
  }
]);
</script>

<template>
  <Menubar :model="items" :pt="{root: {class: 'bg-transparent'}, rootList: {class:'w-full'}}">
    <template #start>
      <img src="../../assets/img/icon.png" alt="Logo" class="w-14 me-3">
    </template>
  </Menubar>
</template>