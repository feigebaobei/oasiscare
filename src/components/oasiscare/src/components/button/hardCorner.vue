<!-- 圆角为4的硬角button -->
<template>
  <div class="hardCorner" :class="[compArea]" :style="[compW, compColor, compBorder, compBdr, compBg]" @click="trigger">
    <span class="hcText" v-html="text"></span>
  </div>
</template>

<script>
export default {
  props: {
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
      type: String, // 包含单位
      default: '.04rem' // 设计图的数据只有0.04rem 0.08rem
    },
    maxW: {
      type: String,
      default: ''
    },
    minW: {
      type: String,
      default: ''
    },
    bg: {
      type: String,
      default: ''
    },
    area: {
      type: String,
      default: 'big' // 'big': 36, 'middle': 32, 'small': 28
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
    compW () {
      let obj = Object.create(null)
      obj = {
        maxWidth: this.maxW || null,
        minWidth: this.minW || null
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
    compBg () {
      let obj = Object.create(null)
      obj = {
        background: this.bg || 'none'
      }
      return obj
    },
    compArea () {
      return {
        big: this.area === 'big',
        middle: this.area === 'middle',
        small: this.area === 'small'
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

.hardCorner
  // display: flex
  // flex-direction: column
  align-items: center
  font-size: 0
  text-align: center
  display: inline-flex
  box-sizing: border-box
  font-weight: $fontWeightCommon
  white-space: nowrap

.big

  padding: .02rem .08rem
  height: .36rem
  // line-height: .32rem

  .hcText
    width: 100%
    font-size: .24rem
    line-height: .36rem

.middle
  padding: .02rem .08rem
  height: .32rem

  .hcText
    width: 100%
    font-size: .2rem
    line-height: .32rem

.small

  padding: .02rem .08rem
  height: .28rem

  .hcText
    width: 100%
    font-size: .18rem
    line-height: .28rem

</style>
