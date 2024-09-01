<template>
  <Toast
    :pt="{
      root: { class: 'max-w-full !top-0 !right-0' },
      container: { class: 'm-3' },
      content: {
        class: 'flex justify-between items-center'
      },
      buttonContainer: { class: 'flex justify-center items-center' },
      button: { class: 'm-0 p-0' }
    }"
  >
    <template #message="slotProps">
      <p>{{ slotProps.message.summary }}</p>
    </template>
  </Toast>
  <Header />
  <CartSidebar />
  <router-view v-slot="{ Component }">
    <Suspense>
      <template #default>
        <component :is="Component" :key="$route.path" />
      </template>
      <template #fallback> Loading data... </template>
    </Suspense>
  </router-view>
  <Footer />
</template>

<script setup>
import Toast from 'primevue/toast'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import CartSidebar from './components/CartSidebar.vue'
</script>
