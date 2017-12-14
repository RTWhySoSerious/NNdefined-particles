<template>
  <div id="app">
    <nn-navbar/>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import NnNavbar from './components/layout/NnNavbar'

  export default {
    name: 'app',
    data() {
      return {

      }
    },
    components: {
      NnNavbar
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
