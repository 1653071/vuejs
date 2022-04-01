<template>
  <div id="app">
     <Navigation/>
    
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/navigation/Navigation"
import Sidebar from "./components/menu/Sidebar"
import Modal from "./components/modal/Modal.vue"
export default {
  name: 'App',
  components:{
    Navigation,Sidebar,Modal
  }
    
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F0E8F0;
  color: #2c3e50;
  
}
@import'~bootstrap/dist/css/bootstrap.css';
</style>
