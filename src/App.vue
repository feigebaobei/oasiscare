<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav>
      <router-link to="/titleArea">titleArea</router-link>
      <router-link to="/other">other</router-link>
    </nav>
    <div class="content">
      <router-view/>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  // text-align: center
  color: #2c3e50
  margin: 60px 0 0 0
  background-color: #f2f5f8

</style>
