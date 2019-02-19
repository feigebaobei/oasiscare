<template>
  <div class="orderInfoItem">
    <h2>基本样式</h2>
    <order-info-item :title="a0.title" :price="a0.price" :hasPricePrefix="a0.hasPricePrefix" :total="a0.total" :hasTotalPrefix="a0.hasTotalPrefix" :times="a0.times"></order-info-item>
    <order-info-item :title="a1.title" :price="a1.price" :hasPricePrefix="a0.hasPricePrefix" :total="a1.total" :hasTotalPrefix="a0.hasTotalPrefix" :times="a1.times"></order-info-item>
    <h2>自定义图片</h2>
    <order-info-item :imgUrl="a0.imgUrl" :title="a0.title" :price="a0.price" :total="a0.total" :times="a0.times"></order-info-item>
    <order-info-item :imgUrl="a1.imgUrl" :title="a1.title" :price="a1.price" :total="a1.total" :times="a1.times"></order-info-item>
    <h2>极限样式</h2>
    <order-info-item :title="a2.title" :price="a2.price" :total="a2.total" :times="a2.times"></order-info-item>
  </div>
</template>

<script>
import { orderInfoItem } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
export default {
  props: {},
  data () {
    return {
      a0: {
        imgUrl: icon.logo.x1,
        title: 'title',
        subTitle: 'subTitle',
        price: '123',
        hasPricePrefix: true,
        prefix: '￥',
        total: '2',
        hasTotalPrefix: true,
        times: ['2018-12-03', '2019-03-02']
      },
      a1: {
        imgUrl: icon.test.x1,
        title: '板蓝根强力银翘解毒片强板蓝根强力银翘解毒片强 ',
        subTitle: 'subTitle',
        price: '345',
        hasPrefix: true,
        prefix: '￥',
        total: '5',
        times: ['start', 'end']
      },
      a2: {
        imgUrl: icon.logo.x1,
        title: '板蓝根强力银翘解毒片强板蓝根强力银翘解，毒片强板蓝根强力银翘解，毒片强板蓝根强力银翘解毒片强 ',
        subTitle: 'subTitle',
        price: '348456.2345',
        hasPrefix: true,
        prefix: '￥',
        total: '5',
        times: ['2018-12-032019-03-02', '2019-03-022019-03-02']
      }
    }
  },
  computed: {
  },
  components: {
    orderInfoItem
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .orderInfoItem

    h2
      font-size: .36rem

</style>
