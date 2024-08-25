<template>
  <Sidebar
    v-model:visible="cartSidebarVisible"
    pt:root:class="bg-violet-200 overflow-x-hidden overflow-y-auto"
    position="right"
    dismissable
    blockScroll
  >
    <template #container>
      <div v-touch:swipe.right="hideCartSidebar" class="min-h-full flex flex-col justify-between">
        <FadeTransition>
          <ListTransition tag="div" v-if="cart.length > 0" class="grid gap-y-3 p-3">
            <div
              v-for="item in cart"
              :key="item.product.id"
              class="grid grid-rows-2 grid-cols-4 gap-3"
            >
              <img :src="item.product.images[0]" class="row-span-2" />
              <div class="col-span-2 flex items-end">
                <p
                  class="text-violet-700 sm:text-lg text-base font-text overflow-hidden whitespace-nowrap text-ellipsis"
                >
                  {{ item.product.title }}
                </p>
              </div>
              <div class="row-span-2 flex justify-end items-center">
                <Button
                  icon="pi pi-times"
                  severity="danger"
                  class="w-12 h-12"
                  @click="deleteFromCart(item.product.id)"
                />
              </div>
              <p class="flex items-start">${{ item.product.price.toFixed(2) }}</p>
              <p class="flex justify-end items-start">&times;{{ item.qty }}</p>
            </div>
          </ListTransition>
          <div v-else class="p-3">
            <p class="text-violet-700 sm:text-lg text-base font-text">Your cart is empty.</p>
          </div>
        </FadeTransition>
        <FadeTransition>
          <div
            v-if="cart.length > 0"
            class="sticky bottom-0 w-full flex justify-around bg-violet-200 p-3"
          >
            <Button label="Cart" @click="$router.push('/cart')" />
            <Button label="Checkout" severity="secondary" @click="$router.push('/checkout')" />
          </div>
        </FadeTransition>
      </div>
    </template>
  </Sidebar>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cartStore'
import FadeTransition from './global/transitions/FadeTransition.vue'

const cartStore = useCartStore()
const { cartSidebarVisible, cart } = storeToRefs(cartStore)
const { hideCartSidebar, deleteFromCart } = cartStore
</script>
