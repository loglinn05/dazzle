<template>
  <div class="flex flex-col border border-solid border-slate-200 bg-fuchsia-100 rounded-lg h-full">
    <img :src="product.images[0]" class="rounded-t-lg max-w-full" />
    <div class="flex flex-col justify-between p-3 grow">
      <h3
        class="text-pink-700 font-text text-lg sm:text-xl overflow-hidden whitespace-nowrap text-ellipsis mb-5 align-baseline"
      >
        {{ product.title }}
      </h3>
      <div class="flex flex-col justify-between items-center">
        <div
          class="mt-0 font-semibold text-pink-700 text-lg sm:text-xl font-text mb-2 [1100px]:mb-0"
        >
          <span class="line-through me-2">${{ product.oldPrice.toFixed(2) }}</span>
          ${{ product.price.toFixed(2) }}
        </div>
        <span>
          <Button icon="pi pi-eye" severity="help" class="me-2" outlined />
          <Button icon="pi pi-heart" class="me-2" severity="danger" outlined />
          <Button
            :icon="findItemInCart(product.id) < 0 ? 'pi pi-shopping-cart' : 'pi pi-check'"
            @click="addToCart(product)"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'

defineProps({
  product: Object
})

const cartStore = useCartStore()
const { addToCart, findItemInCart } = cartStore
</script>
