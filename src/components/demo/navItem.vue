<template>
  <div class="navItem">
    <h2>大navItem</h2>
    <nav-item :title="a0.title" :active="a0.active"></nav-item>
    <h2>大navItem 激活状态</h2>
    <nav-item :title="a0.title" :imgUrls="a0.imgUrls"></nav-item>
    <h2>大navItem 激活状态 imgName</h2>
    <nav-item :title="a0.title" :imgNames="a0.imgNames"></nav-item>
    <h2>大navItem 非激活状态 imgName</h2>
    <nav-item :title="a0.title" :active="a0.active" :imgNames="a0.imgNames"></nav-item>
    <nav-item :title="a0.title" :active="a0.active" :imgNames="a0.imgNames" :imgUrls="a0.imgUrls"></nav-item>
    <h2>几个大navItem在一起</h2>
    <div class="box">
      <nav-item :title="a0.title" :imgNames="a0.imgNames" :active="a0.active" :imgUrls="a0.imgUrls"></nav-item>
      <nav-item :title="a0.title" :imgNames="a0.imgNames" :imgUrls="a0.imgUrls"></nav-item>
      <nav-item :title="a0.title" :imgNames="a0.imgNames" :active="a0.active" :imgUrls="a0.imgUrls"></nav-item>
      <nav-item :title="a0.title" :imgNames="a0.imgNames" :active="a0.active" :imgUrls="a0.imgUrls"></nav-item>
    </div>
    <h2>小navItem</h2>
    <nav-item :title="a1.title" :area="a1.area" :active="a1.active"></nav-item>
    <h2>小navItem 激活状态</h2>
    <nav-item :title="a1.title" :area="a1.area" :imgUrls="a1.imgUrls"></nav-item>
    <h2>小navItem 激活状态 imgName</h2>
    <nav-item :title="a1.title" :area="a1.area" :imgNames="a1.imgNames"></nav-item>
    <h2>小navItem 非激活状态 imgName</h2>
    <nav-item :title="a1.title" :area="a1.area" :active="a1.active" :imgNames="a1.imgNames"></nav-item>
    <nav-item :title="a1.title" :area="a1.area" :active="a1.active" :imgNames="a1.imgNames" :imgUrls="a1.imgUrls"></nav-item>
    <h2>几个小navItem在一起</h2>
    <div class="box">
      <nav-item :title="a1.title" :area="a1.area" :imgNames="a1.imgNames" :active="a1.active" :imgUrls="a1.imgUrls"></nav-item>
      <nav-item :title="a1.title" :area="a1.area" :imgNames="a1.imgNames" :active="a1.active" :imgUrls="a1.imgUrls"></nav-item>
      <nav-item :title="a1.title" :area="a1.area" :imgNames="a1.imgNames" :imgUrls="a1.imgUrls"></nav-item>
      <nav-item :title="a1.title" :area="a1.area" :imgNames="a1.imgNames" :active="a1.active" :imgUrls="a1.imgUrls"></nav-item>
    </div>
  </div>
</template>

<script>
import { navItem } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
export default {
  props: {},
  data () {
    return {
      a0: {
        imgNames: ['', 'register'],
        imgUrls: ['', ''],
        active: false,
        title: 'title'
        // area:
        // active
        // eventType
        // data
      },
      a1: {
        title: '医生',
        active: false,
        area: 'small',
        imgUrls: [
          icon.logo.x1,
          icon.test.x1
        ]
      }
    }
  },
  computed: {
  },
  components: {
    navItem
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .navItem

    h2
      font-size: .36rem

    .box
      display: flex
      flex-wrap: wrap

</style>
