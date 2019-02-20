<template>
  <div class="serveCard">
    <h2>服务卡</h2>
    <h2>基本样式</h2>
    <serve-card :imgUrl="a2.imgUrl" :title="a2.title" :subTitle="a2.subTitle" :tags="a2.tags" :currency="a2.currency" :unit="a2.unit" :originPrice="a2.originPrice" :price="a2.price" :paidNumber="a2.paidNumber"></serve-card>
    <h2>极限样式</h2>
    <serve-card :imgUrl="a3.imgUrl" :title="a3.title" :subTitle="a3.subTitle" :tags="a3.tags" :currency="a3.currency" :unit="a3.unit" :originPrice="a3.originPrice" :price="a3.price" :paidNumber="a3.paidNumber"></serve-card>
    <h2>特色服务卡</h2>
    <h2>基本样式</h2>
    <serve-card-feature :imgUrl="''" :title="a0.title" :name="a0.name" :hospital="a0.hospital" :price="a0.price" :hasPricePrefix="a0.hasPricePrefix"></serve-card-feature>
    <serve-card-feature :imgUrl="''" :title="a4.title" :name="a4.name" :hospital="a4.hospital" :subTitleKey="a0.subTitleKey" :subTitleValue="a0.subTitleValue" :price="a4.price" :hasPricePrefix="a4.hasPricePrefix" :pricePrefix="a4.pricePrefix"></serve-card-feature>
    <h2>极限样式</h2>
    <serve-card-feature :imgUrl="a1.imgUrl" :title="a1.title" :name="a1.name" :hospital="a1.hospital" :subTitleKey="a1.subTitleKey" :subTitleValue="a1.subTitleValue" :price="a1.price" :hasPricePrefix="a1.hasPricePrefix" :pricePrefix="a1.pricePrefix"></serve-card-feature>
  </div>
</template>

<script>
import {serveCard, serveCardFeature} from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
export default {
  props: {},
  data () {
    return {
      a0: {
        imgUrl: 'imgUrl',
        title: 'title',
        name: 'name',
        hospital: 'hospital',
        subTitleKey: 'subTitleKey',
        subTitleValue: 'subTitleValue',
        price: '581',
        hasPricePrefix: false,
        pricePrefix: '$'
      },
      a1: {
        imgUrl: icon.logo.x1,
        title: '转/面诊咨询极限询极限询极限极限极',
        name: '贺学友',
        hospital: '解放军医院解放军医院解放军医院解放军医院',
        subTitleKey: '对症疾病：',
        subTitleValue: '腰椎间盘突出症、颈突出症、颈椎',
        price: '581',
        hasPricePrefix: false,
        pricePrefix: '$'
      },
      a2: {
        imgUrl: icon.logo.x1,
        title: '转/面诊咨极',
        subTitle: '每次服务时长预计90分钟以内',
        tags: [
          {
            text: 'first',
            color: '#fff',
            borderRadius: '0.08rem',
            bg: '#ffa81a',
            area: 'big',
            eventType: '',
            data: {}
          }
        ],
        currency: '￥',
        unit: '/次',
        originPrice: '$234',
        paidNumber: '已售234',
        price: '2342'
      },
      a3: {
        imgUrl: icon.logo.x1,
        title: '转/面诊咨极面诊咨极',
        subTitle: '每次服务时长预计90分钟以内每次服务时长预计90分钟以内',
        tags: [
          {
            text: 'first',
            color: '#fff',
            borderRadius: '0.08rem',
            bg: '#ffa81a',
            area: 'big',
            eventType: '',
            data: {}
          },
          {
            text: 'first',
            color: '#fff',
            borderRadius: '0.08rem',
            bg: '#ffa81a',
            area: 'big',
            eventType: '',
            data: {}
          },
          {
            text: 'first',
            color: '#fff',
            borderRadius: '0.08rem',
            bg: '#ffa81a',
            area: 'big',
            eventType: '',
            data: {}
          },
          {
            text: 'first',
            color: '#fff',
            borderRadius: '0.08rem',
            bg: '#ffa81a',
            area: 'big',
            eventType: '',
            data: {}
          }
        ],
        currency: '￥',
        unit: '/次',
        originPrice: '$234',
        paidNumber: '已售234',
        price: '2342'
      },
      a4: {
        imgUrl: '',
        title: '蜥蜴',
        name: '林梦',
        hospital: '中医院',
        subTitleKey: '对症疾病：',
        subTitleValue: '腰椎间盘突出症、颈椎腰椎间盘突出症、颈椎腰椎间盘突出症、颈椎',
        price: '581',
        hasPricePrefix: false,
        pricePrefix: '$'
      },
    }
  },
  computed: {
  },
  components: {
    serveCard,
    serveCardFeature
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .serveCard

    h2
      font-size: .36rem

</style>
