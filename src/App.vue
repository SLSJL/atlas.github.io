<template>
  <div id="app">
    <router-view/>
    <lg-preview></lg-preview>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>


<style lang="less">
#app {
  font-family: "Avenir", Helvetica, SimHei, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
