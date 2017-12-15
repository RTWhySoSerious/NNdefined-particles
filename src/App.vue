<template>
  <div id="app">
    <nn-navbar/>
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
  </div>
</template>

<script>
  import NnNavbar from './components/layout/NnNavbar/NnNavbar'

  export default {
    name: 'app',
    components: { NnNavbar }
  }
</script>

<style lang="scss">
  @import './assets/scss/main-styles.scss';
</style>
