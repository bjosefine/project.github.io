<template>
  <main>
    <h1>Produkter</h1>
    <FetchStore />
  </main>
</template>

<script>
  import FetchStore from '../components/FetchStore.vue'

  export default {
    components: {
      FetchStore
    }
  }
</script>
<style lang="scss" scoped>
  h1 {
    color: #031924;
  }
</style>
