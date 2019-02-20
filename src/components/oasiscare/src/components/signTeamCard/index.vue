<template>
  <div class="signTeam" @click="trigger">
    <div class="imgBox">
      <img :src="compimgUrl" alt="">
    </div>
    <div class="infoBox">
      <p class="title" v-html="title"></p>
      <p class="subTitle"><span class="subTitleKey" v-html="subTitleKey"></span><span class="subTitleValue" v-html="subTitleValue"></span></p>
      <p class="signTime" v-html="compSignTime"></p>
    </div>
    <div class="signBox" @click="triggerDirt">
      <span class="text" :style="[compSignStyle]" v-html="isSign ? '已签约' : '未签约'"></span>
      <img :src="compDirtIcon" alt="">
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
    subTitleKey: {
      type: String,
      default: ''
    },
    subTitleValue: {
      type: String,
      default: ''
    },
    signTime: {
      type: String,
      default: ''
    },
    isSign: {
      type: Boolean,
      default: false
    },
    dirtIcon: {
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
    },
    eventTypeDirt: {
      type: String,
      default: ''
    },
    dataDirt: {
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
    compimgUrl () {
      let img = this.imgUrl
      if (img) {
        return img
      } else {
        return icon.default.x2
      }
    },
    compSignTime () {
      return `签约时间：${this.signTime}`
    },
    compSignStyle () {
      if (this.isSign) {
        return {
          color: '#4ca866'
        }
      } else {
        return {
          color: '#9b9b9b'
        }
      }
    },
    compDirtIcon () {
      let img = this.dirtIcon
      if (img) {
        return img
      } else {
        return icon.arrowsBig.x2
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
    },
    triggerDirt () {
      if (this.eventTypeDirt) {
        this.$emit(this.eventTypeDirt, this.dataDirt)
      }
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.signTeam
  padding: $paddingTop $paddingRight $paddingBottom $paddingLeft
  background-color: $white
  display: flex
  flex-wrap: wrap

  .imgBox
    margin: 0 $separate24 0 0
    width: 1.4rem
    height: 1.4rem
    border-radius: .16rem
    overflow: hidden
    display: flex
    flex-basis: 1.4rem
    flex-grow: 0
    flex-shrink: 0

    img
      width: 1.4rem
      hieght: 1.4rem

  .infoBox
    display: flex
    flex-wrap: wrap
    flex-basis: 100px
    flex-grow: 1
    flex-shrink: 1
    max-width: calc( 100% - 3.16rem )
    margin: 0 $separate24 0 0

    .title
      color: $black
      font-size: .36rem
      font-weight: .5rem
      flex-basis: 100%
      margin: 0 0 $separate08 0
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap

    .subTitle
      margin: 0 0 $separate24 0
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      font-size: .28rem
      line-height: .4rem

      .subTitleKey
        font-weight: $fontWeightBold

      .subTitleValue
        font-weight: $fontWeightCommon

    .signTime
      color: $grey9
      font-size: .24rem
      line-height: .33rem
      margin: 0

  .signBox
    flex-basis: 1.28rem
    flex-grow: 0
    flex-shrink: 0
    display: flex
    align-items: center

    .text
      font-size: .28rem
      line-height: .4rem
      font-weight: $fontWeightBold

    img
      width: .28rem
      height: .28rem
      margin: 0 0 0 $separate16

</style>
