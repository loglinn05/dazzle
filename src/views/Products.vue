<template>
  <div class="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 xl:px-20 sm:px-12 px-7 py-32">
    <Sidebar v-model:visible="visible" pt:root:class="bg-violet-200">
      <template #container>
        <Filter v-model="filterValues" @filter="filter" />
      </template>
    </Sidebar>
    <div class="xl:hidden inline-grid col-span-4">
      <Button label="Filter" icon="pi pi-arrow-right" @click="visible = true" class="w-fit" />
    </div>
    <div class="xl:inline-grid hidden">
      <Filter v-model="filterValues" @filter="filter" />
    </div>
    <div class="xl:col-span-3 col-span-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      <ProductCard
        v-for="(product, index) in products"
        :key="`product-${index}`"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Filter from '@/components/page-components/products/Filter.vue'
import ProductCard from '@/components/global/ProductCard.vue'
import { useProductsStore } from '@/stores/productsStore'
import { storeToRefs } from 'pinia'

const visible = ref(false)

const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)

const filterValues = ref({
  types: [],
  sizes: [],
  price: [80, 120],
  manufacturers: [],
  colors: [],
  materials: [],
  seasons: []
})

function filter() {
  console.log(filterValues.value)
}
</script>
