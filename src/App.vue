<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <main-view class="main-view"/>
  <footer-component/>
</template>

<script>
import MainView from "@/views/MainView";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: 'App',
  components: {
    MainView,
    FooterComponent
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
