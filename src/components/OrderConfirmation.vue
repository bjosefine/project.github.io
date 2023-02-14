<script>
export default{
  props: {firstName: {
    type: String,
    default: 'hej'
  }}
}
</script>
<template>
  <p v-if="firstName !== null">Tack för din beställning {{ this.firstName }}!</p>
</template>
