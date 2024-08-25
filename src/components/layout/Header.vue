<template>
  <header
    :class="
      'w-full h-screen ' +
      ($route.path == '/' ? 'bg-header-1' : 'bg-header-2') +
      ' bg-center bg-cover'
    "
  >
    <div class="w-full h-screen bg-purple-500/[0.25] flex justify-center items-center text-center">
      <Navbar />
      <div class="max-w-full md:max-w-xl px-5">
        <template v-if="$route.path == '/'">
          <h1 class="text-5xl sm:text-6xl text-pink-800 font-header text-shadow-lg shadow-white">
            Dazzle
          </h1>
          <h2
            class="mt-3 text-2xl sm:text-3xl text-rose-800 font-header font-semibold text-shadow-sm shadow-white"
          >
            Create dazzling outfits with us and look like a superstar!
          </h2>
          <div class="mt-6 flex justify-around">
            <Button
              label="Clothes"
              pt:label:class="font-text text-base sm:text-lg"
              @click="$router.push('/products/womens-clothes')"
            />
            <Button
              label="Shoes"
              pt:label:class="font-text text-base sm:text-lg"
              @click="$router.push('/products/womens-shoes')"
            />
          </div>
        </template>
        <template v-else>
          <h1 class="text-5xl sm:text-6xl text-pink-800 font-header text-shadow-lg shadow-white">
            Dazzle
          </h1>
          <h2
            class="mt-3 text-2xl sm:text-3xl text-rose-800 font-header font-semibold text-shadow-sm shadow-white"
          >
            Light it up!
          </h2>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup>
import Navbar from './Navbar.vue'
</script>
