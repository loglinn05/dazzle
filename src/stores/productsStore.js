import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref([])
  const productsLoading = ref(false)

  function getProducts(subcategoryId) {
    productsLoading.value = true
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/get-products`, { subcategory_id: subcategoryId })
      .then((response) => {
        products.value = response.data
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        productsLoading.value = false
      })
  }

  return {
    products,
    productsLoading,
    getProducts
  }
})
