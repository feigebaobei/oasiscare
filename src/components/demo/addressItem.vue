<template>
  <div class="addressItem">
    <div class="import">
      <h2>引用</h2>
      <code>import {addressItem} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <addressItem :title="a0.title" :distance="a0.distance" :subTitle="a0.subTitle"></addressItem>
    <addressItem :title="a1.title" :distance="a1.distance" :subTitle="a1.subTitle" :subTitleHasSeparate="a1.subTitleHasSeparate"></addressItem>
    <h2>极限情况</h2>
    <addressItem :title="a2.title" :distance="a2.distance" :subTitle="a2.subTitle" :subTitleHasSeparate="a2.subTitleHasSeparate"></addressItem>
    <h2>无下边框</h2>
    <addressItem :title="a0.title" :distance="a0.distance" :subTitle="a0.subTitle" :hasBottom="false"></addressItem>
    <addressItem :title="a0.title" :distance="a0.distance" :subTitle="a0.subTitle" :hasBottom="false"></addressItem>
    <addressItem :title="a0.title" :distance="a0.distance" :subTitle="a0.subTitle" :hasBottom="false"></addressItem>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import {addressItem} from '@/components/oasiscare'
import explainTable from '../../components/explainTabel.vue'
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
      },
      attrs: [
        ['title', 'Array', '[]', '描述标题的对象组成的数组。用于标题。例：<code>[{text: \'\', value: \'\', active: \'\'}]</code>。text: 文本，value： 值，active：是否是激活状态。', '-'],
        ['distance', '[String, Number]', '', '距离的文本', '-'],
        ['subTitle', 'Array', '[\'\']', '由基本数据类型组成的数组。用于副标题。例：<code>[\'string\', true, 123]</code>', '-'],
        ['subTitleHasSeparate', 'Boolean', 'true', '副标题是否有间隔', '-'],
        ['hasBottom', 'Boolean', 'true', '是否有下边框', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    addressItem,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .addressItem

    h2
      font-size: .36rem

</style>
