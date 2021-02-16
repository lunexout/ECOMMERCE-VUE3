<template>
  <div>
    <Navbar/>
    <LeftNavbar/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import LeftNavbar from './components/LeftNavbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: { Navbar, LeftNavbar, Footer }  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* background-color: #F3EFE5; */
} 
.container {
  /* background-color: white; */
  /* border: 1px solid brown; */
}
body {
  /* margin-top: 90px;
  background-color: #F3EFE5; */
      background: radial-gradient(#D4D6D6 2px, transparent 1px);
    background-size : 50px 50px;
}

</style>
