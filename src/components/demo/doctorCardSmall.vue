<template>
  <div class="doctorCardSmall">
    <div class="import">
      <h2>引用</h2>
      <code>import {doctorCardSmall} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <doctor-card-small :isLeader="a0.isLeader" :imgUrl="a0.imgUrl" :name="a0.name" :post="a0.post" :workTime="a0.workTime"></doctor-card-small>
    <h2>多个在一起</h2>
    <div class="box">
      <doctor-card-small :imgUrl="a0.imgUrl" :name="a0.name" :post="a0.post" :workTime="a0.workTime"></doctor-card-small>
      <doctor-card-small :imgUrl="a0.imgUrl" :name="a0.name" :post="a0.post" :workTime="a0.workTime"></doctor-card-small>
      <doctor-card-small :imgUrl="a0.imgUrl" :name="a0.name" :post="a0.post" :workTime="a0.workTime"></doctor-card-small>
    </div>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { doctorCardSmall } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: {
        isLeader: true,
        imgUrl: icon.test.x1,
        name: '王超',
        post: '门诊科主任',
        workTime: '22'
      },
      attrs: [
        ['isLeader', 'Boolean', 'false', '是否是leader', '-'],
        ['imgUrl', 'String', '', '自定义图片', '-'],
        ['authenText', 'String', '', '认证的文本', '-'],
        ['name', 'String', '', '姓名', '-'],
        ['post', 'String', '', '科室', '-'],
        ['workTime', '[String, Number]', '0', '工龄', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    doctorCardSmall,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .doctorCardSmall

    h2
      font-size: .36rem

    .box
      display: flex
      flex-wrap: wrap
      justify-content: space-around

</style>
