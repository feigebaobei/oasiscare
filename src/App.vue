<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav class="nav">
      <router-link to="/titleArea">titleArea</router-link>
      <router-link to="/addressPhone">addressPhone</router-link>
      <router-link to="/orderStatus">orderStatus</router-link>
      <router-link to="/addressCard">addressCard</router-link>
      <router-link to="/authentication">authentication</router-link>
      <router-link to="/addressItem">addressItem</router-link>
      <router-link to="/hint">hint</router-link>
      <router-link to="/grade">grade</router-link>
      <router-link to="/navItem">navItem</router-link>
      <router-link to="/infoItem">infoItem</router-link>
      <router-link to="/common">common</router-link>
      <router-link to="/inputText">inputText</router-link>
      <router-link to="/inputRadio">inputRadio</router-link>
      <router-link to="/hardCorner">hardCorner</router-link>
      <router-link to="/softCorner">softCorner</router-link>
      <router-link to="/step">step</router-link>
      <router-link to="/orderInfoItem">orderInfoItem</router-link>
      <router-link to="/drug">drug</router-link>
      <router-link to="/directionItem">directionItem</router-link>
      <router-link to="/serveCard">serveCard</router-link>
    </nav>
    <div class="content">
      <router-view/>
    </div>
    <footervue></footervue>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import footervue from '@/components/footervue.vue'
export default {
  name: 'App',
  components: {
    footervue
  }
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

.nav
  font-size: .28rem

  a
    display: inline-block
    color: green
    margin: .1rem .08rem
    border: 1px solid #f82
    padding: .05rem .08rem

</style>
