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
            :value="type.id"
            class="me-2"
          />
          <label
            :for="`type-${index}`"
            class="w-full inline-flex justify-between text-violet-700 sm:text-lg text-base font-text"
          >
            <span>{{ type.title }}</span>
            <span>{{ type.products_count }}</span>
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
            :value="size.id"
            class="me-2"
          />
          <label
            :for="`size-${index}`"
            class="w-full inline-flex justify-between text-violet-700 sm:text-lg text-base font-text"
          >
            <span>{{ size.title }}</span>
            <span>{{ size.products_count }}</span>
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
            :value="manufacturer.id"
            class="me-2"
          />
          <label
            :for="`manufacturer-${index}`"
            class="w-full inline-flex justify-between text-violet-700 sm:text-lg text-base font-text"
          >
            <span>{{ manufacturer.name }}</span>
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
          :value="color.id"
          pt:box:class="rounded-none p-3"
          :pt:box:style="`background-color: ${color.code}`"
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
            :value="material.id"
            class="me-2"
          />
          <label :for="`material-${index}`" class="text-violet-700 sm:text-lg text-base font-text">
            {{ material.title }}
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
            :value="season.id"
            class="me-2"
          />
          <label :for="`season-${index}`" class="text-violet-700 sm:text-lg text-base font-text">
            {{ season.title }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, onBeforeMount } from 'vue'
import PriceSlider from './PriceSlider.vue'

const filterList = inject('filterList')

const model = defineModel()

onBeforeMount(() => {
  if (localStorage.getItem('filterValues')) {
    model.value = JSON.parse(localStorage.getItem('filterValues'))
  }
  window.addEventListener('beforeunload', function () {
    localStorage.setItem('filterValues', JSON.stringify(model.value))
  })
})
</script>
