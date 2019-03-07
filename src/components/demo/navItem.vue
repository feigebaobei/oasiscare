<template>
  <div class="navItem">
    <div class="import">
      <h2>引用</h2>
      <code>import {navItem} from '@/components/oasiscare'</code>
    </div>
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
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { navItem } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
import explainTable from '../../components/explainTabel.vue'
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
      },
      attrs: [
        ['imgNames', 'Array', '[\'\', \'\']', '由图片的名称组成的数组。长度必须为2。0:不选中 1：选中。可见<a href="/appendix/imgs">图片集合</a>附录', '-'],
        ['imgUrls', 'Array', '[\'\', \'\']', '由自定义图片组成的数组。长度必须为2。0:不选中 1：选中。', '-'],
        ['title', 'String', '', '标题', '-'],
        ['area', 'String', 'big', '组件的大小。只能输入big或small.', '-'],
        ['active', 'Boolean', 'true', '是否是激活状态', '-'],
        ['eventType', 'String', '', '点击事件对应的事件', '-'],
        ['data', '-', '{}', '点击事件对应的事件对应的方法的参数', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    navItem,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .navItem

    h2
      font-size: .36rem

    .box
      display: flex
      flex-wrap: wrap

</style>
