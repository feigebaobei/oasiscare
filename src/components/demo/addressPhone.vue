<template>
  <div class="addressPhone">
    <div class="import">
      <h2>引用</h2>
      <code>import {addressPhone} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <address-phone :addressText="a0"></address-phone>
    <address-phone :addressText="a1"></address-phone>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import {addressPhone} from '@/components/oasiscare'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: '北京市朝阳区朝阳公园北路朝阳大街39 号4栋211',
      a1: '北京市朝阳区朝阳公园北路朝阳大街39 号4栋211北京市朝阳区朝阳公园北路朝阳大街39 号4栋211北京市朝阳区朝阳公园北路朝阳大街39 号4栋211北京市朝阳区朝阳公园北路朝阳大街39 号4栋211',
      attrs: [
        ['addressText', 'String', '', '地址', '-'],
        ['hasBottom', 'Boolean', 'true', '是否有下边框', '-'],
        ['eventTypeTel', 'String', '', '点电话按钮时的事件', '-'],
        ['dataTel', '-', '{}', '点电话按钮时的事件对就的方法的参数', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    addressPhone,
    explainTable
  },
  methods: {
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .addressPhone
    // color: red

    h2
      font-size: .36rem

</style>
