<template>
  <div class="drug">
    <div class="import">
      <h2>引用</h2>
      <code>import {drug} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <drug :title="a0.title" :subTitle="a0.subTitle" :price="a0.price" :hasPricePrefix="a0.hasPricePrefix" :total="a0.total" :hasTotalPrefix="a0.hasTotalPrefix" :times="a0.times"></drug>
    <drug :title="a1.title" :subTitle="a1.subTitle" :price="a1.price" :hasPricePrefix="a1.hasPricePrefix" :total="a1.total" :hasTotalPrefix="a1.hasTotalPrefix" :times="a1.times"></drug>
    <h2>自定义图片</h2>
    <drug :imgUrl="a0.imgUrl" :title="a0.title" :subTitle="a0.subTitle" :price="a0.price" :hasPricePrefix="a0.hasPricePrefix" :total="a0.total" :hasTotalPrefix="a0.hasTotalPrefix" :times="a0.times"></drug>
    <drug :imgUrl="a1.imgUrl" :title="a0.title" :subTitle="a0.subTitle" :price="a0.price" :hasPricePrefix="a0.hasPricePrefix" :total="a0.total" :hasTotalPrefix="a0.hasTotalPrefix" :times="a0.times"></drug>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { drug } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
import explainTable from '../../components/explainTabel.vue'
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
        subTitle: '板蓝根强力银解毒片强',
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
      },
      attrs: [
        ['imgUrl', 'String', '', '自定义图片', '-'],
        ['title', 'String', '', '标题', '-'],
        ['subTitle', 'String', '', '副标题', '-'],
        ['price', '[String, Number]', '', '价格', '-'],
        ['hasPricePrefix', 'Boolean', 'false', '是否有价格前缀。', '-'],
        ['pricePrefix', 'String', '￥', '价格前缀', '-'],
        ['total', '[String, Number]', '', '总量', '-'],
        ['hasTotalPrefix', 'Boolean', 'false', '是否有总量前缀。', '-'],
        ['totalPrefix', 'String', 'x', '总量前缀。', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    drug,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .drug

    h2
      font-size: .36rem

</style>
