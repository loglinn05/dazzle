<template>
  <div class="max-w-screen-2xl mx-auto grid grid-cols-1 gap-10 xl:px-20 sm:px-12 px-7 py-32">
    <DataView
      :value="cart"
      class="rounded bg-fuchsia-100"
      pt:content:class="flex flex-col gap-y-7 p-5 bg-transparent"
    >
      <template #list="slotProps">
        <div
          class="grid grid-cols-6 gap-5 [&>*]:content-center"
          v-for="(item, index) of slotProps.items"
          :key="index"
        >
          <img :src="item.product.images[0]" class="md:col-span-1 sm:col-span-2 col-span-6" />
          <div
            class="grid md:col-span-5 sm:col-span-4 col-span-6 md:grid-cols-5 grid-cols-3 [&>*]:content-center"
          >
            <div class="md:col-span-2 col-span-3">
              <p class="text-violet-700 text-sm font-text">{{ item.product.category }}</p>
              <p
                class="text-violet-700 text-lg font-text overflow-hidden whitespace-nowrap text-ellipsis"
              >
                {{ item.product.title }}
              </p>
            </div>
            <div>
              <p class="text-violet-700 sm:text-lg text-base font-text md:text-center text-start">
                {{ item.product.price.toFixed(2) }}$/pc.
              </p>
            </div>
            <div>
              <p class="text-violet-700 sm:text-lg text-base font-text text-center">
                &times;
                {{ item.qty }}
              </p>
            </div>
            <div>
              <p class="text-violet-700 sm:text-lg text-base font-text text-end">
                {{ (item.product.price * item.qty).toFixed(2) }}$
              </p>
            </div>
          </div>
        </div>
        <h3 class="sm:text-2xl text:xl text-pink-700 font-header mb-5 text-center">
          {{ total }}$ in total.
        </h3>
      </template>
      <template #empty>
        <p class="text-violet-700">Your cart is empty.</p>
      </template>
    </DataView>
    <div class="w-full py-10 px-5 flex flex-col items-center gap-y-10 rounded bg-fuchsia-100">
      <FloatLabel>
        <InputText id="name" v-model="order.name" class="md:w-96 w-64 text-violet-700 font-text" />
        <label for="name" class="font-text">Name</label>
      </FloatLabel>
      <FloatLabel>
        <InputText
          id="email"
          type="email"
          v-model="order.email"
          class="md:w-96 w-64 text-violet-700 font-text"
        />
        <label for="email" class="font-text">Email</label>
      </FloatLabel>
      <FloatLabel>
        <InputText
          id="shippingAddress"
          v-model="order.shippingAddress"
          class="md:w-96 w-64 text-violet-700 font-text"
        />
        <label for="shippingAddress" class="font-text">Shipping address</label>
      </FloatLabel>
      <div
        ref="card"
        class="md:w-96 w-64 py-3 px-4 rounded border border-solid border-slate-300 bg-white"
      ></div>
      <Button label="Checkout" class="w-fit" @click="checkout" />
    </div>
  </div>
</template>

<script setup>
import DataView from 'primevue/dataview'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cartStore'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const router = useRouter()

const toast = useToast()

const cartStore = useCartStore()
const { cart, total, productIds } = storeToRefs(cartStore)

const stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY, { locale: 'en' })
const elements = stripe.elements()

const card = ref(null)
const cardElement = elements.create('card')

onMounted(() => {
  cardElement.mount(card.value)
})

const order = ref({
  name: '',
  email: '',
  shippingAddress: '',
  productIds: [],
  total: 0,
  paymentMethod: null
})

async function checkout() {
  order.value.productIds = productIds.value
  order.value.total = total.value * 100

  const { paymentMethod, error } = await stripe.createPaymentMethod('card', cardElement, {
    billing_details: {
      name: order.value.name,
      email: order.value.email
    }
  })

  if (error) {
    console.error(error)
    toast.add({
      severity: 'error',
      summary:
        "An error occured while creating payment method. If it's a bug, please, contact us at bugreport@dazzle.com.",
      life: 5000
    })
  } else {
    order.value.paymentMethod = paymentMethod.id

    toast.add({
      severity: 'info',
      summary: `Wait a minute...`,
      life: 3000
    })
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/checkout`, {
        orderData: JSON.stringify(order.value)
      })
      .then((response) => {
        toast.add({
          severity: 'success',
          summary: `Transaction completed successfully.`,
          life: 5000
        })
        cart.value = []
        productIds.value = []
        router.push('/')
        console.log(response.data)
      })
      .catch((error) => {
        if (error.response.data.errors) {
          for (let key in error.response.data.errors) {
            error.response.data.errors[key].forEach((error) => {
              toast.add({
                severity: 'error',
                summary: error,
                life: 5000
              })
            })
          }
        } else {
          toast.add({
            severity: 'error',
            summary: 'An error occured while charging. Please, contact us at bugreport@dazzle.com.',
            life: 5000
          })
          console.error(error)
        }
      })
  }
}
</script>
