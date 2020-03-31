<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<!-- Import of CSS reset, style background image-->
<style>
@import url("./assets/css/reset.css");

html,
body {
  font-family: Helvetica, sans-serif;
}

#app {
  background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.8)),
    url("./assets/img/bgimg3.jpg");
  background-size: cover;
  background-position: center;
  position: fixed;
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  z-index: -2;
}
</style>
