<template>
  <div class="recordCard">
    <h2>基本样式</h2>
    <record-card :identity="a0.identity" :name="a0.name" :post="a0.post" :imgUrl="a0.imgUrl" :workTime="a0.workTime" :hospital="a0.hospital" :subject="a0.subject" :dataItems="a0.dataItems" :eventType="a0.eventType" :data="a0.data" @m0="m0" :eventTypeHistory="a0.eventTypeHistory" :dataHistory="a0.dataHistory" @m1="m1" :eventTypeEvaluate="a0.eventTypeEvaluate" :dataEvaluate="a0.dataEvaluate" @m2="m2"></record-card>
    <record-card :identity="a1.identity" :name="a1.name" :post="a1.post" :imgUrl="a1.imgUrl" :workTime="a1.workTime" :hospital="a1.hospital" :subject="a1.subject" :dataItems="a1.dataItems" :hasUp="a1.hasUp" :hasCaseHistoryInfo="a1.hasCaseHistoryInfo" :eventType="a1.eventType" :data="a1.data" @m0="m0" :eventTypeHistory="a1.eventTypeHistory" :dataHistory="a1.dataHistory" @m1="m1" :eventTypeEvaluate="a1.eventTypeEvaluate" :dataEvaluate="a1.dataEvaluate" @m2="m2"></record-card>
  </div>
</template>

<script>
import { recordCard } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
export default {
  props: {},
  data () {
    return {
      a0: {
        identity: '医生',
        name: '姚慧臣',
        post: '副主任医师',
        imgUrl: icon.test.x1,
        workTime: 22,
        hospital: '泓华互联网医院',
        subject: '妇产科',
        dataItems: [
          {
            keyW: '1.2rem',
            keyAlign: 'space-between',
            keyItem: '患者',
            value: '王健林'
          },
          {
            keyW: '1.2rem',
            keyAlign: 'space-between',
            keyItem: '视频时间',
            value: '2018-06-08 16:28 星期五'
          },
          {
            keyW: '1.2rem',
            keyAlign: 'space-between',
            keyItem: '视频时长',
            value: '1小时10分48秒'
          }
        ],
        hasCaseHistoryInfo: true,
        eventType: 'm0',
        data: 'data',
        eventTypeHistory: 'm1',
        dataHistory: 'dataHistory',
        eventTypeEvaluate: 'm2',
        dataEvaluate: 'dataEvaluate'
      },
      a1: {
        identity: 'user',
        name: '姚慧臣',
        post: '副主任医师',
        imgUrl: icon.test.x1,
        workTime: 12,
        hospital: '泓华互联网医院',
        subject: '妇产科',
        dataItems: [
          {
            keyW: '1.2rem',
            keyAlign: 'space-between',
            keyItem: '患者',
            value: '王健林'
          },
          {
            keyW: '1.2rem',
            keyAlign: 'space-between',
            keyItem: '视频时间',
            value: '2018-06-08 16:28 星期五'
          },
          {
            keyW: '1.2rem',
            keyAlign: 'space-between',
            keyItem: '视频时长',
            value: '1小时10分48秒'
          }
        ],
        hasUp: true,
        hasCaseHistoryInfo: true,
        eventType: 'm0',
        data: 'data',
        eventTypeHistory: 'm1',
        dataHistory: 'dataHistory',
        eventTypeEvaluate: 'm2',
        dataEvaluate: 'dataEvaluate'
      }
    }
  },
  computed: {
  },
  components: {
    recordCard
  },
  methods: {
    m0 (data) {
      alert(data)
    },
    m1 (data) {
      alert(data)
    },
    m2 (data) {
      alert(data)
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .recordCard

    h2
      font-size: .36rem

</style>
