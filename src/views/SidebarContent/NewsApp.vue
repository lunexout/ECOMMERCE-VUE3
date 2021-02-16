<template>
<div>
<div class="container" style="max-width: 1680px !important;">
  <div class="row">
    <div class="col-xl-3 col-md-3 text-left">
      <div class="mt-2">
        <h5 style="border-bottom: 1px solid gray;" class="news_header_text"><span class="geo_header_text">დღის სიახლეები</span></h5>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xl-6 col-md-6 mt-2">
      <div style="width: 100%; height: 400px; border-radius: 15px; background-color:#097884;">
        <div>
          <img class=" mt-3" src="https://img.icons8.com/cotton/84/000000/best-sales--v1.png"/>
          <br>
          <img class=" mt-5" src="https://img.icons8.com/cotton/84/000000/overstock-sale--v1.png"/><br>
          <img class=" mt-5" src="https://img.icons8.com/cotton/84/000000/delivered-in-time--v1.png"/><br>
        </div>
      </div>
    </div>
    <div class="col-xl-6 col-md-6">
      <div class="row">
        <div class="col-xl-6 col-md-6 mt-2">
          <div style="width: 100%; height: 180px; border-radius: 15px; background-color:#DBEDD9;">
            <div class="text-center">
              <img src="https://img.icons8.com/color/118/000000/drying-clothes.png"/>
              <h5>საზაფხულო<img src="https://img.icons8.com/plasticine/38/000000/sale.png"/></h5>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-6 mt-2 ">
          <router-link to="Baby" style="text-decoration: none !important; color: #414141;">
          <div style="width: 100%; height: 180px; border:1px solid #EDE8D9; border-radius: 15px;background-color:#EDE8D9;">
            <img src="https://img.icons8.com/flat_round/118/000000/babys-room.png"/>
            <h5>საბავშვო<img src="https://img.icons8.com/plasticine/38/000000/sale.png"/></h5>
          </div>
          </router-link>
        </div>
      </div>
      <div class="row mb-5" style="margin-top: 32px; ">
        <div class="col-xl-6 col-md-6 mt-2">
          <div style="width: 100%; height: 180px; border-radius: 15px;background-color:#D6D6D6;">
            <img src="https://img.icons8.com/bubbles/118/000000/popular-woman.png"/>
            <h5>პოპულარული<img src="https://img.icons8.com/plasticine/38/000000/sale.png"/></h5>
          </div>
        </div>
        <div class="col-xl-6 col-md-6 mt-2">
          <div style="width: 100%; height: 180px; border-radius: 15px;background-color:#DDE9FF;">
            <img src="https://img.icons8.com/color/118/000000/new.png"/>
            <h5>სიახლეები<img src="https://img.icons8.com/fluent/34/000000/check-dollar.png"/></h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
// import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'NewsApp',
  data(){
    return { 
      object: [{
        id: 1,
        title: 'jimsheri',
        isSale: true,
        description: 'lorem ipsum text isum',
        cost: 37
      },
      {
        id: 2,
        title: 'jimsheri2',
        isSale: false,
        description: 'lorem ipsum text isum2',
        cost: 378
      }
      ]
    }
  },
  methods: { ...mapActions(['addToCart']) }
}
</script>
<style scoped>
@font-face {
  font-family: HeaderNews;
  src: url('../../fonts/Montserrat-Regular.ttf');
}
@font-face {
  font-family: HeaderNewsGeo;
  src: url('../../fonts/bpg_extrasquare_mtavruli_2009.ttf');
}
.geo_header_text {
  font-family: HeaderNewsGeo;
}
.news_header_text {
  font-family: HeaderNews;
}
</style>
