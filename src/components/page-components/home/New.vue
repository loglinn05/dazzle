<template>
  <div>
    <h2 class="sm:text-4xl text-3xl text-pink-700 font-header mb-10">New items</h2>
    <Carousel
      :value="newProducts"
      :num-visible="4"
      :num-scroll="1"
      :responsive-options="responsiveOptions"
      circular
      :autoplay-interval="3000"
      :show-navigators="!isMobile"
      :show-indicators="!isMobile"
      pt:item:class="px-2 min-w-0"
      pt:itemCloned:class="px-2 min-w-0"
      pt:indicators:class="mt-2"
    >
      <template #item="slotProps">
        <ProductCard :product="slotProps.data" />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Carousel from 'primevue/carousel'
import { useMediaQuery } from '../../../modules/useMediaQuery.js'
import { useProductsStore } from '../../../stores/productsStore.js'
import { storeToRefs } from 'pinia'

const { isMobile } = useMediaQuery()

const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)

const newProducts = ref()
newProducts.value = products.value.filter((product) => {
  return product.new == true
})

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '960px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '576px',
    numVisible: 1,
    numScroll: 1
  }
])
</script>
