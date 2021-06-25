<template>
  <div id="app">
     <HelloWorld msg="Welcome to Your Vue.js App"/>

    <router-view></router-view>

  </div>
  
</template>



<script type="text/javascript" src="index.js"></script>

    <script>
      var app = new Vue({
          el: '#app',
          data: {
              message: 'Hello Vue.js!'
          }
      })
  </script>


<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
   HelloWorld,
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
