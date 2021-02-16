<template>
<div>
<nav class="navbar fixed navbar-expand-lg navbar-light fixed-top main_navbar">
  <div class="container nav_container" style="max-width: 1680px !important;">
    <router-link to="/"><a class="navbar-brand text-dark navbar_logo ">
      <span class=""><img src="https://img.icons8.com/dusk/64/000000/v-live.png"/>
      </span></a>
      </router-link>

      <Cart/>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="mr-auto"></div>
    <ul class="navbar-nav ">
      <!-- <Cart/>   -->
      <li class="nav-item active">
        <router-link to="/"><a class="nav-link text-dark">მთავარი</a></router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/about"><a class="nav-link text-dark">ჩვენს შესახებ</a></router-link>
      </li>
    </ul>
  </div>
  </div>
</nav>
  <router-view name="Default"></router-view>
  <router-view name="About"></router-view>
  <CartModal/>
</div>
</template>

<script>
import Cart from './Cart.vue' 
import CartModal from './CartModal.vue'
export default {
    name: 'Navbar',
    data(){ return {}},
    components: {Cart,CartModal},
    computed: {}
}
</script>
<style scoped>
@font-face {
  font-family: LogoFont;
  src: url('../fonts/OpenSansCondensed-Light.ttf');
}
@font-face {
  font-family: NavbarItemsFont;
  src: url('../fonts/bpg_extrasquare_mtavruli_2009.ttf');
}
.main_navbar {
  background-color:#6199C5 !important;
        /* background: radial-gradient(#D4D6D6 2px, transparent 1px);
    background-size : 50px 50px; */
}
.navbar_logo {
  text-decoration: none !important;
  font-size: 30px;
  font-family: LogoFont;
}
.search_text {
  font-family: NavbarItemsFont;
}
li a {
  text-decoration: none !important;
  font-size: 22px;
  font-family: NavbarItemsFont;
}
.nav-link:hover {
  text-decoration: none !important;
  font-size: 22px;
  color:white !important;
  font-family: NavbarItemsFont;
}
.nav-link.router-link-active .router-link-exact-active{
  color: white !important;
}
</style>