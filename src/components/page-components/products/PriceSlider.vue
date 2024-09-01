<template>
  <div>
    <div class="flex items-center mb-3">
      <label class="me-3 text-violet-700 sm:text-lg text-base font-text" for="minPrice">
        Min:
      </label>
      <InputNumber
        :step="0.01"
        v-model="model[0]"
        inputId="minPrice"
        :min="listPrice.min"
        :max="model[1]"
        showButtons
        mode="currency"
        currency="USD"
        :minFractionDigits="2"
        :maxFractionDigits="2"
        :pt="{ input: { root: { class: 'w-full' } } }"
      />
    </div>
    <div class="flex items-center mb-3">
      <label class="me-3 text-violet-700 sm:text-lg text-base font-text" for="maxPrice">
        Max:
      </label>
      <InputNumber
        :step="0.01"
        v-model="model[1]"
        inputId="maxPrice"
        :min="model[0]"
        :max="listPrice.max"
        showButtons
        mode="currency"
        currency="USD"
        :minFractionDigits="2"
        :maxFractionDigits="2"
        :pt="{ input: { root: { class: 'w-full' } } }"
      />
    </div>
    <Slider v-model="model" :min="listPrice.min" :max="listPrice.max" :step="0.01" range />
  </div>
</template>

<script setup>
import { watch } from 'vue'
import Slider from 'primevue/slider'

defineProps({
  listPrice: {
    type: Object
  }
})

const model = defineModel()

watch(model, () => {
  if (model.value[0] > model.value[1]) {
    model.value[0] = model.value[1]
  }
  if (model.value[1] < model.value[0]) {
    model.value[1] = model.value[0]
  }
})
</script>
