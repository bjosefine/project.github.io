<script>
import FetchStore from '../components/Fetchstore.vue'
import TotalSum from '../components/TotalSum.vue';

export default {
  components: {
    FetchStore,
    TotalSum
  }
}
</script>
<style lang="scss" scoped>
h1{
  color: #031924}
</style>
<template>
  <h1>Produkter</h1>
  <FetchStore />
  <TotalSum />
</template>
