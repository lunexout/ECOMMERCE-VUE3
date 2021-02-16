<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-xl-4" v-for='item in object' :key='item.id'>
        <div class="card text-left" style="max-width: 450px; min-height: 500px;max-height: 500px;">
          <img class="card-img-top" 
          style="max-width: 450px; min-height: 215px;max-height: 215px;" 
          :src="item.image" alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text">{{item.description}}</p>

          <div 
            v-for='variant in item.variants' 
            :key='variant'
            class="circle_color"
            style="display: inline-block;"
            :style="{backgroundColor: variant.color}" 
            @click='changeImageColor(variant.image , item)'
            >
          </div><br>

          <button class="btn btn-info" @click='addQuantity(item)'>+</button>
          <!-- <p class="card-text">{{item.quantity}}</p> -->
          <button type="button" class="btn btn-danger ml-2">
          რაოდენობა: <span class="badge badge-pill badge-light">{{item.quantity}}</span>
          <span class="sr-only">unread messages</span>
          </button>
          <button class="btn btn-info ml-2" @click='removeQuantity(item)'>-</button>

          <p class="card-text">Price: ${{item.price}}</p>
          <button class="btn btn-danger" v-if='item.isAdd' @click='removeFromCart(item)'>REMOVE FROM CART</button>
          <button class="btn btn-danger" v-else @click='addToCart(item)'>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import axios from 'axios'
// import { mapActions } from 'vuex'
export default {
  name: 'ClassicalApp',
  data(){
    return {
    }
  },
}
</script>
<style scoped>
.circle_color {
width:50px; height:50px; border-radius:50%; border: 2px solid gray; margin: 4px;
}
</style>
