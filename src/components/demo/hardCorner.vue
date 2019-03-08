<template>
  <div class="hardCorner">
    <div class="import">
      <h2>引用</h2>
      <code>import {hardCorner} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <hard-corner :text="a0.text" :color="a0.color" :border="a0.border" :borderRadius="a0.borderRadius" :bg="a0.bg" :area="a0.area"></hard-corner>
    <hard-corner :text="'小标准'" :color="a0.color" :border="a0.border" :borderRadius="a0.borderRadius" :bg="a0.bg" :area="a0.area"></hard-corner>
    <hard-corner :text="a0.text" :color="a0.color" :border="a0.border" :borderRadius="a0.borderRadius" :bg="a0.bg" :area="a1.area"></hard-corner>
    <hard-corner :text="'中标准'" :color="a0.color" :border="a0.border" :borderRadius="a0.borderRadius" :bg="a0.bg" :area="a1.area"></hard-corner>
    <hard-corner :text="a0.text" :color="a0.color" :border="a0.border" :borderRadius="a0.borderRadius" :bg="a0.bg"></hard-corner>
    <hard-corner :text="'大标准'" :color="a0.color" :border="a0.border" :borderRadius="a0.borderRadius" :bg="a0.bg"></hard-corner>
    <h2>改变bg</h2>
    <hard-corner :text="a0.text" :color="a0.color" :border="a0.border" :borderRadius="a0.borderRadius" :bg="a0.bg" :area="a0.area"></hard-corner>
    <hard-corner :text="a1.text" :color="a1.color" :border="a1.border" :borderRadius="a1.borderRadius" :bg="a1.bg" :area="a1.area"></hard-corner>
    <hard-corner :text="a2.text" :color="a2.color" :border="a2.border" :borderRadius="a2.borderRadius" :bg="a2.bg" :area="a2.area"></hard-corner>
    <hard-corner :text="a2.text" :color="a2.color" :border="a2.border" :borderRadius="a2.borderRadius" :area="a2.area"></hard-corner>
    <h2>改变border</h2>
    <hard-corner :text="a0.text" :color="a0.color" :border="a0.border" :borderRadius="a0.borderRadius" :bg="a0.bg" :area="a0.area" :maxW="a0.maxW" :minW="a0.minW"></hard-corner>
    <hard-corner :text="a0.text" :color="a0.color" :bg="a0.bg" :area="a0.area"></hard-corner>
    <h2>改变border-radius</h2>
    <hard-corner :text="a0.text" :color="a0.color" :bg="a0.bg" :borderRadius="a0.borderRadius" :area="a0.area"></hard-corner>
    <hard-corner :text="a1.text" :color="a1.color" :bg="a1.bg" :borderRadius="a1.borderRadius" :area="a1.area"></hard-corner>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import {hardCorner} from '@/components/oasiscare'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: {
        text: 'text',
        color: '#fff',
        border: 'none',
        borderRadius: '0.04rem',
        bg: '#8BBFFC',
        area: 'small',
        maxW: '2rem',
        minW: '1rem'
      },
      a1: {
        text: 'text',
        color: '#fff',
        border: '2px solid #ff9f00',
        borderRadius: '0.08rem',
        bg: '#87CD72',
        area: 'middle',
        maxW: '2rem',
        minW: '1rem'
      },
      a2: {
        text: 'text',
        color: '#fff',
        border: '2px solid #d8d8d8',
        borderRadius: '0.04rem',
        bg: 'linear-gradient(to right, #ff7461, #ff9261)',
        area: 'big',
        maxW: '2rem',
        minW: '1rem'
      },
      a3: {
        text: 'text',
        color: '#fff',
        border: 'none',
        borderRadius: '0.04rem',
        bg: '#8BBFFC',
        area: 'small',
        maxW: '2rem',
        minW: '1rem'
      },
      attrs: [
        ['text', 'String', '', '文本', '-'],
        ['color', 'String', '', '文本的颜色', '-'],
        ['border', 'String', 'none', '边框', '-'],
        ['borderRadius', 'String', '.04rem', '边框圆角', '-'],
        ['maxW', 'String', '', '最大宽度', '-'],
        ['minW', 'String', '', '最小宽度', '-'],
        ['bg', 'String', '', '背景', '-'],
        ['area', 'String', 'big', '大小。只选项有：\'big\': 36, \'middle\': 32, \'small\': 28', '-'],
        ['eventType', 'String', '', '当点击时触发的事件', '-'],
        ['data', '-', '{}', '当点击时触发的事件对应方法的参数', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    hardCorner,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

.hardCorner

  h2
    font-size: .36rem

</style>
