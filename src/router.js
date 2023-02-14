import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/HomeView.vue'
import Products from './views/ProductsView.vue'
import Cart from './views/CartView.vue'
import ProductId from './views/ProductIdView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: Home,
      path: '/'
    },
    {
      component: Products,
      path: '/Products'
    },
    {
      component: Cart,
      path: '/Cart'
    },
    {
      component: ProductId,
      path: '/Product/:id'
    }
  ]
})
