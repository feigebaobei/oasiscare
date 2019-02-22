<template>
  <div class="info">
    <h2>基本样式</h2>
    <doctor-card-info :imgUrl="a0.imgUrl" :name="a0.name" :isLeader="a0.isLeader" :post="a0.post" :hospital="a0.hospital" :hasSubject="a0.hasSubject" :subject="a0.subject" :dataItems="a0.dataItems"></doctor-card-info>
  </div>
</template>

<script>
import { doctorCardInfo } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
export default {
  props: {},
  data () {
    return {
      a0: {
        imgUrl: icon.test.x1,
        name: '李敏敏',
        isLeader: true,
        post: '副主任医师',
        hospital: '中国人民解放军总医院',
        hasSubject: true,
        subject: '外科',
        dataItems: [
          {
            imgUrl: icon.test.x1,
            value: '80%',
            valueColor: '#4ca866',
            title: '疗效'
          },
          {
            imgUrl: icon.logo.x1,
            value: '80%',
            valueColor: '#4ca866',
            title: '疗效'
          },
          {
            imgUrl: icon.test.x1,
            value: '80%',
            valueColor: '#4ca866',
            title: '疗效'
          }
        ]
      }
    }
  },
  computed: {
  },
  components: {
    doctorCardInfo
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .info

    h2
      font-size: .36rem

</style>
