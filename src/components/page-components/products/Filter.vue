<template>
  <Sidebar
    v-model:visible="filterSidebarVisible"
    pt:root:class="bg-violet-200 overflow-auto p-10"
    dismissable
    blockScroll
  >
    <template #container>
      <FilterList v-model="filterValues" v-touch:swipe.left="hideFilterSidebar" />
    </template>
  </Sidebar>
  <div class="xl:hidden inline-grid col-span-4">
    <Button label="Filter" icon="pi pi-arrow-right" @click="showFilterSidebar" class="w-fit" />
  </div>
  <div class="xl:inline-grid hidden">
    <FilterList v-model="filterValues" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FilterList from '@/components/page-components/products/FilterList.vue'

const filterSidebarVisible = ref(false)

function showFilterSidebar() {
  filterSidebarVisible.value = true
}

function hideFilterSidebar() {
  filterSidebarVisible.value = false
}

const filterValues = defineModel()
</script>
