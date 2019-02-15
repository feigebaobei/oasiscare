<template>
  <div class="orderStatus" :style="[compBg]">
    <div class="contBox">
      <h1 class="bannerTitle" v-html="title"></h1>
      <span class="subTitle" v-html="subTitle"></span>
    </div>
    <img :src="compIconUrl" alt="" class="icon">
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    // iconName的优先级大于iconUrl
    imgName: { //  reject checking staleDate orderCancelGrey affirmGrey dealSuccessColor topayColor paidColor transportColor orderSuccessColor toServeColor
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    compBg () {
      if (this.active) {
        return {
          background: 'linear-gradient(to right, #ffa12c, #ff7913)'
        }
      } else {
        return {
          background: 'linear-gradient(to right, #abacaf, #7e7c82)'
        }
      }
    },
    compIconUrl () {
      if (this.imgName) {
        let img = icon[this.imgName].x2 || null
        if (img) {
          return img
        } else {
          if (this.imgUrl) {
            return this.imgUrl
          } else {
            return icon.default.x2
          }
        }
      } else {
        if (this.imgUrl) {
          return this.imgUrl
        } else {
          return icon.default.x2
        }
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

.orderStatus
  padding: .54rem .72rem
  color: $white
  display: flex
  align-items: center

  .contBox
    margin: 0 $separate24 0 0
    flex-grow: 1
    flex-shrink: 1
    font-size: 0

    .bannerTitle
      font-size: .36rem
      line-height: .5rem
      font-weight: $fontWeightBold
      margin: 0 0 $separate08 0

    .subTitle
      font-size: .24rem
      line-height: .33rem
      font-weight: $fontWeightCommon

  .icon
    width: 1.06rem
    height: 1.06rem
    flex-grow: 0
    flex-shrink: 0

</style>
