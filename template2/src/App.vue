<template>
  <div id="app" class="dark">
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  // <HelloWorld msg="Welcome to Your Vue.js App" />
  name: "App",
  components: {
    // HelloWorld,
  },
};
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
