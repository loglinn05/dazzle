<template>
  <div class="max-w-screen-2xl grid grid-cols-1 gap-y-32 xl:px-20 sm:px-12 px-7 pt-36 pb-32 w-fit mx-auto">
    <Benefits />
    <Categories />
    <Overview />
    <New />
    <Featured />
    <Map />
  </div>
</template>

<script setup>
import Categories from '../components/page-components/home/Categories.vue'
import Benefits from '../components/page-components/home/Benefits.vue'
import Overview from '../components/page-components/home/Overview.vue'
import New from '../components/page-components/home/New.vue'
import Featured from '../components/page-components/home/Featured.vue'
import Map from '../components/page-components/home/Map.vue'
</script>
