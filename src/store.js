import { createStore } from 'vuex'

const mutations = {
    updateCart(state, product) {
      state.shoppingCart.push(product)
      console.log(state.shoppingCart)
    }
  },
  state = {
    shoppingCart: []
  }

export default createStore({ mutations, state, strict: true })
