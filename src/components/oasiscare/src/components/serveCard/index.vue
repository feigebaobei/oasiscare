<template>
  <div class="serveCard" @click="trigger">
    <div class="ciImgBox">
      <img :src="compImgUrl" alt="" class="scImg">
    </div>
    <div class="scBox">
      <div class="titleBox">
        <p class="scbTitle" v-html="title"></p>
        <hard-corner class="scbTagItem" v-for="(item, index) in tags" :key="index" :text="item.text" :color="item.color" :borderRadius="item.borderRadius" :bg="item.bg" :area="item.area" :eventType="item.eventType" :data="item.data"></hard-corner>
      </div>
      <p class="subTitle" v-html="subTitle"></p>
      <div class="saleInfo">
        <div class="left">
          <p class="univalence"><span class="currency" v-html="currency"></span><span class="price" v-html="price"></span><span class="unit" v-html="unit"></span></p>
          <del class="originPrice" v-if="hasOriginPrice" v-html="originPrice"></del>
        </div>
        <span class="paidNumber" v-if="hasPaidNumber" v-html="paidNumber"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
import hardCorner from '../button/hardCorner.vue'
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
    tags: {
      type: Array,
      default () {
        return [
          // {
          //   text: '',
          //   color: '#fff',
          //   borderRadius: '0.08rem',
          //   bg: '#ffa81a',
          //   area: 'big',
          //   eventType: '',
          //   data: {}
          // }
        ]
      }
    },
    currency: {
      type: String,
      default: ''
    },
    price: {
      type: [String, Number],
      default: ''
    },
    unit: {
      type: String,
      default: ''
    },
    originPrice: {
      type: String,
      default: ''
    },
    hasOriginPrice: {
      type: Boolean,
      default: true
    },
    paidNumber: {
      type: String,
      default: ''
    },
    hasPaidNumber: {
      type: Boolean,
      default: true
    },
    subTitle: {
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
    hardCorner
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

.serveCard
  padding: $paddingTop $paddingRight $paddingBottom $paddingLeft
  background-color: $white
  display: flex
  flex-wrap: wrap

  .ciImgBox
    border-radius: .16rem
    overflow: hidden
    margin: 0 $separate24 0 0
    // flex-basis: 2.08rem
    flex-grow: 0
    flex-shrink: 0
    font-size: 0

    .scImg
      width: 1.6rem
      height: 1.6rem

  .scBox
    flex-basis: 100px
    max-width: calc( 100% - 1.84rem )
    flex-grow: 1
    flex-shrink: 1
    display: flex
    flex-wrap: wrap

    .titleBox
      margin: 0 0 $separate08 0
      max-width: 100%
      flex-basis: 100%
      flex-grow: 0
      flex-shrink: 0
      display: flex
      align-items: center

      .scbTitle
        color: $grey4
        font-size: .36rem
        line-height: .5rem
        margin: 0
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap

      .scbTagItem
        margin: 0 0 0 $separate08

    .subTitle
      margin: 0 0 $separate24 0
      flex-basis: 100%
      flex-grow: 0
      flex-shrink: 0
      color: $grey4
      font-size: .28rem
      line-height: .4rem
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap

    .saleInfo
      flex-basis: 100%
      flex-grow: 0
      flex-shrink: 0
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      color: $grey9
      font-size: .24rem
      line-height: .33rem
      align-items: flex-end

      .left
        flex-basis: 100px
        flex-grow: 1
        flex-shrink: 1
        align-items: flex-end
        display: flex
        flex-wrap: wrap

        .univalence
          margin: 0
          color: $orange
          font-size: .36rem
          line-height: .44rem

        .unit
            color: $grey9
            font-size: .24rem
            line-height: .33rem

        .originPrice
          line-height: .33rem
          margin: 0 0 0 $separate24

</style>
