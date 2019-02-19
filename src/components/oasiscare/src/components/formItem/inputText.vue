<!-- 当前版本没有验证功能 -->
<template>
  <div class="inputText">
    <label-vue class="labelVue" :keyW="keyW" :keyAlign="keyAlign" :keyItem="keyItem" :isBold="isBold"></label-vue>
    <span class="flower" v-if="isRequire">*</span>
    <input class="input" :style="[compAlign]" type="text" placeholder="placeHolder" v-model="dataValue">
    <img class="delIcon" :src="compDelIcon" alt="" v-if="compHasDelIcon" @click="triggerDel">
    <img class="dirtIcon" :src="compDirtIcon" alt="" v-if="hasDirtIcon" @click="triggerDirt">
    <div class="bottomTrue" v-if="hasBottom"></div>
    <div class="bottomFalse" v-else></div>
  </div>
</template>

<script>
import label from './label.vue'
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    keyW: {
      type: String, // 需要有单位
      default: ''
    },
    keyAlign: {
      type: String, // key的水平对齐方式。
      default: 'left' // 'left', 'center', 'right', 'space-around', 'space-between'
    },
    keyItem: {
      type: String,
      default: ''
    },
    isBold: {
      type: Boolean,
      default: false
    },
    isRequire: {
      type: Boolean,
      default: false
    },
    placeHolder: {
      type: String,
      default: ''
    },
    placeHolderAlign: {
      type: String,
      default: 'left' // 'left' 'right' 'center'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    valueAlign: {
      type: String,
      default: 'left' // 'left' 'right' 'center'
    },
    imgUrlDel: {
      type: String,
      default: ''
    },
    imgUrlDirt: {
      type: String,
      default: ''
    },
    hasDelIcon: {
      type: Boolean,
      default: true
    },
    hasDirtIcon: {
      type: Boolean,
      default: false
    },
    hasBottom: {
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
      dataValue: this.value
      // dataHasDelIcon: this.hasDelIcon
    }
  },
  computed: {
    compAlign () {
      let obj = Object.create(null)
      let judge = this.placeHolderAlign
      if (this.value) {
        judge = this.valueAlign
      }
      switch (judge) {
        case 'left':
        default:
          obj.textAlign = 'left'
          break
        case 'right':
          obj.textAlign = 'right'
          break
        case 'center':
          obj.textAlign = 'center'
          break
      }
      return obj
    },
    compDelIcon () {
      let img = this.imgUrlDel
      if (img) {
        return img
      } else {
        return icon.closeGrey.x2
      }
    },
    // compHasDelIcon: {
    //   set (value) {
    //     if (this.dataValue) {
    //       return this.hasDelIcon
    //     } else {
    //       return false
    //     }
    //   },
    //   get () {},
    // },
    compHasDelIcon () {
      if (this.dataValue) {
        return this.hasDelIcon
      } else {
        return false
      }
    },
    compDirtIcon () {
      let img = this.imgUrlDirt
      if (img) {
        return img
      } else {
        return icon.arrowsBig.x2
      }
    }
  },
  watch: {
    dataValue: function (newValue, oldValue) {
      this.$emit('input', newValue)
    }
  },
  components: {
    labelVue: label
  },
  methods: {
    triggerDel () {
      // 当前版本只做了删除value的功能。没有绑定自定义事件的功能
      this.dataValue = ''
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

.inputText
  display: flex
  justify-content: space-between
  background-color: #fff
  padding: $paddingTop4 $paddingRight 0 $paddingLeft
  font-size: .28rem
  line-height: .4rem
  align-items: center
  flex-wrap: wrap

  .labelVue
    color: $black
    margin: 0 $separate08 0 0

  .flower
    color: #fe3b2f
    margin: 0

  .input
    color: $grey4
    flex-grow: 1
    flex-shrink: 1
    background: none
    border: none
    height: .4rem
    padding: 0
    margin: 0 0 0 $separate28
    font-size: .28rem

  .input:focus
    outline: none

  .delIcon
    width: .28rem
    height: .28rem
    margin: 0 0 0 $separate24

  .dirtIcon
    width: .28rem
    height: .28rem
    margin: 0 0 0 $separate24

  .bottomTrue
    flex-basis: 100%
    flex-shrink: 0
    height: $paddingBottom4
    border-bottom: 0.01rem solid $greyf
    box-sizing: border-box

  .bottomFalse
    flex-basis: 100%
    flex-shrink: 0
    height: $paddingBottom4
    border: none
    box-sizing: border-box
</style>
