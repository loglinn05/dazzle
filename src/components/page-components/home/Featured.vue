<template>
  <div>
    <h2 class="text-3xl sm:text-4xl text-pink-700 font-header mb-10">Featured items</h2>
    <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      <ProductCard
        v-for="featuredProduct in featuredProducts"
        :product="featuredProduct"
        :key="featuredProduct.id"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProductsStore } from '../../../stores/productsStore.js'
import { storeToRefs } from 'pinia'

const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)

const featuredProducts = ref()
featuredProducts.value = products.value.filter((product) => {
  return product.featured == true
})
</script>
