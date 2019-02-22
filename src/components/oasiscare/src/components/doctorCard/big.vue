<template>
  <div class="doctorCardBig">
    <div class="imgBox">
      <img :src="compImgUrl" alt="" class="img">
    </div>
    <div class="bInfoBox">
      <div class="first">
        <span class="name" v-html="name"></span>
        <span class="post" v-html="post"></span>
        <hard-corner class="workTime" v-if="hasWorkTime" :text="compWorkTime" :border="'.02rem solid #ff9f00'" :color="'#ff9f00'"></hard-corner>
      </div>
      <div class="second">
        <span class="hospital" v-html="hospital"></span>
        <span class="subject" v-html="subject"></span>
      </div>
      <p class="goodAt">
        <span class="goodAtKey" v-html="goodAtKey"></span>
        <span class="goodAtValue" v-html="goodAtValue"></span>
      </p>
      <div class="data">
        <div class="dataItem" v-for="(item, index) in dataItems" :key="index">
          <span class="itemKey" v-html="item.key"></span>
          <grade-percent :style="[mMarginRight(index)]" :percentValue="item.value"></grade-percent>
        </div>
      </div>
      <div class="tagBox">
        <hard-corner :class="[{marginRight: index !== tags.length - 1}]" v-for="(item, index) in tags" :key="index" :text="item.text" :color="item.color" :borderRadius="item.borderRadius" :bg="item.bg"></hard-corner>
        <div class="shelter"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
import hardCorner from '../button/hardCorner.vue'
import gradePercent from '../grade/percent.vue'
import { workTime } from '../../data/index.js'
export default {
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    post: {
      type: String,
      default: ''
    },
    workTime: {
      type: [String, Number],
      default: 0
    },
    hasWorkTime: {
      type: Boolean,
      default: true
    },
    hospital: {
      type: String,
      default: ''
    },
    subject: {
      type: String,
      default: ''
    },
    goodAtKey: {
      type: String,
      default: ''
    },
    goodAtValue: {
      type: String,
      default: ''
    },
    dataItems: {
      type: Array,
      default () {
        return [
          // {
          //   key: '疗效',
          //   value: '80'
          // }
        ]
      }
    },
    tags: {
      type: Array,
      default () {
        return [
          // {
          //   text: '',
          //   color: '',
          //   borderRadius: '.08rem',
          //   bg: ''
          // }
        ]
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
    },
    compWorkTime () {
      let box = parseInt(Number(this.workTime))
      box--
      if (box < 0) {
        box = 0
      }
      let m = Math.floor(box / 5)
      return workTime[m]
    }
  },
  components: {
    hardCorner,
    gradePercent
  },
  methods: {
    mMarginRight (index) {
      if (this.dataItems.length !== index) {
        return {
          marginRight: '.8rem'
        }
      }
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.doctorCardBig
  display: flex
  flex-wrap: wrap
  background-color: $white
  padding: $paddingTop $paddingRight $paddingBottom $paddingLeft

  .imgBox
    border-radius: 50%
    overflow: hidden
    font-size: 0
    margin: 0 $separate24 0 0
    width: 1rem
    height: 1rem
    flex-basis: 1rem
    flex-grow: 0
    flex-shrink: 0

    .img
      width: 1rem
      height: 1rem
      border-radius: 50%

  .bInfoBox
    max-width: calc( 100% - 1.24rem )
    flex-basis: 100px
    flex-grow: 1
    flex-shrink: 1
    display: flex
    flex-wrap: wrap

    .first
      flex-basis: 100%
      flex-grow: 0
      flex-shrink: 0
      display: flex
      flex-wrap: wrap
      align-items: center
      margin: 0 0 $separate08 0

      .name
        color: $black
        font-size: .36rem
        line-height: .5rem
        font-weight: $fontWeightBold

      .post
        color: $grey6
        font-size: .36rem
        line-height: .5rem
        font-weight: $fontWeightCommon
        margin: 0 0 0 $separate08

      .workTime
        margin: 0 0 0 $separate08

    .second
      color: $black
      flex-basis: 100%
      flex-grow: 0
      flex-shrink: 0
      display: flex
      flex-wrap: wrap
      font-size: .32rem
      font-weight: $fontWeightBold
      line-height: .45rem
      margin: 0 0 .14rem 0
      padding: 0 0 $separate16 0
      border-bottom: .01rem solid $greyf

      .subject
        margin: 0 0 0 $separate16

    .goodAt
      color: $grey6
      flex-basis: 100%
      flex-grow: 0
      flex-shrink: 0
      // display: flex
      // flex-wrap: wrap
      margin: 0 0 $separate16 0
      font-size: .28rem
      line-height: .4rem
      font-weight: $fontWeightCommon
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap

      .goodAtKey
        font-weight: $fontWeightBold

    .data
      flex-basis: 100%
      flex-grow: 0
      flex-shrink: 0
      display: flex
      flex-wrap: wrap
      margin: 0 0 $separate16 0

      .dataItem
        color: $grey6
        font-size: .28rem
        line-height: .40rem
        display: flex
        flex-wrap: wrap
        align-items: center

        .itemKey
          font-weight: $fontWeightBold
          margin: 0 $separate08 0 0

    .tagBox
      flex-basis: 100%
      flex-grow: 0
      flex-shrink: 0
      // display: flex
      // flex-wrap: wrap
      font-size: 0
      overflow: hidden
      white-space: nowrap
      position: relative

      .marginRight
        margin: 0 $separate08 0 0

      .shelter
        position: absolute
        top: 0
        right: 0
        width: .56rem
        height: 100%
        background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))

</style>
