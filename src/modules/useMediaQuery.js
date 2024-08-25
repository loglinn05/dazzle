import { ref, onMounted, onUnmounted } from 'vue'

export const useMediaQuery = () => {
  const isMobile = ref(null)
  const mql = ref(null)

  function update(e) {
    isMobile.value = e.matches
  }

  onMounted(() => {
    mql.value = window.matchMedia('(max-width: 767px)')
    isMobile.value = window.matchMedia('(max-width: 767px)').matches
    mql.value.addEventListener('change', update)
  })

  onUnmounted(() => {
    mql.value.removeEventListener('change', update)
  })

  return { isMobile }
}
