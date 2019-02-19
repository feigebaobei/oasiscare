<!-- 当前版本没有验证功能 -->
<template>
  <div class="inputRadio">
    <div class="irCont">
      <label-vue class="labelVue" :keyW="keyW" :keyAlign="keyAlign" :keyItem="keyItem" :isBold="isBold"></label-vue>
      <span class="flower" v-if="isRequire">*</span>
      <div class="optionBox">
        <img-text v-for="(item, index) in compOptions" :key="index" :class="[{imgTextSeparate: index !== 0}]" :imgUrl="mRadioImg(item)" :text="item.text" :eventType="'triggerRadio'" @triggerRadio="triggerRadio" :data="item"></img-text>
      </div>
    </div>
    <div class="bottomTrue" v-if="hasBottom"></div>
    <div class="bottomFalse" v-else></div>
  </div>
</template>

<script>
import label from '../common/label.vue'
import imgText from '../common/imgText.vue'
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
    value: {
      default: null
    },
    options: {
      // 当前版本没有点击选项时执行相应事件的功能
      // 可以在父组件时监听value的改变
      type: Array,
      default () {
        return [
          // {
          //   imgUrls: [
          //     '', '' // 0：非选中，1：选中
          //   ],
          //   text: 'text',
          //   value: 'value'
          // }
        ]
      }
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
    }
  },
  data () {
    return {
      dataOptions: []
    }
  },
  computed: {
    compOptions: {
      set (value) {
        let arr = []
        let i = this.options.length - 1
        while (i > -1) {
          arr.push(this.options[i])
          i--
        }
        this.dataOptions = arr
      },
      get () {
        return this.dataOptions
      }
    }
  },
  components: {
    labelVue: label,
    imgText
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
    },
    triggerRadio (data) {
      this.$emit('input', data.value)
    },
    mRadioImg (data) {
      let img = ''
      let imgUrls = data.imgUrls || ['', '']
      if (data.value === this.value) {
        img = imgUrls[1]
        if (img) {
          return img
        } else {
          return icon.selectOnly.x2
        }
      } else {
        img = imgUrls[0]
        if (img) {
          return img
        } else {
          return icon.unSelectOnly.x2
        }
      }
    }
  },
  created () {},
  mounted () {
    this.compOptions = this.options
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.inputRadio
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  background-color: #fff
  padding: $paddingTop4 $paddingRight 0 $paddingLeft
  font-size: .28rem
  line-height: .4rem
  align-items: center

  .irCont
    display: flex
    flex-basis: 100%

    .labelVue
      color: $black
      margin: 0 $separate08 0 0

    .flower
      color: #fe3b2f
      margin: 0

    .optionBox
      flex-grow: 1
      flex-shrink: 1
      display: flex
      flex-direction: row-reverse
      margin: 0 0 0 $separate28

      .imgTextSeparate
        margin: 0 1rem 0 0

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
