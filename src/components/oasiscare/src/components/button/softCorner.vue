<!-- 圆角为4的硬角button -->
<template>
  <div class="softCorner" :class="[compArea]" :style="[compBlock, compW, compColor, compBorder, compBdr, compPadding, compBg]" @click="trigger">
    <span class="scText" v-html="text"></span>
    <img :src="dataDelBt" alt="" class="scDel" v-if="hasDelIcon" @click.stop="triggerDel">
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    isBlock: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    border: {
      type: String,
      default: 'none'
    },
    borderRadius: {
      type: [String], // 包含单位
      default: '100px' // 设计图的数据只有0.04rem 0.08rem
    },
    padding: {
      type: String,
      default: ''
    },
    maxW: {
      type: String,
      default: ''
    },
    minW: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    bg: {
      type: String,
      default: ''
    },
    area: {
      type: String,
      default: 'area56' // 'area88' 'area72' 'area56' 'area52' 'area48'
    },
    hasDelIcon: {
      type: Boolean,
      default: false
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
    eventTypeDel: {
      type: String,
      default: ''
    },
    dataDel: {
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      dataDelBt: icon.delBt.x2
    }
  },
  computed: {
    compBlock () {
      let obj = Object.create(null)
      obj = {
        display: this.isBlock ? 'flex' : 'inline-flex'
      }
      return obj
    },
    compW () {
      let obj = Object.create(null)
      obj = {
        maxWidth: this.maxW || null,
        minWidth: this.minW || null,
        width: this.width
      }
      return obj
    },
    compColor () {
      let obj = Object.create(null)
      obj = {
        color: this.color
      }
      return obj
    },
    compBorder () {
      let obj = Object.create(null)
      obj = {
        border: this.border
      }
      return obj
    },
    compBdr () {
      let obj = Object.create(null)
      obj = {
        borderRadius: this.borderRadius
      }
      return obj
    },
    compPadding () {
      let obj = Object.create(null)
      obj = {
        padding: this.padding
      }
      return obj
    },
    compBg () {
      let obj = Object.create(null)
      obj = {
        background: this.bg || 'none'
      }
      return obj
    },
    compArea () {
      return {
        area88: this.area === 'area88',
        area72: this.area === 'area72',
        area56: this.area === 'area56',
        area52: this.area === 'area52',
        area48: this.area === 'area48'
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
    triggerDel () {
      if (this.eventTypeDel) {
        this.$emit(this.eventTypeDel, this.dataDel)
      }
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.softCorner
  // display: flex
  // flex-direction: column
  display: inline-flex
  align-items: center
  // text-align: center
  box-sizing: border-box
  position: relative

  .scText
    font-size: .36rem
    line-height: .5rem
    font-weight: $fontWeightBold
    width: 100%
    text-align: center

  .scDel
    width: .44rem
    height: .44rem
    margin: -.17rem -.17rem 0 0
    position: absolute
    top: 0
    right: 0

.area88
  padding: .19rem .38rem
  height: .88rem

  .scText
    font-size: .36rem
    line-height: .5rem
    font-weight: $fontWeightBold

.area72
  padding: .19rem .33rem
  height: .72rem

  .scText
    font-size: .28rem
    line-height: .4rem
    font-weight: $fontWeightCommon

.area56
  padding: .08rem .38rem
  height: .56rem

  .scText
    font-size: .28rem
    line-height: .4rem
    font-weight: $fontWeightBold

.area52
  padding: .06rem .16rem
  height: .52rem

  .scText
    font-size: .28rem
    line-height: .4rem
    font-weight: $fontWeightCommon

.area48
  padding: .06rem .16rem
  height: .48rem

  .scText
    font-size: .24rem
    line-height: .33rem
    font-weight: $fontWeightBold

</style>
