<template>
  <div class="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 xl:px-20 sm:px-12 px-7 py-32">
    <Filter v-model="filterValues" />
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

const filterList = ref({})

provide('filterList', {
  types: [
    { id: 1, title: 'Sunglasses' },
    { id: 2, title: 'Bracelets' },
    { id: 3, title: 'Bijouterie' }
  ],
  sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
  price: {
    min: 50,
    max: 900
  },
  manufacturers: ['Zara', "Collin's", 'Basconi', 'Calvin Klein', 'Gem', 'Geox', 'Sasha Fabiani'],
  colors: [
    '#cdb4db',
    '#ffc8dd',
    '#ffafcc',
    '#bde0fe',
    '#a2d2ff',
    '#ffbe0b',
    '#fb5607',
    '#ff006e',
    '#8338ec',
    '#3a86ff',
    '#0081a7',
    '#00afb9',
    '#fed9b7',
    '#f07167',
    '#231942',
    '#e0b1cb',
    '#9f86c0',
    '#f28482',
    '#ba181b',
    '#0b090a',
    '#b1a7a6',
    '#ffffff',
    '#9b2226',
    '#f48c06',
    '#06d6a0',
    '#fb6f92',
    '#ef476f',
    '#073b4c',
    '#fcd0a1',
    '#b1b695',
    '#a690a4',
    '#5e4b56',
    '#afd2e9',
    '#23c9ff',
    '#7cc6fe',
    '#ccd5ff',
    '#e7bbe3',
    '#c884a6',
    '#f4fec1',
    '#d9f9a5',
    '#d2d68d',
    '#68534d',
    '#fbba72',
    '#ca5310',
    '#aa3e98',
    '#9368b7',
    '#9297c4',
    '#84c7d0',
    '#75dddd',
    '#c1cefe',
    '#a0ddff',
    '#758ecd',
    '#624cab',
    '#9bc995',
    '#98b9ab',
    '#5171a5',
    '#3f3047',
    '#eef36a',
    '#998fc7',
    '#14248a',
    '#4ecdc4',
    '#23ce6b',
    '#07393c',
    '#2c666e',
    '#90ddf0',
    '#700548',
    '#7272ab',
    '#ceb992',
    '#471323',
    '#c1dbe3',
    '#c7dfc5',
    '#f6feaa',
    '#fce694',
    '#948d9b',
    '#b279a7',
    '#e899dc',
    '#fec9f1',
    '#c20114',
    '#c7d6d5',
    '#ecebf3',
    '#6d7275',
    '#0c120c',
    '#f79f79',
    '#f7d08a',
    '#5b5941',
    '#f991cc',
    '#e2e1b9',
    '#587b7f',
    '#394032',
    '#8dab7f',
    '#41e2ba',
    '#2b2d42',
    '#e86a92',
    '#f7e733',
    '#af3e4d',
    '#f45866',
    '#c45ab3',
    '#a2666f',
    '#f49390',
    '#631a86',
    '#fb6107',
    '#7cb518',
    '#5c8001',
    '#fbb02d',
    '#118ab2',
    '#05204a',
    '#a24936',
    '#0d3b66',
    '#ff2ecc'
  ],
  materials: [
    'Cotton',
    'Wool',
    'Velvet',
    'Linen',
    'Polyester',
    'Chiffon',
    'Silk',
    'Spandex',
    'Denim',
    'Satin',
    'Natural fur',
    'Artificial fur'
  ],
  seasons: ['All', 'Winter', 'Spring & Autumn', 'Summer']
})

const filterValues = ref({
  types: [],
  sizes: [],
  price: [],
  manufacturers: [],
  colors: [],
  materials: [],
  seasons: []
})

const route = useRoute()

const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)
const { getProducts } = productsStore

function getFilterList() {
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
    getFilterList()
  },
  {
    deep: true
  }
)
</script>
