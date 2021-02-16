<template>
<div>
  <div v-if="isSpinner" class="loader"></div>
  <div v-else class="row">
    <div class="col-xl-4 col-md-6 col-12 mt-3" v-for="item in hats" :key="item">
      <div class="card text-left" style="width: 18rem; min-height:550px; max-height:550px; margin: 0 auto;">
    <img class="card-img-top" style="min-height: 280px; max-height: 280px;" :src="item.image" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title"><span class="geo_header_text">სახელი:</span> {{item.name}}</h5>
      <!-- <p class="card-text">{{item.description}}</p> -->
      <p class="card-text geo_header_text">ფასი: {{item.price}} 	&#8382;</p>


      <div class="text-center" style="position: relative !important; margin-bottom: 0px; !important">
          <button class="btn btn-light" 
          style="background-color: #DFE3E7 !important;"
           @click='removeQuantity(item)'>-</button> 
          <!-- <p class="card-text">{{item.quantity}}</p> -->
          <button type="button" class="btn btn-light ml-2 geo_header_text" style="background-color: #DFE3E7 !important;">
          რაოდენობა: <span class="badge badge-pill badge-light">{{item.quantity}}</span>
          </button>
          <button class="btn btn-light ml-2" 
          style="background-color: #DFE3E7 !important;"
           @click='addQuantity(item)'>+</button>
      </div>
      <div class="text-center" style="position: relative !important; margin-bottom: 0px;!important">
        <!-- <div>{{item.isAdd}}</div> -->
        <button class="btn btn-primary btn-lg btn-block mt-2 geo_header_text" v-if='item.isAdd !== true' @click='addToCart(item)'>კალათაში დამატება</button>
        <button class="btn btn-danger btn-lg btn-block mt-2 geo_header_text" v-else @click='removeFromCart(item)'>კალათიდან მოშლა</button>


        <router-link 
                :to="{ name: 'DetailView', params: { id: item.id }}"
                style="text-decoration: none;"
              >
              <button 
                class="btn btn-info btn-lg btn-block title_text mt-2 geo_header_text"
                @click='detailItemShow(item)'
                >დეტალურად ნახვა</button>
        </router-link>
      </div>
    </div>
  </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions } from 'vuex'
import firebase from 'firebase/app'
// import { onMounted } from 'vue'

export default {
  name: 'Hats',
  data(){
    return {
      hats: [],
      isSpinner: false,
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['addToCart',  'removeQuantity', 'addQuantity' , 'removeFromCart','detailItemShow']),
  },
  async created(){
    this.isSpinner = true
      await firebase.firestore()
        .collection('Hats')
        .orderBy('createdTime', 'desc')
        .get()
        .then(doc => {
          doc.docs.map(data => { this.hats.push(data.data()) })
        })
        this.isSpinner = false
  }
}
</script>

<style scoped>
.loader,
.loader:before,
.loader:after {
  background: #6199C5;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #6199C5;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@font-face {
  font-family: HeaderNewsGeo;
  src: url('../../fonts/bpg_extrasquare_mtavruli_2009.ttf');
}
.geo_header_text {
  font-family: HeaderNewsGeo;
}
</style>
