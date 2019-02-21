<template>
  <div class="big">
    <h2>基本样式</h2>
    <doctor-card-big :name="a0.name" :post="a0.post" :workTime="a0.workTime" :hasWorkTime="a0.hasWorkTime" :hospital="a0.hospital" :subject="a0.subject" :goodAtKey="a0.goodAtKey" :goodAtValue="a0.goodAtValue" :dataItems="a0.dataItems" :tags="a0.tags"></doctor-card-big>
    <h2>极限样式</h2>
    <doctor-card-big :imgUrl="a1.imgUrl" :name="a1.name" :post="a1.post" :workTime="a1.workTime" :hasWorkTime="a1.hasWorkTime" :hospital="a1.hospital" :subject="a1.subject" :goodAtKey="a1.goodAtKey" :goodAtValue="a1.goodAtValue" :dataItems="a1.dataItems" :tags="a1.tags"></doctor-card-big>
  </div>
</template>

<script>
import { doctorCardBig } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
export default {
  props: {},
  data () {
    return {
      a0: {
        imgUrl: 'imgUrl',
        name: '姚慧臣',
        post: '副主任医师',
        workTime: '12',
        hasWorkTime: true,
        hospital: '泓华互联网医院',
        subject: '妇产科',
        goodAtKey: '擅长：',
        goodAtValue: '急症性脑体病头。',
        dataItems: [
          {
            key: '疗效',
            value: '80'
          },
          {
            key: '态度',
            value: '95'
          }
        ],
        tags: [
          {
            text: '门诊预约',
            color: '#fff',
            borderRadius: '.08rem',
            bg: '#ff961d'
          },
          {
            text: '门诊预约',
            color: '#fff',
            borderRadius: '.08rem',
            bg: '#ff961d'
          }
        ],
      },
      a1: {
        imgUrl: icon.test.x1,
        name: '姚慧臣',
        post: '副主任医师',
        workTime: '12',
        hasWorkTime: true,
        hospital: '泓华互联网医院',
        subject: '妇产科',
        goodAtKey: '擅长：',
        goodAtValue: '急症性脑头晕、锥体病症性脑头晕、锥体病症性脑头晕、锥体病症性脑头晕、锥体病症性脑头晕、锥体病头。',
        dataItems: [
          {
            key: '疗效',
            value: '80'
          },
          {
            key: '态度',
            value: '95'
          }
        ],
        tags: [
          {
            text: '门诊预约',
            color: '#fff',
            borderRadius: '.08rem',
            bg: '#ff961d'
          },
          {
            text: '门诊预约',
            color: '#fff',
            borderRadius: '.08rem',
            bg: '#ff961d'
          },
          {
            text: '门诊预约',
            color: '#fff',
            borderRadius: '.08rem',
            bg: '#ff961d'
          },
          {
            text: '门诊预约',
            color: '#fff',
            borderRadius: '.08rem',
            bg: '#ff961d'
          },
          {
            text: '门诊预约',
            color: '#fff',
            borderRadius: '.08rem',
            bg: '#ff961d'
          },
          {
            text: '门诊预约',
            color: '#fff',
            borderRadius: '.08rem',
            bg: '#ff961d'
          },
          {
            text: '门诊预约',
            color: '#fff',
            borderRadius: '.08rem',
            bg: '#ff961d'
          },
          {
            text: '门诊预约',
            color: '#fff',
            borderRadius: '.08rem',
            bg: '#ff961d'
          }
        ],
      }
    }
  },
  computed: {
  },
  components: {
    doctorCardBig
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .big

    h2
      font-size: .36rem

</style>
