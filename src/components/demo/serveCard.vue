<template>
  <div class="serveCard">
    <div class="import">
      <h2>引用</h2>
      <code>import {serveCard, serveCardFeature} from '@/components/oasiscare'</code>
    </div>
    <h2>服务卡</h2>
    <h2>基本样式</h2>
    <serve-card :imgUrl="a2.imgUrl" :title="a2.title" :subTitle="a2.subTitle" :tags="a2.tags" :currency="a2.currency" :unit="a2.unit" :originPrice="a2.originPrice" :price="a2.price" :paidNumber="a2.paidNumber"></serve-card>
    <h2>极限样式</h2>
    <serve-card :imgUrl="a3.imgUrl" :title="a3.title" :subTitle="a3.subTitle" :tags="a3.tags" :currency="a3.currency" :unit="a3.unit" :originPrice="a3.originPrice" :price="a3.price" :paidNumber="a3.paidNumber"></serve-card>
    <h2>属性说明</h2>
    <explain-table :tds="attrs0"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
    <h2>特色服务卡</h2>
    <h2>基本样式</h2>
    <serve-card-feature :imgUrl="''" :title="a0.title" :name="a0.name" :hospital="a0.hospital" :price="a0.price" :hasPricePrefix="a0.hasPricePrefix"></serve-card-feature>
    <serve-card-feature :imgUrl="''" :title="a4.title" :name="a4.name" :hospital="a4.hospital" :subTitleKey="a0.subTitleKey" :subTitleValue="a0.subTitleValue" :price="a4.price" :hasPricePrefix="a4.hasPricePrefix" :pricePrefix="a4.pricePrefix"></serve-card-feature>
    <h2>极限样式</h2>
    <serve-card-feature :imgUrl="a1.imgUrl" :title="a1.title" :name="a1.name" :hospital="a1.hospital" :subTitleKey="a1.subTitleKey" :subTitleValue="a1.subTitleValue" :price="a1.price" :hasPricePrefix="a1.hasPricePrefix" :pricePrefix="a1.pricePrefix"></serve-card-feature>
    <h2>属性说明</h2>
    <explain-table :tds="attrs1"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import {serveCard, serveCardFeature} from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
import explainTable from '../../components/explainTabel.vue'
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
      attrs0: [
        ['imgUrl', 'String', '', '自定义图片', '-'],
        ['title', 'String', '', '标题', '-'],
        ['tags', 'String', '', '由按钮对象组成的数组。例：<code>[{text: \'\', color: \'\', borderRadius: \'\', bg: \'\', area: \'\', eventType: \'\', data: {}}]</code>。\'text\', \'color\', \'borderRadius\', \'bg\', \'area\', \'eventType\', \'data\'(说明见<a href="#/hardCorner">hardCorner</a>)', '-'],
        ['currency', 'String', '', '货币符号', '-'],
        ['price', '[String, Number]', '', '价格', '-'],
        ['unit', 'String', '', '单位。例： \'/次\'', '-'],
        ['originPrice', 'String', '', '原来的价格', '-'],
        ['hasOriginPrice', 'Boolean', 'true', '是否有原来的价格', '-'],
        ['paidNumber', 'String', '', '已售数量', '-'],
        ['hasPaidNumber', 'Boolean', 'true', '是否有已售数量', '-'],
        ['subTitle', 'String', '', '副标题', '-'],
        ['eventType', 'String', '', '当点击组件时触发的事件', '-'],
        ['data', '-', '{}', '当点击组件时触发的事件对应方法的参数', '-']
      ],
      attrs1: [
        ['imgUrl', 'String', '', '自定义图片', '-'],
        ['title', 'String', '', '标题', '-'],
        ['name', 'String', '', '姓名', '-'],
        ['hospital', 'String', '', '医院', '-'],
        ['subTitleKey', 'String', '', '副标题的key', '-'],
        ['subTitleValue', 'String', '', '副标题的value', '-'],
        ['price', 'String', '', '价格', '-'],
        ['hasPricePrefix', 'Boolean', 'true', '是否有价格前缀', '-'],
        ['pricePrefix', 'String', '', '价格前缀', '-'],
        ['eventType', 'String', '', '当点击组件时触发的事件', '-'],
        ['data', '-', '{}', '当点击组件时触发的事件对应方法的参数', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    serveCard,
    serveCardFeature,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .serveCard

    h2
      font-size: .36rem

</style>
