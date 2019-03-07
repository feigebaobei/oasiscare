<template>
  <div class="hint">
    <div class="import">
      <h2>引用</h2>
      <code>import {hint} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <hint :imgUrl="a0.imgUrl" :text="a0.text"></hint>
    <h2>极限情况</h2>
    <hint :imgUrl="a1.imgUrl" :text="a1.text"></hint>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { hint } from '@/components/oasiscare'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: {
        imgUrl: '',
        text: '为了更好的为您服务，请准确填写预约信息'
      },
      a1: {
        imgUrl: '',
        text: '为了更好的为您服务，请准确填写预约信好的为您服务，请准确填写预约信好的为您服务，请准确填写预约信息为了更好的为您服务，请准确填写预约信息为了更好的为您服务，请准确填写预约信息'
      },
      attrs: [
        ['imgUrl', 'String', '', '自定义的图片', '-'],
        ['text', 'String', '', '文本', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    hint,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .hint

    h2
      font-size: .36rem

</style>
