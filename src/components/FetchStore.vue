<template>
  <table class="productTable">
    <tr v-for="product in products" :key="product">
      <td class="product">
        <RouterLink :to="`/product/${product.id}`">
          <img class="productImg" :src="product.images[0]" />
        </RouterLink>
      </td>
      <td class="productTitle">
        {{ product.title }}
      </td>
      <td class="productPrice">{{ product.price }} kr</td>
      <td class="productAdd">
        <input
          @:click="$store.commit('updateCart', product.price)"
          type="button"
          value="Lägg till"
          class="btn btn-buttons"
        />
      </td>
    </tr>
  </table>
  <div class="pageButtons">
    <input
      type="button"
      value="<"
      @click="previousProdClick"
      class="btn btn-buttons"
    />
    <input
      type="button"
      value=">"
      @click="nextProdClick"
      class="btn btn-buttons"
    />
  </div>
</template>

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
        { immedtiate: true }
      )
    },
    data() {
      return {
        products: null,
        page: 0
      }
    },
    methods: {
      nextProdClick() {
        this.page = this.page + 10
        console.log(this.page)
      },
      previousProdClick() {
        this.page = this.page - 10
        console.log(this.page)
      },
      updatePage() {
        const fetch =
          'https://api.escuelajs.co/api/v1/products?categoryId=3&offset=' +
          this.page +
          '&limit=10'
        axios.get(fetch).then((result) => {
          this.products = result.data
          console.log(result.data)
        })
      }
    }
  }
</script>
<style lang="scss">
  .productTable {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .product {
    display: block;
    width: 100%;
  }
  .product a {
    text-decoration: none;
    color: black;
  }
  .productImg {
    display: block;
    width: 100%;
    margin-top: 5px;
  }
  .productTitle {
    display: block;
  }
  .productPrice {
    display: block;
  }
  .productAdd {
    display: block;
  }
  .pageButtons {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  /* for tablet  */
  @media screen and (min-width: 810px) {
    .productTable {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
