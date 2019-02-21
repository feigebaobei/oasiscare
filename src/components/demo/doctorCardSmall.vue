<template>
  <div class="doctorCardSmall">
    <h2>基本样式</h2>
    <doctor-card-small :isLeader="a0.isLeader" :imgUrl="a0.imgUrl" :name="a0.name" :post="a0.post" :workTime="a0.workTime"></doctor-card-small>
    <h2>多个在一起</h2>
    <div class="box">
      <doctor-card-small :imgUrl="a0.imgUrl" :name="a0.name" :post="a0.post" :workTime="a0.workTime"></doctor-card-small>
      <doctor-card-small :imgUrl="a0.imgUrl" :name="a0.name" :post="a0.post" :workTime="a0.workTime"></doctor-card-small>
      <doctor-card-small :imgUrl="a0.imgUrl" :name="a0.name" :post="a0.post" :workTime="a0.workTime"></doctor-card-small>
    </div>
  </div>
</template>

<script>
import { doctorCardSmall } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
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
      }
    }
  },
  computed: {
  },
  components: {
    doctorCardSmall
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .doctorCardSmall

    h2
      font-size: .36rem

    .box
      display: flex
      flex-wrap: wrap
      justify-content: space-around

</style>
