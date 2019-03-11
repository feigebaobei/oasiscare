<template>
  <div class="signTeamCard">
    <div class="import">
      <h2>引用</h2>
      <code>import {signTeamCard} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <sign-team-card :imgUrl="a0.imgUrl" :title="a0.title" :subTitleKey="a0.subTitleKey" :subTitleValue="a0.subTitleValue" :signTime="a0.signTime" :isSign="a0.isSign"></sign-team-card>
    <sign-team-card :imgUrl="a0.imgUrl" :title="a0.title" :subTitleKey="a0.subTitleKey" :subTitleValue="a0.subTitleValue" :signTime="a0.signTime"></sign-team-card>
    <h2>极限样式</h2>
    <sign-team-card :imgUrl="a1.imgUrl" :title="a1.title" :subTitleKey="a1.subTitleKey" :subTitleValue="a1.subTitleValue" :signTime="a1.signTime" :isSign="a1.isSign"></sign-team-card>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import {signTeamCard} from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: {
        imgUrl: icon.test.x1,
        title: '张京勇团队',
        subTitleKey: '服务对象：',
        subTitleValue: '服务对象服务对象服务对象',
        signTime: '2018-09-27',
        isSign: true
      },
      a1: {
        imgUrl: icon.test.x1,
        title: '张京勇团队张京勇团队张京勇团队张京勇团队',
        subTitleKey: '服务对张京勇团队张京勇团队象：',
        subTitleValue: '服务张京勇团队张京勇团队张京勇团队张京勇团队对象服务对象服务对象',
        signTime: '2018-张京勇团队张京勇团队张京勇团队09-27',
        isSign: true
      },
      attrs: [
        ['imgUrl', 'String', '', '自定义头部图片', '-'],
        ['title', 'String', '', '标题', '-'],
        ['subTitleKey', 'String', '', '副标题的key', '-'],
        ['subTitleValue', 'String', '', '副标题的value', '-'],
        ['signTime', 'String', '', '签约时间', '-'],
        ['isSign', 'Boolean', 'false', '是否签约', '-'],
        ['dirtIcon', 'String', '', '自定义方向图片', '-'],
        ['eventType', 'String', '', '当点击组件时触发的事件', '-'],
        ['data', '-', '{}', '当点击组件时触发的事件对应方法的参数', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    signTeamCard,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .signTeamCard

    h2
      font-size: .36rem

</style>
