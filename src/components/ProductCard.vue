<template>
  <div class="container">
    <div class="row">
      <div 
      v-for='item in object' 
      :key='item.id'
      class="col-xl-6 col-lg-6 col-12" 
      style="margin: 0 auto !important;">
        <div class="product mt-2">

          <div class="row">
            <div class="col-xl-7 col-sm-7 col-12 mt-2 ml-2" 
            style="background-size:100% 100%; min-height:200px; max-height: 300px; min-width:150px; max-width: 300px;"
            :style="{backgroundImage: 'url(' + item.image + ')'}">
              <!-- <img style="border-radius:10px;" width="100%" height="100%" :src='item.image'> -->
            </div>
            <div class="col-xl-4 col-sm-4 col-12 mt-2 text-center eng_other_text">
              <p v-for='matter in item.matter' :key='matter'>•{{matter.percent}} {{matter.mattery}}</p><br>
              <button type="button" class="btn btn-light" @click='addQuantity(item)'>+</button>
              <button type="button" class="btn btn-light">
                <span class="badge badge-pill badge-danger">{{item.quantity}}</span>
              </button>
              <button type="button" class="btn btn-light" @click='removeQuantity(item)'>-</button>
            </div>
          </div>
          <div class="row mt-2">
          </div>
          <div class="row mt-3">
            <div class="col-xl-7 ml-2 text-center">
              <p class="title_text">სახელი: {{item.title}}</p>
            </div>
            <div class="col-xl-4 text-center title_text">
              <div>
                <div 
                style="display: inline-block !important;" 
                class="circle_color"
                v-for='variant in item.variants' :key='variant'
                :style='{backgroundColor: variant.color}'
                @click='changeImageColor(variant.image, item)'
                ></div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-12 ml-2 text-center">
              <span class="title_text">ფასი:</span>
              <span class=" eng_other_text" style="font-size: 30px;">
                <span style="font-family:forPricingFont;">
                {{ item.price }}
                </span>&#8382;</span> 
              </div>
          </div>

          <div class="row mt-4">
            <div class="col-xl-2 col-sm-2"></div>
            <div class="col-xl-8 col-sm-8 ">
              <button 
                v-if='!item.isAdd'
                type="button" 
                class="btn btn-danger btn-lg btn-block title_text"
                @click='addToCart(item)'
                >კალათაში დამატება</button>
              <button 
                v-else
                type="button" 
                class="btn btn-warning btn-lg btn-block title_text"
                @click='removeFromCart(item)'
                >კალათიდან წაშლა</button>

              <router-link 
                :to="{ name: 'DetailView', params: { id: item.id }}"
                style="text-decoration: none;"
              >
              <button 
                type="button" 
                class="btn btn-info btn-lg btn-block title_text mt-2"
                @click='detailItemShow(item)'
                >დეტალურად ნახვა</button>
              </router-link>

            </div>
            <div class="col-xl-2 col-sm-2"></div>
          </div>
        </div>
        <div class="mt-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'ProductCardApp',
  props: { object: {type: Object} },
  methods: { ...mapActions(['addToCart', 'removeFromCart', 'addQuantity', 'removeQuantity', 'detailItemShow']), 
  changeImageColor(variant, object){ object.image = variant }
  }
}
</script>
<style lang="scss" scoped>
.product {
    overflow: hidden;
  width: 90%;
  min-height: 490px;
  max-height: 780px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 0 auto;
}
.product:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.circle_color {
width:30px; height:30px; border-radius:50%; border: 1px solid #F5F5F5; margin: 4px; background-color: red;
}
@font-face {
  font-family: OtherTextEng;
  src: url('../fonts/Montserrat-Regular.ttf');
}
@font-face {
  font-family: HeaderTitleGeo;
  src: url('../fonts/bpg_extrasquare_mtavruli_2009.ttf');
}
@font-face {
  font-family: forPricingFont;
  src: url('../fonts/HachiMaruPop-Regular.ttf')
}
.title_text {
  font-family: HeaderTitleGeo;
  font-size: 20px;
}
.eng_other_text {
  font-family: OtherTextEng;
}
</style>
