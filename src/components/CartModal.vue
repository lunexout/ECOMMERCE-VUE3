<template>
<div class="modal fade" id="CartModal" tabindex="-1" role="dialog" aria-labelledby="CartModal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="CartModal"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div v-if="getCartItems.length === 0" style="height: 250px;">
              <h3 class="geo_header_text">კალათა ცარიელია</h3>
              <img src="https://img.icons8.com/dusk/64/000000/v-live.png"/>
          <h5 class="text-center mt-5 geo_header_text">
            აირჩიეთ სასურველი ნივთი
          </h5>
        </div>
      <div class="modal-body" v-for='item in getCartItems' :key="item.id">
        <div class="card">
            <h5 class="card-header">{{item.title}}</h5>
            <div class="card-body text-left">
                <img class="card-img-top mb-3" style="max-width: 300px; max-height: 200px; " :src="item.image">
                <p v-for='matter in item.matter' :key='matter'>•{{matter.percent}} {{matter.mattery}}</p><br>
                <h5 class="card-title">აღწერა: 
                  {{item.description}}</h5>
                <p class="card-text geo_header_text">ფასი: ${{item.price}}</p>
                <div style="display:block; max-width:121px; background-color: transparent;">
                  <button 
                    class="circle_color btn"  type="button"
                    v-for='variant in item.variants' 
                    :key='variant'
                    style="display: inline-block;"
                    :style="{backgroundColor: variant.color}"
                    @click='changeImageColor(variant.image , item)'
                    >
                  </button>
                </div>
                <div class="mt-2">
                  <button type="button" class="btn btn-light ml-2" 
          style="background-color: #DFE3E7 !important;" @click='addQuantity(item)'>+</button>
                  <button type="button" class="btn btn-light ml-2" 
          style="background-color: #DFE3E7 !important;">
                    <span class="badge badge-pill badge-danger">{{item.quantity}}</span>
                  </button>
                  <button type="button" class="btn btn-light ml-2" 
          style="background-color: #DFE3E7 !important;" @click='removeQuantity(item)'>-</button>
                  <button class="btn btn-light ml-2" 
          style="background-color: #DFE3E7 !important;" @click='removeFromCart(item)'>კალათიდან წაშლა</button>
                </div>
            </div>
        </div>
      </div>
      <div class="modal-footer" style="display: block;">
        <h5 class="geo_header_text">ჯამური თანხა: {{ getTotalAmount }} &#8382; </h5>
        <button type="button" class="btn btn-primary mt-3 geo_header_text">გამყიდველთან დაკავშირება</button>
        <button type="button" class="btn btn-secondary mt-3 geo_header_text" @click='clearCart'>გასუფთავება</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CartApp',
    data(){
        return{ }
    },
    computed: { 
      ...mapGetters(['getCartItems', 'getTotalAmount'])
    },
    methods: {
        ...mapActions(['clearCart', 'addQuantity', 'removeQuantity', 'detailItemShow', 'removeFromCart']), 
        changeImageColor(variant, object){ object.image = variant } 
    }
}
</script>
<style scoped>
@font-face {
  font-family: NavbarItemsFont;
  src: url('../fonts/bpg_extrasquare_mtavruli_2009.ttf');
}
@font-face {
  font-family: HeaderNewsGeo;
  src: url('../fonts/bpg_extrasquare_mtavruli_2009.ttf');
}
.geo_header_text {
  font-family: HeaderNewsGeo;
}
.circle_color {
width:30px; height:30px; border-radius:50%; border: 1px solid #F5F5F5; margin: 4px; background-color: red;
}
.cart_text {
  font-family: NavbarItemsFont;
}
</style>