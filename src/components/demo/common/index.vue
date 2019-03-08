<template>
  <div class="common">
    <p>这里的组件都是较小的。一般不会在项目用到。它们会在较大的组件中用到。</p>
    <h2>imgText</h2>
    <div class="import">
      <h2>引用</h2>
      <code>import {imgText} from '@/components/oasiscare'</code>
    </div>
    <img-text :imgUrl="dataImgText0.imgUrl" :text="dataImgText0.text"></img-text>
    <img-text :imgUrl="dataImgText1.imgUrl" :text="dataImgText1.text"></img-text>
    <h2>label</h2>
    <div class="import">
      <h2>引用</h2>
      <code>import {label} from '@/components/oasiscare'</code>
    </div>
    <h2>属性说明</h2>
    <explain-table :tds="attrs0"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
    <div class="labelBox">
      <label-vue :keyItem="dataLabel0.keyItem"></label-vue>
      <label-vue :keyItem="dataLabel0.keyItem" :keyAlign="dataLabel0.keyAlign"></label-vue>
      <label-vue :keyItem="dataLabel0.keyItem" :keyAlign="'right'"></label-vue>
      <label-vue :keyItem="dataLabel0.keyItem" :keyAlign="'space-around'"></label-vue>
      <label-vue :keyItem="dataLabel0.keyItem" :keyAlign="'space-between'"></label-vue>
      <label-vue :keyItem="dataLabel0.keyItem" :isBold="dataLabel0.isBold"></label-vue>
    </div>
    <h2>属性说明</h2>
    <explain-table :tds="attrs1"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
    <h2>infoBlock</h2>
    <div class="import">
      <h2>引用</h2>
      <code>import {infoBlock} from '@/components/oasiscare'</code>
    </div>
    <info-block :imgUrl="dataImgText1.imgUrl" :value="dataImgText1.text" :title="dataImgText1.text"></info-block>
    <h2>几个在一起</h2>
    <div class="infoBlockbox">
      <info-block :imgUrl="dataImgText1.imgUrl" :value="dataImgText1.value" :title="dataImgText1.text"></info-block>
      <info-block :imgUrl="dataImgText1.imgUrl" :value="dataImgText1.value" :title="dataImgText1.text"></info-block>
      <info-block :imgUrl="dataImgText1.imgUrl" :value="dataImgText1.value" :title="dataImgText1.text"></info-block>
    </div>
    <div class="infoBlockbox2">
      <info-block class="infoBlockItem" :imgUrl="dataImgText1.imgUrl" :value="dataImgText1.value" :title="dataImgText1.text"></info-block>
      <info-block class="infoBlockItem" :imgUrl="dataImgText1.imgUrl" :value="dataImgText1.value" :title="dataImgText1.text"></info-block>
      <info-block class="infoBlockItem" :imgUrl="dataImgText1.imgUrl" :value="dataImgText1.value" :title="dataImgText1.text"></info-block>
    </div>
    <h2>属性说明</h2>
    <explain-table :tds="attrs2"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { imgText, label, infoBlock } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
import explainTable from '../../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      dataImgText0: {
        imgUrl: icon.logo.x1,
        text: 'text'
      },
      dataImgText1: {
        imgUrl: icon.test.x1,
        value: '值',
        text: '文本'
      },
      dataLabel0: {
        keyW: '2rem',
        keyAlign: 'center',
        keyItem: '飞机坦克',
        isBold: true
      },
      attrs0: [
        ['imgUrl', 'String', '', '自定义图片', '-'],
        ['text', 'String', '', '文本', '-'],
        ['eventType', 'String', '', '点击事件对应的事件', '-'],
        ['data', '-', '{}', '点击事件对应的事件对应的方法的参数', '-']
      ],
      attrs1: [
        ['keyW', 'String', '', '宽度，必须有单位。', '-'],
        ['keyAlign', 'String', '', '对齐方式', '-'],
        ['keyItem', 'String', '', '文本', '-'],
        ['isBold', 'Boolean', 'true', '是否加粗', '-']
      ],
      attrs2: [
        ['imgUrl', 'String', '', '自定义图片', '-'],
        ['value', 'String', '', '值', '-'],
        ['valueColor', 'String', '', '值的颜色', '-'],
        ['title', 'String', '', '标题', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    imgText,
    labelVue: label,
    infoBlock,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/style/basic.styl'

  .common
    font-size: .36rem

    h2
      font-size: .36rem

    .labelBox
      font-size: .28rem

    .infoBlockbox
    .infoBlockbox2
      display: flex
      flex-wrap: wrap
      justify-content: space-around

      .infoBlockItem
        flex-basis: 100px
        flex-grow: 1
        flex-shrink: 1

</style>
