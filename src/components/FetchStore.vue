<script>
import axios from 'axios'
export default {
    created() {
        this.updatePage()
        this.$watch(
          () => this.page,
          () => {
            this.updatePage()
          },
          {immedtiate: true}
        )
    },
    data() {
        return {
            products: null,
            page: 0
        };
    },
methods: {
nextProdClick(){
  this.page = this.page + 10
  console.log(this.page)
},
previousProdClick(){
  this.page = this.page - 10
  console.log(this.page)
},
updatePage(){
        const fetch = 'https://api.escuelajs.co/api/v1/products?offset=' + this.page +'&limit=10';
        axios.get(fetch)
            .then((result) => {
            this.products = result.data;
            console.log(result.data);
        });
      }
},
}
</script>
<template>
  <table>
    <tr>
      <td>Produkt</td>
      <td>Priser</td>
      <td>Antal</td>
    </tr>
    <tr v-for="product in products" :key="product">
      <td>
        <img :src="product.images[0]" style="width:10%" />
        <RouterLink :to="`/product/${product.id}`">
          {{ product.title }}
        </RouterLink>
      </td>
      <td>
        {{ product.price }} kr
      </td>
      <td>
        <input @:click="$store.commit('updateCart', product.price)" type="button" value="Lägg till" class="btn btn-buttons" />
      </td>
    </tr>
  </table>
  <input type="button" value="<" @click="previousProdClick" />
  <input type="button" value=">" @click="nextProdClick" />
</template>
