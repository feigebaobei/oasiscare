<template>
  <div class="common">
    <h2>imgText</h2>
    <img-text :imgUrl="dataImgText0.imgUrl" :text="dataImgText0.text"></img-text>
    <img-text :imgUrl="dataImgText1.imgUrl" :text="dataImgText1.text"></img-text>
    <h2>label</h2>
    <div class="labelBox">
      <label-vue :keyItem="dataLabel0.keyItem"></label-vue>
      <label-vue :keyItem="dataLabel0.keyItem" :keyAlign="dataLabel0.keyAlign"></label-vue>
      <label-vue :keyItem="dataLabel0.keyItem" :keyAlign="'right'"></label-vue>
      <label-vue :keyItem="dataLabel0.keyItem" :keyAlign="'space-around'"></label-vue>
      <label-vue :keyItem="dataLabel0.keyItem" :keyAlign="'space-between'"></label-vue>
      <label-vue :keyItem="dataLabel0.keyItem" :isBold="dataLabel0.isBold"></label-vue>
    </div>
    <h2>infoBlock</h2>
    <info-block :imgUrl="dataImgText1.imgUrl" :value="dataImgText1.text" :title="dataImgText1.text"></info-block>
    <h2>几个在一起</h2>
    <div class="infoBlockbox">
      <info-block :imgUrl="dataImgText1.imgUrl" :value="dataImgText1.text" :title="dataImgText1.text"></info-block>
      <info-block :imgUrl="dataImgText1.imgUrl" :value="dataImgText1.text" :title="dataImgText1.text"></info-block>
      <info-block :imgUrl="dataImgText1.imgUrl" :value="dataImgText1.text" :title="dataImgText1.text"></info-block>
    </div>
    <div class="infoBlockbox2">
      <info-block class="infoBlockItem" :imgUrl="dataImgText1.imgUrl" :value="dataImgText1.text" :title="dataImgText1.text"></info-block>
      <info-block class="infoBlockItem" :imgUrl="dataImgText1.imgUrl" :value="dataImgText1.text" :title="dataImgText1.text"></info-block>
      <info-block class="infoBlockItem" :imgUrl="dataImgText1.imgUrl" :value="dataImgText1.text" :title="dataImgText1.text"></info-block>
    </div>
  </div>
</template>

<script>
import { imgText, label, infoBlock } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
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
        text: '文本'
      },
      dataLabel0: {
        keyW: '2rem',
        keyAlign: 'center',
        keyItem: '飞机坦克',
        isBold: true
      }
    }
  },
  computed: {
  },
  components: {
    imgText,
    labelVue: label,
    infoBlock
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .common

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
