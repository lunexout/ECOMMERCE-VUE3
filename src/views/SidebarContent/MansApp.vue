<template>
<div>
  <ProductCard :object="object"/>
</div>
</template>

<script>
import ProductCard from '../../components/ProductCard.vue'
import ProductApi from '../../apis/mansApi/index.js'
export default {
  name: 'MansApp',
  data(){
    return {
      object: ProductApi.object
    }
  },
  components: { ProductCard }
}
</script>