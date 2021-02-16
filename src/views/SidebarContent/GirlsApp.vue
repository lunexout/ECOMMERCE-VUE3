<template>
  <ProductCard :object='object'/>
</template>

<script>
// import axios from 'axios'
// import {  } from 'vuex'
import ProductCard from '../../components/ProductCard.vue'
import ProductApi from '../../apis/girlsApi/index.js'
export default {
  name: 'GirlsApp',
  data(){
    return {
      object: ProductApi.object
    }
  },
  components: {ProductCard},
  // computed: {...mapGetters(['getCartQuantity'])}
}
</script>
<style lang="scss" scoped>
</style>
