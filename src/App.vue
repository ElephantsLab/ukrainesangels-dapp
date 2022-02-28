<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <main-view class="main-view"/>
</template>

<script>
import MainView from "@/views/MainView";
import Core from "./core/core";

export default {
  name: 'App',
  components: {
    MainView
  },
  mounted() {
    this.$root.core = new Core();
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
