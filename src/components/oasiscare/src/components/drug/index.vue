<template>
  <div class="orderInfoItem">
    <div class="imgBox">
      <img :src="compImgUrl" alt="" class="oiImg">
    </div>
    <div class="oiRight">
      <div class="oirTitleBox">
        <p class="oibTitle" v-html="title"></p>
      </div>
      <div class="oibNumber">
        <p class="priceBox"><span class="prefix" v-if="hasPricePrefix" v-html="pricePrefix"></span><span class="price" v-html="price"></span></p>
        <p class="totalBox"><span class="prefix" v-if="hasTotalPrefix" v-html="totalPrefix"></span><span class="total" v-html="total"></span></p>
      </div>
      <p class="oibSubTitle" v-html="subTitle"></p>
      <!-- <p class="oiRangeBox">有效期：<span class="timeStart" v-html="times[0]"></span>至<span class="timeEnd" v-html="times[1]"></span></p> -->
    </div>
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    price: {
      type: [String, Number],
      default: ''
    },
    hasPricePrefix: {
      type: Boolean,
      default: false
    },
    pricePrefix: {
      type: String,
      default: '￥'
    },
    total: {
      type: [String, Number],
      default: ''
    },
    hasTotalPrefix: {
      type: Boolean,
      default: false
    },
    totalPrefix: {
      type: String,
      default: 'x'
    },
    times: {
      type: Array,
      default () {
        return ['-', '-']
      },
      validator (value) {
        return value.length === 2
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    compImgUrl () {
      let img = this.imgUrl
      if (img) {
        return img
      } else {
        return icon.default.x2
      }
    }
  },
  components: {
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.orderInfoItem
  display: flex
  flex-wrap: wrap
  background-color: $white
  padding: $paddingTop $paddingRight $paddingBottom $paddingLeft

  .imgBox
    border-radius: .08rem
    overflow: hidden
    font-size: 0
    margin: 0 $separate24 0 0

    .oiImg
      width: 1.2rem
      height: 1.2rem
      border-radius: .08rem
      flex-grow: 0
      flex-shrink: 0

  .oiRight
    color: $grey4
    flex-grow: 1
    flex-shrink: 1
    flex-basis: 100px
    display: flex
    flex-wrap: wrap
    justify-content: space-between

    .oirTitleBox
      max-width: calc( 100% - 1.2rem )
      margin: 0 $separate24 0 0
      flex-basis: 2rem
      flex-grow: 1
      flex-shrink: 1

      .oibTitle
        margin: 0
        font-size: .28rem
        line-height: .4rem

    .oibNumber
      flex-basis: 1.2rem
      flex-grow: 0
      flex-shrink: 0

      .priceBox
        // margin: 0 0 $separate16 0
        text-align: right
        line-height: .4rem
        font-size: 0

        .prefix
          font-size: .2rem

        .price
          font-size: .28rem

      .totalBox
        text-align: right
        margin: 0
        font-size: 0
        color: $greyb

        .prefix
          margin: 0 $separate08 0 0
          font-size: .24rem
          line-height: .28rem

        .total
          margin: 0
          font-size: .24rem
          line-height: .28rem

    .oibSubTitle
      margin: $separate08 0 0 0
      color: $grey9
      font-size: .24rem
      line-height: .33rem
      flex-basis: 100%

</style>
