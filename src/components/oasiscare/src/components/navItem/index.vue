<template>
  <div class="navItem" @click="trigger">
    <div class="niBig" v-if="area === 'big'">
      <img :src="compImgUrl" alt="" class="niIcon">
      <p class="niTitle" v-html="title" :style="[compColor]"></p>
      <!-- 这个组件现在只有一行文本
      <p class="titles" v-html="title"></p>
      <p class="titleSub" v-html="subTitle"></p> -->
    </div>
    <div class="niSmall" v-if="area === 'small'">
      <img :src="compImgUrl" alt="" class="niIcon">
      <p class="niTitle" v-html="title" :style="[compColor]"></p>
    </div>
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    imgNames: { // 必须传入2个值,0:不选中 1：选中
      type: Array,
      default () {
        return ['', '']
      },
      validator (value) {
        return value.length === 2
      }
    },
    imgUrls: { // 必须传入2个值,0:不选中 1：选中
      type: Array,
      default () {
        return ['', '']
      },
      validator (value) {
        return value.length === 2
      }
    },
    title: {
      type: String,
      default: ''
    },
    area: {
      type: String,
      default: 'big',
      validator (value) {
        return ['big', 'small'].indexOf(value) > -1
      }
    },
    active: {
      type: Boolean,
      default: true
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
      if (this.active) {
        let img = ''
        try {
          img = icon[this.imgNames[1]].x2
        } catch (err) {
          img = null
        }
        if (img) {
          return img
        } else {
          img = this.imgUrls[1]
          if (img) {
            return img
          } else {
            return icon.default.x2
          }
        }
      } else {
        let img = ''
        try {
          img = icon[this.imgNames[0]].x2
        } catch (err) {
          img = null
        }
        if (img) {
          return img
        } else {
          img = this.imgUrls[0]
          if (img) {
            return img
          } else {
            return icon.default.x2
          }
        }
      }
    },
    compColor () {
      if (this.active) {
        return {
          color: '#ff7e00'
        }
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

.navItem
  background-color: $white
  display: flex
  flex-direction: column
  flex-grow: 1
  flex-shrink: 1

  .niBig
    padding: .25rem 0 .26rem 0
    font-size: 0

    .niIcon
      width: .6rem
      height: .6rem
      display: block
      margin: 0 auto $separate16 auto

    .niTitle
      text-align: center
      font-size: .24rem
      line-height: .33rem
      font-weight: $fontWeightCommon
      margin: 0

  .niSmall
    padding: .16rem 0 .14rem 0
    font-size: 0

    .niIcon
      width: .36rem
      height: .36rem
      display: block
      margin: 0 auto .04rem auto

    .niTitle
      text-align: center
      font-size: .2rem
      line-height: .28rem
      font-weight: $fontWeightBold
      margin: 0

</style>
