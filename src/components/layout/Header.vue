<template>
  <header class="header">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/what">What</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
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
