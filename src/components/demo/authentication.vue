<template>
  <div class="authentication">
    <div class="import">
      <h2>引用</h2>
      <code>import {authentication, authenMedicine} from '@/components/oasiscare'</code>
    </div>
    <h2>authentication</h2>
    <h2>默认值</h2>
    <!-- <div class="inline"> -->
      <authentication></authentication>
    <!-- </div> -->
    <h2>自定义值</h2>
    <authentication :text="a0.text"></authentication>
    <h2>与基本元素一起使用时</h2>
    <authentication :text="a0.text"></authentication>
    <span style="font-size: .2rem">基本元素</span>
    <h2>为使用这个组件的父元素设置宽度</h2>
    <authentication :text="a0.text"></authentication>
    <h2>和其它块级元素一起使用</h2>
    <div class="box">
      <authentication :text="a0.text"></authentication>
      <p>first</p>
      <p>second</p>
    </div>
    <h2>提示: 因为这个组件内部都是行内元素。所以这个组件必须做成块级元素。若不做为块级元素会受到父元素的字号样式影响。</h2>
    <h2>因此该组件只能做为块级元素使用</h2>
    <h2>属性说明</h2>
    <explain-table :tds="attrs0"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
    <h2>authenMedicine</h2>
    <h2>默认值</h2>
    <authen-medicine></authen-medicine>
    <h2>自定义值</h2>
    <authen-medicine :text="a0.text"></authen-medicine>
    <h2>属性说明</h2>
    <explain-table :tds="attrs1"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { authentication, authenMedicine } from '@/components/oasiscare'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: {
        text: 'sss'
      },
      a1: {
        text: 'text'
      },
      a2: {
        text: 'welcome'
      },
      attrs0: [
        ['imgUrl', 'String', '', '自定义输入的图片', '-'],
        ['text', 'String', '全球医联体认证', '显示的文本', '-']
      ],
      attrs1: [
        ['text', 'String', '认证', '显示的文本', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    authentication,
    authenMedicine,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

.authentication

  h2
    font-size: .36rem

  .inline
    display: inline-block

  .aBox
    width: .85rem
    display: inline-block

  .box
    display: flex
    flex-wrap: wrap
    justify-content: space-between

    p
      margin: 0

</style>
