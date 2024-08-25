import FadeTransition from './transitions/FadeTransition.vue'
import ListTransition from './transitions/ListTransition.vue'
import SlideTopTransition from './transitions/SlideTopTransition.vue'

import Fragment from './Fragment.vue'

import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Sidebar from 'primevue/sidebar'
import ProductCard from './ProductCard.vue'

export default [
  {
    name: 'SlideTopTransition',
    component: SlideTopTransition
  },
  {
    name: 'FadeTransition',
    component: FadeTransition
  },
  {
    name: 'ListTransition',
    component: ListTransition
  },
  {
    name: 'Fragment',
    component: Fragment
  },
  {
    name: 'Button',
    component: Button
  },
  {
    name: 'Checkbox',
    component: Checkbox
  },
  {
    name: 'Sidebar',
    component: Sidebar
  },
  {
    name: 'ProductCard',
    component: ProductCard
  }
]
