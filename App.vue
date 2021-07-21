<template>
  <div id="app">
      <Header />  <!--실제로는 components를 참조하여  import한 Header를 vue를 가져오는거임-->
      <div id ="content" class ="content">
        <router-view></router-view>>
      </div>  
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';  //우리가 만든 헤더를 import

export default {
  name: 'App',
  components: {
    Header,   //우리가 헤더를 쓸려면 이 부분에 이름을 적음
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
}
</style>
