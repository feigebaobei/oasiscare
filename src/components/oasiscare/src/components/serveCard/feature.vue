<template>
  <div class="feature" @click="trigger">
    <div class="ciImgBox">
      <img :src="compImgUrl" alt="" class="scImg">
    </div>
    <div class="scBox">
      <p class="scbTitle" v-html="title"></p>
      <p class="scbSubTitle">
        <span class="name" v-html="name"></span>
        <span class="hospital" v-html="hospital"></span>
      </p>
      <p class="subTitleBox"><span class="subTitleKey" v-html="subTitleKey"></span><span class="subTitleValue" v-html="subTitleValue"></span></p>
      <p class="priceBox"><span class="prefix" v-html="pricePrefix"></span><span class="price" v-html="price"></span></p>
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
    name: {
      type: String,
      default: ''
    },
    hospital: {
      type: String,
      default: ''
    },
    // subTitle: {
    //   type: String,
    //   default: ''
    // },
    subTitleKey: {
      type: String,
      default: ''
    },
    subTitleValue: {
      type: String,
      default: ''
    },
    price: {
      type: [String, Number],
      default: ''
    },
    hasPricePrefix: {
      type: Boolean,
      default: true
    },
    pricePrefix: {
      type: String,
      default: ''
    },
    eventType: {
      type: String,
      default: ''
    },
    data: {
      default () {
        return {}
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
  methods: {
    trigger () {
      if (this.eventType) {
        this.$emit(this.eventType, this.data)
      }
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.feature
  padding: $paddingTop $paddingRight $paddingBottom $paddingLeft
  background-color: $white
  display: flex
  flex-wrap: wrap

  .ciImgBox
    border-radius: .16rem
    overflow: hidden
    margin: 0 $separate24 0 0
    flex-basis: 2.08rem
    flex-grow: 0
    flex-shrink: 0
    font-size: 0

    .scImg
      width: 2.08rem
      height: 1.6rem

  .scBox
    flex-basis: 100px
    max-width: calc( 100% - 2.32rem )
    flex-grow: 1
    flex-shrink: 1
    display: flex
    flex-wrap: wrap

    .scbTitle
      color: $black
      font-size: .36rem
      line-height: .5rem
      overflow: hidden
      margin: 0 0 $separate08 0
      text-overflow: ellipsis
      white-space: nowrap
      flex-basis: 100%

      .scbTitle
        color: $black
        font-size: .36rem
        line-height: .5rem
        margin: 0 0 $separate08 0
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap

    .scbSubTitle
      margin: 0 0 $separate08 0
      font-size: .28rem
      line-height: .4rem
      flex-basis: 100%
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap

      .name
        font-weight: $fontWeightBold

      .hospital
        margin: 0 0 0 $separate08

    .subTitleBox
      margin: 0
      font-size: .28rem
      line-height: .4rem
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      flex-basis: 100%

      .subTitleKey
        font-weight: $fontWeightBold

      .subTitleValue
        font-weight: $fontWeightCommon

    .priceBox
      color: $orange
      font-size: .36rem
      line-height: .44rem
      margin: $separate24 0 0 0
      flex-basis: 100%

      .prefix
        font-size: .24rem

</style>
