<template>
  <div class="addressItem">
    <h2>基本样式</h2>
    <addressItem :title="a0.title" :distance="a0.distance" :subTitle="a0.subTitle"></addressItem>
    <addressItem :title="a1.title" :distance="a1.distance" :subTitle="a1.subTitle" :subTitleHasSeparate="a1.subTitleHasSeparate"></addressItem>
    <h2>极限情况</h2>
    <addressItem :title="a2.title" :distance="a2.distance" :subTitle="a2.subTitle" :subTitleHasSeparate="a2.subTitleHasSeparate"></addressItem>
    <h2>无下边框</h2>
    <addressItem :title="a0.title" :distance="a0.distance" :subTitle="a0.subTitle" :hasBottom="false"></addressItem>
    <addressItem :title="a0.title" :distance="a0.distance" :subTitle="a0.subTitle" :hasBottom="false"></addressItem>
    <addressItem :title="a0.title" :distance="a0.distance" :subTitle="a0.subTitle" :hasBottom="false"></addressItem>
  </div>
</template>

<script>
import {addressItem} from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
export default {
  props: {},
  data () {
    return {
      a0: {
        title: [
          {
            text: '北辰',
            value: '',
            active: false
          },
          {
            text: '汇宾',
            value: '',
            active: false
          },
          {
            text: '大厦极限极限极限极限极限极限',
            value: '',
            active: false
          }
        ],
        distance: '100m',
        subTitle: [
          '北京市', '朝阳区', '北辰路8号院'
        ]
      },
      a1: {
        title: [
          {
            text: '北辰',
            value: '',
            active: false
          },
          {
            text: '汇宾',
            value: '',
            active: true
          },
          {
            text: '大厦极限极限极限极限极限极限',
            value: '',
            active: false
          }
        ],
        distance: '100m',
        subTitle: [
          '北京市', '朝阳区', '北辰路8号院'
        ],
        subTitleHasSeparate: false
      },
      a2: {
        title: [
          {
            text: '北辰',
            value: '',
            active: false
          },
          {
            text: '汇宾',
            value: '',
            active: true
          },
          {
            text: '大厦极限极限极限极限极限极限大厦极限极限极限极限极限极限大厦极限极限极限极限极限极限大厦极限极限极限极限极限极限大厦极限极限极限极限极限极限大厦极限极限极限极限极限极限大厦极限极限极限极限极限极限',
            value: '',
            active: false
          }
        ],
        distance: '100m',
        subTitle: [
          '北京市', '朝阳区', '北辰路8号院', '北辰路8号院', '北辰路8号院', '北辰路8号院', '北辰路8号院', '北辰路8号院', '北辰路8号院', '北辰路8号院', '北辰路8号院', '北辰路8号院', '北辰路8号院', '北辰路8号院'
        ],
        subTitleHasSeparate: false
      }
    }
  },
  computed: {
  },
  components: {
    addressItem
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .addressItem

    h2
      font-size: .36rem

</style>
