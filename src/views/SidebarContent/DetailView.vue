<template>
  <div class="container mt-5" style="background-color: white;">
    <div class="row">
        <div class="col-xl-4 col-md-5 text-left mt-2"
        style="background-size:100% 100%; min-height:300px; max-height:400px;"
        :style="{backgroundImage: 'url(' + getDetailedViewItem.image + ')'}"
        >
        </div>
        <div class="col-xl-1"></div>
        <div class="col-xl-7 col-md-7 text-left mt-2">
          <h2 class="text-left calibrifont">სახელი: {{ getDetailedViewItem.name }} </h2>
          <!-- <p>{{getDetailedViewItem}}</p> -->

         <div class="row" >
           <div class="col-xl-9 col-md-8 col-12" >
             <p class="geo_header_text" style="font-size: 20px;"> არწერა: <br>{{ getDetailedViewItem.description }} </p>
            
             <h5 class="mt-4 geo_header_text" style="font-size: 20px;">ფასი: {{getDetailedViewItem.price}} &#8382;</h5>
            
                                 <button type="button" class="btn btn-light" 
          style="background-color: #DFE3E7 !important;" @click='addQuantity(getDetailedViewItem)'>+</button>
                  <button type="button" class="btn btn-light ml-2" 
          style="background-color: #DFE3E7 !important;">
                    <span class="badge badge-pill badge-danger">{{getDetailedViewItem.quantity}}</span>
                  </button>
                  <button type="button" class="btn btn-light ml-2" 
          style="background-color: #DFE3E7 !important;" @click='removeQuantity(getDetailedViewItem)'>-</button> <br>

            <button 
            class="btn btn-primary mt-2 geo_header_text" 
            v-if="!getDetailedViewItem.isAdd"
             @click='addToCart(getDetailedViewItem)'>კალათაში დამატება</button>
            <button 
            class="btn btn-danger mt-2 geo_header_text" 
            v-else @click='removeFromCart(getDetailedViewItem)'>კალათიდან მოშლა</button> 
          
           </div>
           <div class="col-xl-3 col-md-4 col-12">
           </div>
         </div>
        </div>
    </div>

    <div class="container mt-5 text-left" style="background-color: white;">
      <div class="row">
        <div class="col-xl-4">
          <p class="geo_header_text" style="font-size: 25px;">მატერია:<br> {{getDetailedViewItem.material}}</p>
        </div>
        <div class="col-xl-1"></div>
        <div class="col-xl-7" style="display:inline-block !important;">
          <div>
          <div 
          style=" border: 1px solid #E2E6EA; display:inline-block;
          background-size:100% 100%; max-width:70px; min-width:70px; min-height:70px; max-height:70px; "
          :style="{backgroundImage: 'url(' + getDetailedViewItem.image + ')'}">
          </div>
          <div 
          class="ml-2 py-3 px-3"
          style="border: 1px solid #E2E6EA; display:inline-block; 
          background-size:100% 100%; max-width:70px; min-width:70px; min-height:70px; max-height:70px; "
          :style="{backgroundImage: 'url(' + getDetailedViewItem.image + ')'}">
          </div>
          <div 
          class="ml-2"
          style="border: 1px solid #E2E6EA; display:inline-block; background-size:100% 100%; max-width:70px; min-width:70px; min-height:70px; max-height:70px; "
          :style="{backgroundImage: 'url(' + getDetailedViewItem.image + ')'}">
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import jsPDF from 'jspdf'
// import canvas from 'canvas'
import router from './../../router/index'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'DetailViewApp', 
  data(){
      return{
        // data: JSON.parse(localStorage.getItem('DetailViewOfItem'))
      }
  },
  computed: {...mapGetters(['getDetailedViewItem'])},
  updated() {
  },
  created(){
    window.addEventListener('load', (event) =>{
         event.returnValue = router.push('/Hats')
      })
  },
  methods: {
    ...mapActions(['removeFromCart','addToCart', 'addQuantity', 'removeQuantity']),
    isHistory () { return window.history.length > 2 },
    // createPDF () {
    //   let PDF = new jsPDF();
    //   let PdfName = 'product';
    //   PDF.setFontSize(18);
    //   var i = 10;
    //   let color = '';
    //   this.getDetailedViewItem.variants.map(item => {
    //     if(item.image === this.getDetailedViewItem.image) color = item.color })
    //   PDF.text(`----------------------------------------------------`, 10, i);
    //   PDF.text(`color: ${color}`, 10, i+=10);
    //   PDF.text(`----------------------------------------------------`, 10, i+=10);
    //   PDF.text(`Title: ${this.getDetailedViewItem.title}`, 10, i+=10);
    //   PDF.text(`----------------------------------------------------`, 10, i+=10);
    //   PDF.text(`Description: ${this.getDetailedViewItem.description}`, 10, i+=10);
    //   PDF.text(`----------------------------------------------------`, 10, i+=10);
    //   PDF.text(`Price: ${this.getDetailedViewItem.price}`, 10, i+=10);
    //   PDF.text(`----------------------------------------------------`, 10, i+=10);
    //   PDF.text(`Quantity: ${this.getDetailedViewItem.quantity}`, 10, i+=10);
    //   PDF.text(`----------------------------------------------------`, 10, i+=10);
    //   PDF.save(PdfName + new Date().getTime() + '.pdf');
    // }
  }
}
</script>
<style lang="scss" scoped>
@font-face {
  font-family: HeaderNewsGeo;
  src: url('../../fonts/bpg_extrasquare_mtavruli_2009.ttf');
}
.geo_header_text {
  font-family: HeaderNewsGeo;
}
@font-face {
    font-family: Calibri;
    src: url("../../fonts/BPG_Venuri_2020.ttf");
    font-style: normal;
}
.calibrifont {
  font-family: Calibri;
}
</style>
