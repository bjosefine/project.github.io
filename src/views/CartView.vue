<template>
  <h1>Cart</h1>
  <p>Hello Cart!</p>
  <SubmitOrder @send-order="submitOrder" />
  <OrderConfirmation :first-name="firstName" />
  <TotalSum />
</template>

<script>
  import SubmitOrder from '../components/SubmitOrder.vue'
  import OrderConfirmation from '../components/OrderConfirmation.vue'
  import TotalSum from '../components/TotalSum.vue'
  export default {
    data() {
      return {
        firstName: null
      }
    },
    methods: {
      submitOrder(n) {
        this.firstName = n.firstName
        console.log(this.firstName, 'cartview')
      }
    },

    components: {
      SubmitOrder,
      OrderConfirmation,
      TotalSum
    }
  }
</script>
