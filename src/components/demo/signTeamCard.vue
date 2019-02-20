<template>
  <div class="signTeamCard">
    <h2>基本样式</h2>
    <sign-team-card :imgUrl="a0.imgUrl" :title="a0.title" :subTitleKey="a0.subTitleKey" :subTitleValue="a0.subTitleValue" :signTime="a0.signTime" :isSign="a0.isSign"></sign-team-card>
    <sign-team-card :imgUrl="a0.imgUrl" :title="a0.title" :subTitleKey="a0.subTitleKey" :subTitleValue="a0.subTitleValue" :signTime="a0.signTime"></sign-team-card>
    <h2>极限样式</h2>
    <sign-team-card :imgUrl="a1.imgUrl" :title="a1.title" :subTitleKey="a1.subTitleKey" :subTitleValue="a1.subTitleValue" :signTime="a1.signTime" :isSign="a1.isSign"></sign-team-card>
  </div>
</template>

<script>
import {signTeamCard} from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
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
      }
    }
  },
  computed: {
  },
  components: {
    signTeamCard
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .signTeamCard

    h2
      font-size: .36rem

</style>
