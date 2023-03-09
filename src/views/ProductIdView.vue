<template>
  <RouterLink to="/products">Product</RouterLink>
  <h1>Titel: {{ products.title }}</h1>
  <img :src="products.images" style="width: 50%" />
  <p>Pris: {{ products.price }} kr</p>
  <p>Beksrivning: {{ products.description }}</p>
  <input
    @:click="$store.commit('updateCart', products.price)"
    type="button"
    value="Lägg till"
  />
  <TotalSum />
</template>

<script>
  import axios from 'axios'
  import TotalSum from '../components/TotalSum.vue'
  export default {
    created() {
      const fetch =
        'https://api.escuelajs.co/api/v1/products/' + this.$route.params.id
      axios.get(fetch).then((result) => {
        this.products = result.data
        console.log(result.data)
      })
    },
    data() {
      return {
        products: 0
      }
    },
    components: { TotalSum }
  }
</script>
