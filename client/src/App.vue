<template>
  <div id="app">
    <page-header/>
    <img src="../src/assets/logo.png" alt="">
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import PageHeader from '../src/components/Header'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
