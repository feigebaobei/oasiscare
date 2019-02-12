<template>
    <div class="titleArea" @click="triggerAll">
      <div class="leftBox">
        <div class="titleBox">
          <img :src="compImgUrl" alt="">
          <h2 v-html="title"></h2>
        </div>
        <div class="subTitleBox" :class="[]" v-if="subTitle">
          <span v-html="subTitle"></span>
        </div>
      </div>
      <div class="moreBox" v-if="hasMore" @click.stop="triggerMore">
        <span v-html="moreText"></span>
        <img :src="compDirtIcon" alt="" v-if="hasDirectionIcon" :style="[compDirtIconRotation]" ref="moreIcon">
      </div>
    </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    hasImg: {
      type: Boolean,
      default: true
    },
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
    moreText: {
      type: String,
      default: '查看全部'
    },
    hasMore: {
      type: Boolean,
      default: true
    },
    hasDirectionIcon: {
      type: Boolean,
      default: true
    },
    directionImgUrl: {
      type: String,
      default: ''
    },
    directionImgStatus: {
      tyep: Boolean,
      default: false // false 未展开，true 展开
    },
    directionImgSwitchDirection: {
      type: Boolean,
      default: true
    },
    directionImgDirection: {
      type: [String, Number],
      default: '0' // unit deg
    },
    directionImgRotation: {
      tyep: [String, Number],
      default: '90' // unit deg
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
    eventTypeMore: {
      type: String,
      default: ''
    },
    dataMore: {
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      dataDirectionImgStatus: this.directionImgStatus,
      rotation: this.directionImgDirection
    }
  },
  computed: {
    compImgUrl () {
      if (this.imgUrl) {
        return this.imgUrl
      } else {
        return icon.plateTitle.x2
      }
    },
    compDirtIcon () {
      return icon.arrows.x2
    },
    compDirtIconRotation: {
      set (value) {
        this.rotation = value
      },
      get () {
        return {
          transform: `rotate(${this.rotation}deg)`
        }
      }
    }
  },
  components: {
  },
  methods: {
    triggerAll () {
      if (this.eventType) {
        this.$emit(this.eventType, this.data)
      }
    },
    triggerMore () {
      if (this.eventTypeMore) {
        this.$emit(this.eventTypeMore, this.data)
        this.switchMore()
      }
    },
    switchMore () {
      // 日后开发文本切换的功能
      // return
      if (this.dataDirectionImgStatus) {
        this.compDirtIconRotation = this.rotation - this.directionImgRotation
      } else {
        this.compDirtIconRotation = this.rotation + this.directionImgRotation
      }
      this.dataDirectionImgStatus = !this.dataDirectionImgStatus
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

  .titleArea
    display: flex
    align-items: center
    justify-content: space-between
    padding: $paddingTop $paddingRight 0 $paddingLeft
    background-color: $white

    .leftBox
      display: flex
      flex-grow: 1
      flex-shrink: 1
      align-items: center

      .titleBox
        font-size: .32rem
        line-height: 0rem
        // position: relative
        // min-width: 1.8rem
        text-align: left
        // background: #729
        margin: 0 $separate24 0 0
        flex-grow: 0
        flex-shrink: 0

        img
          width: .42rem
          height: .42rem

        h2
          font-size: .32rem
          line-height: .42rem
          margin: 0
          // position: absolute
          // bottom: 0
          // left: .06rem
          color: $black
          margin: -.42rem 0 0 .06rem

      .subTitleBox
        font-size: .22rem
        line-height: .22rem
        // align-self: flex-end
        margin: 0 $separate24 0 0
        color: $grey6
        flex-grow: 1
        flex-shrink: 1

  .moreBox
    flex-grow: 0
    flex-shrink: 0
    font-size: 0
    line-height: .33rem

    span
      font-size: .24rem
      margin: 0 $separate08 0 0
      font-weight: $fontWeightBold

    img
      width: .16rem
      height: .16rem

</style>
