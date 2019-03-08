<template>
  <div class="directionItem">
    <div class="import">
      <h2>引用</h2>
      <code>import {directionItem} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <direction-item :keyItem="a0.keyItem"></direction-item>
    <direction-item :keyW="a0.keyW" :keyItem="a0.keyItem" :keyAlign="'right'" :isBold="a0.isBold"></direction-item>
    <direction-item :keyW="a0.keyW" :keyItem="a0.keyItem" :keyAlign="a0.keyAlign"></direction-item>
    <h2>无方向icon</h2>
    <direction-item :keyItem="a0.keyItem" :hasDirectionImg="a0.hasDirectionImg"></direction-item>
    <direction-item :keyItem="a0.keyItem" :hasDirectionImg="a0.hasDirectionImg">
      <p class="insertp">hello world</p>
    </direction-item>
    <h2>插入内容</h2>
    <direction-item :keyItem="a0.keyItem">
      <p>hello world</p>
    </direction-item>
    <direction-item :keyItem="a0.keyItem">
      <p class="insertp">hello world</p>
    </direction-item>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { directionItem } from '@/components/oasiscare'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: {
        keyW: '1.5rem',
        keyItem: '问题反馈',
        keyAlign: 'space-between',
        isBold: true,
        hasDirectionImg: false
      },
      attrs: [
        ['keyW', 'String', '', 'key的宽度', '-'],
        ['keyAlign', 'String', 'left', 'key的对齐方式。可选：\'left\', \'center\', \'right\', \'space-around\', \'space-between\'', '-'],
        ['keyItem', 'String', '', 'key的文本', '-'],
        ['isBold', 'Boolean', 'false', '是否加粗', '-'],
        ['hasDirectionImg', 'Boolean', 'true', '是否有方向按钮', '-'],
        ['directionImgUrl', 'String', '', '自定义方向按钮', '-'],
        ['eventType', 'String', '', '点击这个组件时触发的事件', '-'],
        ['data', '-', '{}', '点击这个组件时触发的事件对应的方法的参数', '-'],
        ['eventTypeDI', 'String', '', '点击这个组件的方向按钮时触发的事件', '-'],
        ['dataDI', '-', '{}', '点击这个组件的方向按钮时触发的事件对应的方法的参数', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    directionItem,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .directionItem

    h2
      font-size: .36rem

    .insertp
      color: #4a4a4a
      font-size: .28rem
      line-height: .4rem
      margin: 0
      text-align: right

</style>
