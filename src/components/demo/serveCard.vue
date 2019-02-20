<template>
  <div class="serveCard">
    <h2>服务卡</h2>
    <h2>基本样式</h2>
    <serve-card></serve-card>
    <h2>极限样式</h2>
    <serve-card></serve-card>
    <h2>特色服务卡</h2>
    <h2>基本样式</h2>
    <serve-card-feature :imgUrl="''" :title="a0.title" :name="a0.name" :hospital="a0.hospital" :subTitleKey="a0.subTitleKey" :subTitleValue="a0.subTitleValue" :price="a0.price" :hasPricePrefix="a0.hasPricePrefix"></serve-card-feature>
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
      }
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
