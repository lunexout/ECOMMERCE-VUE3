<template>
<div class="alert alert-success alert-dismissible fade show m-0" role="alert">
  <p class="alert_text"><strong>Well Done!</strong>  • ლორემ იფსუმ დოლორ სით ამეთ, ინვიდუნთ აბჰორრეანთ ესთ ათ. </p>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
</template>
<script>
export default {
    name: 'AlertNewsApp',
}
</script>
<style scoped>
@font-face {
  font-family: Alert;
  src: url('../fonts/bpg_extrasquare_mtavruli_2009.ttf');
}
.alert_text {
font-family: Alert;
}
</style>