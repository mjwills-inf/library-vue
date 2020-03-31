<template>
  <div class="home">
    <div id="page-titles">
      <img
        id="vue-logo"
        alt="Vue logo"
        src="../assets/img/logo.png"
        width="150px"
      />
      <h1>Library. <span>Dark.</span></h1>
      <h3>The Odin Project</h3>
      <h3>Front-End Framework Project: Vue Library</h3>
    </div>
    <div id="page-functions">
      <button>Add New Book</button>
    </div>
    <div id="page-cards"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
#vue-logo {
  margin: 20px 35px;
  float: right;
}

h1 {
  font-weight: 400;
  font-size: 4em;
  color: rgb(220, 220, 220);
  padding: 28px;
}

h1 span {
  color: rgb(0, 0, 0);
}

h3 {
  font-weight: 400;
  font-size: 1.2em;
  padding-left: 30px;
  color: rgb(220, 220, 220);
  margin-bottom: 3px;
}

#page-functions {
  margin: 30px;
}

#page-functions button {
  padding: 7px;
  outline: none;
  color: rgb(228, 228, 228);
  font-weight: 550;
  font-size: 15px;
  text-shadow: 1px 1px #1f272b;
  border: 1px solid #1c252b;
  border-radius: 6px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(3%, rgb(82, 82, 82)),
    color-stop(4%, #414141),
    color-stop(100%, rgb(49, 49, 49))
  );
}

#page-functions button:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(3%, rgb(100, 100, 100)),
    color-stop(4%, rgb(90, 90, 90)),
    color-stop(100%, rgb(64, 64, 64))
  );
}
#page-functions button:active {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(3%, rgb(32, 32, 32)),
    color-stop(51%, rgb(51, 51, 51)),
    color-stop(100%, rgb(46, 46, 46))
  );
}
</style>
