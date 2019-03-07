<template>
  <div class="grade">
    <h2>grade</h2>
    <div class="import">
      <h2>引用</h2>
      <code>import {titleArea, fiveEight} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <grade :value="a0.value"></grade>
    <h2>小数</h2>
    <grade :value="a1.value"></grade>
    <h2>负数</h2>
    <grade :value="a2.value"></grade>
    <p style="font-size: .2rem; margin: 0">sss</p>
    <span style="font-size: .2rem">行内元素</span>
    <h2>大于5</h2>
    <grade :value="a3.value"></grade>
    <h2>和其它块级元素一起使用</h2>
    <div class="box">
      <grade :value="a2.value"></grade>
      <p>first</p>
      <p>second</p>
    </div>
    <h2>此组件只能做为块级元素使用。原因与authentication组件一样。</h2>
    <h2>value的显示范围在0-5。</h2>
    <h2>属性说明</h2>
    <explain-table :tds="attrs0"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
    <h2>grade percent</h2>
    <h2>基本样式</h2>
    <grade-percent :percentValue="gp0.percentValue"></grade-percent>
    <h2>控制大小</h2>
    <grade-percent :imgArea="['.8rem', '.8rem']" :percentValue="gp0.percentValue"></grade-percent>
    <grade-percent :imgArea="gp0.imgArea" :percentValue="gp0.percentValue"></grade-percent>
    <h2>自定义图片</h2>
    <grade-percent :imgUrls="gp0.imgUrls" :imgArea="gp0.imgArea" :percentValue="gp0.percentValue"></grade-percent>
    <h2>属性说明</h2>
    <explain-table :tds="attrs1"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { grade, gradePercent } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: {
        value: 2
      },
      a1: {
        value: 2.8
      },
      a2: {
        value: -2
      },
      a3: {
        value: 8
      },
      gp0: {
        imgUrls: [icon.logo.x1, icon.test.x1],
        imgArea: ['1rem', '1rem'],
        percentValue: 70
      },
      attrs0: [
        ['value', 'Number', '0', '表示级别的数字。可以输入任意数字，但只显示[0, 5]内容的数字', '-']
      ],
      attrs1: [
        ['imgUrls', 'Array', '[\'\', \'\']', '由背景图片和前景图片组件的数组。数组长度必须为2。0：背景图片，1：前景图片。', '-'],
        ['imgArea', 'Array', '[\'.28rem\', \'.28rem\']', '由图片的宽高组成的数组。必须有单位。数组长度为2。0：宽，1：高。', '-'],
        ['percentValue', '[String, Number]', '0', '表示当前是x%。', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    grade,
    gradePercent,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .grade

    h2
      font-size: .36rem

    .box
      display: flex
      flex-wrap: wrap
      justify-content: space-between

      p
        margin: 0

</style>
