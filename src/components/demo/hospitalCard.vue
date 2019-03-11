<template>
  <div class="hospitalCard">
    <div class="import">
      <h2>引用</h2>
      <code>import {hospitalCard} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <hospital-card :title="a0.title" :hasAuthenticationIcon="a0.hasAuthenticationIcon" :hasHealthTag="a0.hasHealthTag" :hasBusinessTab="a0.hasBusinessTab" :address="a0.address" :distance="a0.distance" :tags="a0.tags" :grade="a0.grade"></hospital-card>
    <h2>极限样式</h2>
    <hospital-card :imgUrl="a1.imgUrl" :title="a1.title" :hasAuthenticationIcon="a1.hasAuthenticationIcon" :hasHealthTag="a1.hasHealthTag" :hasBusinessTab="a1.hasBusinessTab" :address="a1.address" :distance="a1.distance" :tags="a1.tags" :grade="a1.grade"></hospital-card>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { hospitalCard } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: {
        title: '泓华朝阳公园朝阳',
        hasAuthenticationIcon: true,
        hasHealthTag: true,
        hasBusinessTab: true,
        address: '朝阳区 建外SOHO',
        distance: '1235km',
        tags: ['神经内科', '神经内科', '神经内科'],
        grade: 3
      },
      a1: {
        imgUrl: icon.test.x1,
        title: '泓华朝阳公园朝阳泓华朝阳公园朝阳',
        hasAuthenticationIcon: true,
        hasHealthTag: true,
        hasBusinessTab: true,
        address: '朝阳区 建外SOHO朝阳区 建外SOHO朝阳区 建外SOHO',
        distance: '1235km',
        tags: ['神经内科', '神经内科', '神经内科', '神经内科', '神经内科', '神经内科'],
        grade: 300
      },
      attrs: [
        ['imgUrl', 'String', '', '自定义图片', '-'],
        ['title', 'String', '', '标题', '-'],
        ['hasAuthenticationIcon', 'Boolean', 'false', '是否有认证icon', '-'],
        ['hasHealthTag', 'Boolean', 'false', '是否有医保', '-'],
        ['hasBusinessTab', 'Boolean', 'false', '是否有商保', '-'],
        ['address', 'String', '', '地址', '-'],
        ['distance', 'String', '', '距离', '-'],
        ['tags', 'Array', '[]', '由标签的对象组成的数组。例：<code>[{key: \'\', text: \'\', color: \'\', border: \'\', borderRadius: \'\'}]</code>。参数详情见<a href="#/hardCorner">hardCorner</a>', '-'],
        ['grade', 'Number', '-', '级别', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    hospitalCard,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .hospitalCard

    h2
      font-size: .36rem

</style>
