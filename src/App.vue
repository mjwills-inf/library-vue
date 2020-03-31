<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/what">What</router-link>
    </div>
    <router-view />
  </div>
</template>

<!-- Import of CSS reset, global styling, background-image, nav bar -->
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

#nav {
  font-size: 16px;
  background-color: rgb(50, 50, 50);
  padding: 10px;
  position: sticky;
  top: 0;
  text-align: right;
}

#nav a {
  text-decoration: none;
  color: rgb(210, 210, 210);
  margin: 5px 10px;
}
</style>
