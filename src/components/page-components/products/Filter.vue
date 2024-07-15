<template>
  <div class="flex flex-col gap-12">
    <div>
      <h3 class="sm:text-3xl text-2xl text-pink-700 font-header mb-3">Type</h3>
      <div class="flex flex-col gap-2">
        <div v-for="(type, index) of filterList.types" :key="index" class="flex items-center">
          <Checkbox
            v-model="model.types"
            :inputId="`type-${index}`"
            name="types"
            :value="type"
            class="me-2"
          />
          <label :for="`type-${index}`" class="text-violet-700 sm:text-lg text-base font-text">
            {{ type }}
          </label>
        </div>
      </div>
    </div>
    <div>
      <h3 class="sm:text-3xl text-2xl text-pink-700 font-header mb-3">Size</h3>
      <div class="flex flex-col gap-2">
        <div v-for="(size, index) of filterList.sizes" :key="index" class="flex items-center">
          <Checkbox
            v-model="model.sizes"
            :inputId="`size-${index}`"
            name="sizes"
            :value="size"
            class="me-2"
          />
          <label :for="`size-${index}`" class="text-violet-700 sm:text-lg text-base font-text">
            {{ size }}
          </label>
        </div>
      </div>
    </div>
    <div>
      <h3 class="sm:text-3xl text-2xl text-pink-700 font-header mb-3">Price</h3>
      <PriceSlider :listPrice="filterList.price" v-model="model.price" />
    </div>
    <div>
      <h3 class="sm:text-3xl text-2xl text-pink-700 font-header mb-3">Manufacturer</h3>
      <div class="flex flex-col gap-2">
        <div
          v-for="(manufacturer, index) of filterList.manufacturers"
          :key="index"
          class="flex items-center"
        >
          <Checkbox
            v-model="model.manufacturers"
            :inputId="`manufacturer-${index}`"
            name="manufacturers"
            :value="manufacturer"
            class="me-2"
          />
          <label
            :for="`manufacturer-${index}`"
            class="text-violet-700 sm:text-lg text-base font-text"
          >
            {{ manufacturer }}
          </label>
        </div>
      </div>
    </div>
    <div>
      <h3 class="sm:text-3xl text-2xl text-pink-700 font-header mb-3">Color</h3>
      <div class="flex flex-wrap max-h-60 gap-5 p-1 overflow-auto">
        <Checkbox
          v-for="(color, index) in filterList.colors"
          :key="`color-${index}`"
          v-model="model.colors"
          :inputId="`color-${index + 1}`"
          name="colors"
          :value="color"
          pt:box:class="rounded-none p-3"
          :pt:box:style="`background-color: ${color}`"
          pt:icon:class="!hidden"
          pt:input:class="p-3"
        />
      </div>
    </div>
    <div>
      <h3 class="sm:text-3xl text-2xl text-pink-700 font-header mb-3">Materials</h3>
      <div class="flex flex-col gap-2">
        <div
          v-for="(material, index) of filterList.materials"
          :key="index"
          class="flex items-center"
        >
          <Checkbox
            v-model="model.materials"
            :inputId="`material-${index}`"
            name="materials"
            :value="material"
            class="me-2"
          />
          <label :for="`material-${index}`" class="text-violet-700 sm:text-lg text-base font-text">
            {{ material }}
          </label>
        </div>
      </div>
    </div>
    <div>
      <h3 class="sm:text-3xl text-2xl text-pink-700 font-header mb-3">Seasons</h3>
      <div class="flex flex-col gap-2">
        <div v-for="(season, index) of filterList.seasons" :key="index" class="flex items-center">
          <Checkbox
            v-model="model.seasons"
            :inputId="`season-${index}`"
            name="seasons"
            :value="season"
            class="me-2"
          />
          <label :for="`season-${index}`" class="text-violet-700 sm:text-lg text-base font-text">
            {{ season }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import PriceSlider from './PriceSlider.vue'

const model = defineModel()

onBeforeMount(() => {
  if (localStorage.getItem('filterValues')) {
    model.value = JSON.parse(localStorage.getItem('filterValues'))
  }
  window.addEventListener('beforeunload', function (event) {
    localStorage.setItem('filterValues', JSON.stringify(model.value))
  })
})

defineEmits(['filter'])

const filterList = ref({
  types: ['Sunglasses', 'Bracelets', 'Bijouterie'],
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
</script>
