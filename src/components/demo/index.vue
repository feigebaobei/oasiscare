<template>
  <div class="index">
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
      <router-link to="/hospitalCard">hospitalCard</router-link>
      <router-link to="/hospitalCardInfo">hospitalCardInfo</router-link>
      <router-link to="/signTeamCard">signTeamCard</router-link>
      <router-link to="/doctorCardBig">doctorCardBig</router-link>
      <router-link to="/doctorCardSmall">doctorCardSmall</router-link>
      <router-link to="/doctorCardInfo">doctorCardInfo</router-link>
      <router-link to="/recordCard">recordCard</router-link>
      <router-link to="/evaluationCard">evaluationCard</router-link>
      <router-link to="/confirm">confirm</router-link>
      <router-link to="/tabBarTime">tabBarTime</router-link>
    </nav>
    <div class="explain">
      <h3>该组件库的说明</h3>
      <ol>
        <li>安装方法：<code>npm i oasiscare -S</code></li>
        <li>长度单位是rem.使用前请设置<code>body</code>元素的font-size.</li>
        <li>以行内元素使用该组件库的组件时，请使用<code>flex</code>布局，结合<code>flex-grow</code>,<code>flex-shrink</code>使用。</li>
        <li>imgName的优先级高于imgUrl。iconName的优先级高于iconUrl。</li>
        <li>请使用合理的数据类型传入组件。例：不要使用sting类型传入一个date数据（'2019-02-15'）请使用<code>new Date(2019, 1, 15)</code>传入date数据。</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

.nav
  font-size: .28rem

  a
    display: inline-block
    color: green
    margin: .1rem .08rem
    border: 1px solid #f82
    padding: .05rem .08rem

.explain
  font-size: .28rem

code
  background-color: #d8d8d8
  border-radius: 4px
  color: #4a1
  padding: 0 4px
  margin: 0 2px

</style>
