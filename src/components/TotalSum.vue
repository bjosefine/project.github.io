<template>
  <p>Antal: {{ $store.state.shoppingCart.length }} Pris: {{ total }} kr</p>
</template>

<script>
  import store from '../store'

  export default {
    computed: {
      total() {
        let quantity = 0
        for (let price in store.state.shoppingCart) {
          quantity += store.state.shoppingCart[price]
          console.log(store.state.shoppingCart[price])
        }
        return quantity
      }
    }
  }
</script>
