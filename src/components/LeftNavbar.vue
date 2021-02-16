<template>
<div>
<div class="container mb-5 mt-5" style="max-width: 1680px !important; margin-top: 90px !important;  ">
    <div class="row" >
        <div class="col-xl-3 col-lg-12" style="background-color: transparent; ">
              <div class="sidebar mt-3 text-left" style="background-color: transparent;">
                    <div class="dropdown" style="display: inline-block;">
                    <button class="btn btn-light dropdown-toggle geo_header_text" 
                    type="button" id="dropdownMenuButton"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        სილამაზე და მოდა
                        <img src="https://img.icons8.com/fluent/40/000000/modern-statue.png"/>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <router-link class="dropdown-item" to='/Hats'>ქუდი</router-link>
                        <router-link class="dropdown-item" to='/Classical'>ნასკი</router-link>
                        <router-link class="dropdown-item" to='/Classical'>საათი</router-link>
                        <router-link class="dropdown-item" to='/Classical'>ჩანთა</router-link>
                        <router-link class="dropdown-item" to='/Classical'>სათვალე</router-link>
                        <router-link class="dropdown-item" to='/Classical'>ნაკრები</router-link>
                    </div>
                    </div>

                    <div class="dropdown mt-3">
                    <button class="btn btn-light dropdown-toggle geo_header_text"  
                    type="button" id="dropdownMenuButton"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        კომპ. აქსესუარები
                        <img src="https://img.icons8.com/fluent/40/000000/macbook.png"/>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                        <router-link class="dropdown-item" to='/Classical'>მაუსი</router-link>
                        <router-link class="dropdown-item" to='/Classical'>კლავიატურა</router-link>
                        <router-link class="dropdown-item" to='/Classical'>ყურსასმენი</router-link>
                        <router-link class="dropdown-item" to='/Classical'>USB კაბელი</router-link>
                        <router-link class="dropdown-item" to='/Classical'>დინამიკები</router-link>
                        <router-link class="dropdown-item" to='/Classical'>ჩიპები</router-link>
                    </div>
                    </div>
                <!-- <router-link to='/Mans'>კაცები <img src="https://img.icons8.com/fluent/35/000000/valet.png"/></router-link>
                <router-link to='/Girls'>ქალები <img src="https://img.icons8.com/bubbles/35/000000/girl-with-target.png"/></router-link>
                <router-link to='/Baby'>საბავშვო <img src="https://img.icons8.com/doodle/35/000000/sleeping-baby-girl-.png"/></router-link> -->
            
              </div>
        </div>
        <div class="col-xl-9 col-lg-12 m-0" style="background-color: transparent;">
            
                <div class="">
                    <router-view name="News"/>
                    <router-view name="Classical"/>
                    <router-view name="Mans"/>
                    <router-view name="Girls"/>
                    <router-view name="Hats"/>
                    <router-view name="DetailView"/>
                    <router-view name="Admin"/>
                    <router-view name="Logged"/>
                </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import { } from 'vuex'
export default {
    name: 'LeftNavbar',
    data(){
        return {
          window: {
            isDeviceSmall: false,
            width: 0,
            height: 0
        }
        }
    },
    components: {  },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            if(this.window.width < 992){this.window.isDeviceSmall = true}
            else {this.window.isDeviceSmall = false}    
        }
    }
}

</script>
<style scoped>
@font-face {
  font-family: menuItems;
  src: url('../fonts/bpg_extrasquare_mtavruli_2009.ttf')
}
/* a.router-link-active.router-link-exact-active{
    border: 5px solid white;
    border-left-color: #C62332 !important;
    color:#C62332 !important;
    margin-left: 5px;
} */
@font-face {
  font-family: HeaderNews;
  src: url('../fonts/Montserrat-Regular.ttf');
}
.geo_header_text {
  font-family: HeaderNewsGeo;
}
.dropdown-menu {
    /* scroll-y:  */
    display: block;visibility: hidden;opacity:0;transform: translateY(50px);transition:.5s ease all;}
.dropdown-menu.show {display: block;visibility: visible;opacity:1;transform: translateY(0px);transition:.5s ease all;}
.sidebar a{
  padding: 15px;
text-align: left;
text-decoration: none;
color: black;
display: block;
font-family: menuItems;
font-size: 22px;
}
.dropdown-menu {
        position:absolute;
    display:inherit!important;
    overflow-x:auto;
    -webkit-overflow-scrolling:touch;
    -moz-overflow-scrolling:touch;
    -ms-overflow-scrolling:touch;
    -o-overflow-scrolling:touch;
    overflow-scrolling:touch;
    /* top: 150px !important; */
    left:0!important;
    width:auto;
    /* height:auto; */
    max-height:300px;
    margin:0;
    border-left:none;
    border-right:none;
    -webkit-border-radius:0!important;
    -moz-border-radius:0!important;
    -ms-border-radius:0!important;
    -o-border-radius:0!important;
    border-radius:0!important;
    -webkit-box-shadow:none;
    -moz-box-shadow:none;
    -ms-box-shadow:none;
    -o-box-shadow:none;
    box-shadow:none
}
</style>