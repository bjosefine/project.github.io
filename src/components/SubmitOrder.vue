<script>
export default{
  emits: ['send-order'],
  data(){
    return{
      fName: ''
    }
  },
  methods: {
    onSubmit(){
      this.$emit('send-order', {
        firstName: this.fName
      })
      console.log(this.fName, 'submitorder')
    }
  }
}
</script>
<template>
  <input type="text" v-model="fName" placeholder="Förnamn" />
  <input @click="onSubmit" type="button" value="Beställ" class="btn btn-buttons" />
</template>
