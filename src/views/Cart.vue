<template>
  <div class="grid grid-cols-4 max-w-screen-2xl mx-auto gap-10 xl:px-20 sm:px-12 px-7 py-32">
    <DataView
      :value="cart"
      class="rounded bg-fuchsia-100"
      :class="cart.length > 0 ? 'xl:col-span-3 col-span-4' : 'col-span-4'"
      pt:content:class="flex flex-col gap-y-7 p-5 bg-transparent"
    >
      <template #list="slotProps">
        <div
          class="grid sm:grid-cols-9 grid-cols-4 content-center [&>*]:content-center sm:gap-3 gap-5"
          v-for="(item, index) of slotProps.items"
          :key="index"
        >
          <img :src="item.product.images[0]" class="xl:col-span-1 sm:col-span-2 col-span-4" />
          <div
            class="xl:col-span-7 sm:col-span-6 col-span-4 grid xl:grid-cols-7 md:grid-cols-6 sm:grid-cols-6 grid-cols-4 gap-3 [&>*]:content-center"
          >
            <div class="xl:col-span-4 md:col-span-6 col-span-6">
              <p class="text-violet-700 text-sm font-text">{{ item.product.category }}</p>
              <p
                class="text-violet-700 text-lg font-text overflow-hidden whitespace-nowrap text-ellipsis"
              >
                {{ item.product.title }}
              </p>
            </div>
            <div class="lg:col-span-1 col-span-2">
              <p class="text-violet-700 text-lg font-text">
                {{ (item.product.price * item.qty).toFixed(2) }}$
              </p>
            </div>
            <div class="sm:col-span-2 col-span-4">
              <InputNumber
                v-model="item.qty"
                @input="changeQuantity(item.product.id, item.qty)"
                showButtons
                :min="1"
                class="w-full"
                :pt="qtyInputPassThrough"
              />
            </div>
          </div>
          <div class="max-sm:col-span-4 flex sm:items-center items-start justify-end">
            <Button
              icon="pi pi-times"
              severity="danger"
              class="h-fit"
              @click="deleteFromCart(item.product.id)"
            />
          </div>
        </div>
      </template>
      <template #empty>
        <p class="text-violet-700">Your cart is empty.</p>
      </template>
    </DataView>
    <div class="xl:col-span-1 col-span-4 bg-fuchsia-100 rounded p-5" v-if="cart.length > 0">
      <h3 class="sm:text-2xl text:xl text-pink-700 font-header mb-3">
        There are {{ cart.length }} items in cart.
      </h3>
      <h3 class="sm:text-2xl text:xl text-pink-700 font-header mb-5">{{ total }}$ in total.</h3>
      <Button
        class="xl:w-full font-text text-lg"
        label="Checkout"
        raised
        @click="$router.push('/checkout')"
      />
    </div>
  </div>
</template>

<script setup>
import DataView from 'primevue/dataview'
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'

const qtyInputPassThrough = {
  input: { root: { class: 'w-full' } }
}

const cartStore = useCartStore()
const { cart, productIds, total } = storeToRefs(cartStore)
const { findProductId, deleteFromCart } = cartStore

function changeQuantity(id, quantity) {
  productIds.value[findProductId(id)].quantity = quantity
}
</script>
