import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartSidebarVisible = ref(false)

    function showCartSidebar() {
      cartSidebarVisible.value = true
    }

    function hideCartSidebar() {
      cartSidebarVisible.value = false
    }

    const cart = ref([])
    const productIds = ref([])

    function addToCart(product) {
      if (findItemInCart(product.id) < 0) {
        cart.value.push({
          product: product,
          qty: 1
        })
        productIds.value.push({ id: product.id, quantity: 1 })
      }
    }

    function deleteFromCart(itemId) {
      cart.value.splice(findItemInCart(itemId), 1)
      productIds.value = productIds.value.filter((productId) => {
        return productId.id != itemId
      })
    }

    function findItemInCart(id) {
      return cart.value.findIndex((item) => item.product.id == id)
    }

    function findProductId(id) {
      return productIds.value.findIndex((productId) => productId.id == id)
    }

    const total = computed(() => {
      return cart.value
        .reduce((acc, curVal) => {
          return acc + curVal.product.price * curVal.qty
        }, 0)
        .toFixed(2)
    })

    return {
      cartSidebarVisible,
      showCartSidebar,
      hideCartSidebar,
      cart,
      productIds,
      addToCart,
      deleteFromCart,
      findItemInCart,
      findProductId,
      total
    }
  },
  {
    persist: true
  }
)
