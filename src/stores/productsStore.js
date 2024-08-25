import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref([])

  function getProducts(subcategoryId) {
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/get-products`, { subcategory_id: subcategoryId })
      .then((response) => {
        products.value = response.data
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return {
    products,
    getProducts
  }
})
