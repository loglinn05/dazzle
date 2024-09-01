<template>
  <div class="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 xl:px-20 sm:px-12 px-7 py-32">
    <Filter v-if="!isEmptyObject(filterList)" v-model="filterValues" />
    <div v-else-if="isEmptyObject(filterList) && filterListLoading">
      <span class="pi pi-spin pi-spinner-dotted"></span>
    </div>
    <div v-else>
      <p class="text-violet-700 sm:text-lg text-base font-text">
        Error occured when loading filter list. Please, contact us at
        <a
          href="mailto:bugreport@dazzle.com"
          class="underline text-violet-700 hover:text-pink-500 transition-all duration-500"
        >
          bugreport@dazzle.com
        </a>
      </p>
    </div>
    <div
      class="xl:col-span-3 col-span-4 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 h-fit"
      v-if="products.length > 0"
    >
      <ProductCard
        v-for="(product, index) in products"
        :key="`product-${index}`"
        :product="product"
      />
    </div>
    <div v-else-if="products.length == 0 && productsLoading" class="col-span-3 justify-center">
      <span class="pi pi-spin pi-spinner-dotted"></span>
    </div>
    <div
      v-else-if="products.length == 0 && !productsLoading && !isEmptyObject(filterList)"
      class="col-span-3"
    >
      <p class="text-violet-700 sm:text-lg text-base font-text">
        There are no products in this category
      </p>
    </div>
    <div v-else class="col-span-3">
      <p class="text-violet-700 sm:text-lg text-base font-text">
        Error occured when loading products. Please, contact us at
        <a
          href="mailto:bugreport@dazzle.com"
          class="underline text-violet-700 hover:text-pink-500 transition-all duration-500"
        >
          bugreport@dazzle.com
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { provide, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Filter from '@/components/page-components/products/Filter.vue'
import ProductCard from '@/components/global/ProductCard.vue'
import { useProductsStore } from '@/stores/productsStore'
import { storeToRefs } from 'pinia'
import axios from 'axios'
import { isEmptyObject } from '@/helpers'

const filterListLoading = ref(false)
const filterList = ref({})

provide('filterList', filterList)

const filterValues = ref({
  types: [],
  sizes: [],
  price: [0, 0],
  manufacturers: [],
  colors: [],
  materials: [],
  seasons: []
})

const route = useRoute()

const productsStore = useProductsStore()
const { products, productsLoading } = storeToRefs(productsStore)
const { getProducts } = productsStore

function getFilterList() {
  filterListLoading.value = true
  axios
    .post(`${import.meta.env.VITE_API_BASE_URL}/get-filter-list/${route.query.subcategory_id}`, {
      filterValues: filterValues.value
    })
    .then((response) => {
      filterList.value = response.data
      filterValues.value.price[0] = filterList.value.price.min
      filterValues.value.price[1] = filterList.value.price.max
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      filterListLoading.value = false
    })
}

watch(
  route,
  (value) => {
    if (value.query.subcategory_id) {
      getFilterList()
      getProducts(value.query.subcategory_id)
    }
  },
  {
    immediate: true,
    deep: true
  }
)

watch(
  filterValues,
  () => {
    console.log('getFilterList')
    getFilterList()
  },
  {
    deep: true
  }
)
</script>
