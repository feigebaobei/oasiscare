<template>
  <div class="hospitalCardInfo">
    <div class="import">
      <h2>引用</h2>
      <code>import {hospitalCardInfo} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <hospital-card-info :title="a0.title" :hasAuthentication="a0.hasAuthentication" :hasHealth="a0.hasHealth" :hasBusiness="a0.hasBusiness" :gradeValue="a0.gradeValue" :timeDay="a0.timeDay" :time="a0.time" :hasIntroduce="a0.hasIntroduce"></hospital-card-info>
    <h2>无简介</h2>
    <hospital-card-info :title="a0.title" :hasAuthentication="a0.hasAuthentication" :hasHealth="a0.hasHealth" :hasBusiness="a0.hasBusiness" :gradeValue="a0.gradeValue" :timeDay="a0.timeDay" :time="a0.time" :hasIntroduce="a1.hasIntroduce"></hospital-card-info>
    <h2>极限样式</h2>
    <hospital-card-info :title="a1.title" :hasAuthentication="a1.hasAuthentication" :hasHealth="a1.hasHealth" :hasBusiness="a1.hasBusiness" :gradeValue="a1.gradeValue" :timeDay="a1.timeDay" :time="a1.time" :hasIntroduce="a1.hasIntroduce"></hospital-card-info>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { hospitalCardInfo } from '@/components/oasiscare'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: {
        title: '泓华国际医疗中心',
        hasAuthentication: true,
        hasHealth: true,
        hasBusiness: true,
        gradeValue: 3,
        timeDay: '周一到周日',
        time: '09:00-20:00',
        hasIntroduce: true
      },
      a1: {
        title: '泓华国际医疗中心泓华国际医疗中心泓华国际医疗中心',
        hasAuthentication: true,
        hasHealth: false,
        hasBusiness: true,
        gradeValue: 3,
        timeDay: '周一到周日周一到周日周一到周日周一到周日',
        time: '09:00-20:0009:00-20:0009:00-20:00',
        hasIntroduce: false
      },
      attrs: [
        ['title', 'String', '', '标题', '-'],
        ['hasAuthentication', 'Boolean', 'false', '是否有认证', '-'],
        ['hasHealth', 'Boolean', 'false', '是否有医保', '-'],
        ['hasBusiness', 'Boolean', 'false', '是否有商保', '-'],
        ['gradeValue', 'Number', '0', '级别', '-'],
        ['timeDay', 'String', '', '日期', '-'],
        ['time', 'String', '', '时间', '-'],
        ['hasIntroduce', 'Boolean', 'true', '是否有介绍按钮', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    hospitalCardInfo,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .hospitalCardInfo

    h2
      font-size: .36rem

</style>
