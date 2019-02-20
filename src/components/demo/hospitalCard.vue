<template>
  <div class="hospitalCard">
    <h2>基本样式</h2>
    <hospital-card :title="a0.title" :hasAuthenticationIcon="a0.hasAuthenticationIcon" :hasHealthTag="a0.hasHealthTag" :hasBusinessTab="a0.hasBusinessTab" :address="a0.address" :distance="a0.distance" :tags="a0.tags" :grade="a0.grade"></hospital-card>
    <h2>极限样式</h2>
    <hospital-card :imgUrl="a1.imgUrl" :title="a1.title" :hasAuthenticationIcon="a1.hasAuthenticationIcon" :hasHealthTag="a1.hasHealthTag" :hasBusinessTab="a1.hasBusinessTab" :address="a1.address" :distance="a1.distance" :tags="a1.tags" :grade="a1.grade"></hospital-card>
  </div>
</template>

<script>
import { hospitalCard } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
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
      }
    }
  },
  computed: {
  },
  components: {
    hospitalCard
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .hospitalCard

    h2
      font-size: .36rem

</style>
