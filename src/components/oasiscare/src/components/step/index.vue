<template>
  <div class="step" :class="[type]">
    <div class="itemBox" :class="[{'active': status[index], 'cur': value === index}]" v-for="(item, index) in stepList" :key="index" @click="trigger(index)">
      <div class="iconBox">
        <div class="icon">
          <span v-if="!(item.useImg)" v-html="index + 1"></span>
          <!-- <img :src="status[index] ? icons[item.imgActive].x3 : icons[item.imgUnActive].x3" alt="" v-else> -->
          <img :src="mImgUrl(item, index)" alt="" v-else>
        </div>
        <div class="lineBox">
          <div class="line" v-if="index !== stepList.length - 1">
            <img :src="lineStepSolid" alt="" v-if="status[index]">
            <img :src="lineStepDashed" alt="" v-else>
          </div>
        </div>
      </div>
      <div class="contBox" :style="[compFlexBasis]">
        <p class="contTitle" v-html="item.title"></p>
        <p class="contSubTitle" v-html="item.subTitle"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    type: { // 这个功能还没开发完.
      type: String,
      default: 'vertical' // 'horizontal' 'vertical', 'page'
    },
    stepList: {
      type: Array,
      default () {
        return [
          {
            title: 'title',
            subTitle: 'subTitle',
            value: 'first',
            useImg: true,
            // imgActive: 'postOrderColor', // icon里对应的图片名称
            // imgUnActive: 'postOrderColor'
            imgNames: ['', ''],
            imgUrls: ['', '']
          },
          {
            title: 'title1',
            subTitle: 'subTitle1',
            value: 'second',
            useImg: true,
            // imgActive: '', // icon里对应的图片名称
            // imgUnActive: ''
            imgNames: ['', ''],
            imgUrls: ['', '']
          }
        ]
      }
    },
    value: { // 当前活动元素的序号
      type: [String, Number]
    },
    onlyShow: {
      type: Boolean,
      default: false
    },
    stepBasis: {
      type: String,
      default: '1.68rem'
    },
    curStep: {
      type: Number,
      default: 0
    },
    clickAble: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      icons: icon,
      lineStepSolid: icon.lineStepSolid.x1,
      lineStepDashed: icon.lineStepDashed.x1,
      dataStatus: []
    }
  },
  watch: {
    value: function (newValue) {
      this.status = newValue
    }
  },
  computed: {
    status: {
      set (value) {
        let arr = new Array(this.stepList.length)
        arr.fill(true, 0)
        arr.fill(false, this.value + 1)
        this.dataStatus = arr
      },
      get () {
        return this.dataStatus
      }
    },
    compFlexBasis () {
      let obj = Object.create(null)
      obj.flexBasis = this.stepBasis
      return obj
    }
  },
  components: {
  },
  methods: {
    mImgUrl (data, index) {
      if (this.status[index]) {
        let img = ''
        try {
          img = icon[data.imgNames[1]].x2 || ''
        } catch (err) {
          img = ''
        }
        if (img) {
          return img
        } else {
          return data.imgUrls[1] ? data.imgUrls[1] : icon.default.x2
        }
      } else {
        let img = ''
        try {
          img = icon[data.imgNames[0]].x2 || ''
        } catch (err) {
          img = ''
        }
        if (img) {
          return img
        } else {
          return data.imgUrls[0] ? data.imgUrls[0] : icon.default.x2
        }
      }
    },
    trigger (index) {
      if (this.clickAble) {
        this.$emit('input', index)
      }
    }
  },
  created () {},
  mounted () {
    this.status = this.value
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.step
  display: flex
  background-color: $white

  .itemBox
    padding: 0 $separate16

.vertical
  flex-direction: column

  .itemBox
    display: flex
    flex-direction: row
    margin: 0 0 $separate08 0

    .iconBox
      flex-basis: .56rem
      flex-grow: 0
      flex-shrink: 0
      display: flex
      flex-direction: column
      align-items: center
      margin: 0 $separate24 0 0

      .icon
        // flex-basis: 100%
        border-radius: 50%
        width: .56rem
        height: .56rem
        font-size: .28rem
        margin: 0 0 $separate08 0
        flex-grow: 0
        flex-shrink: 0
        display: flex
        justify-content: space-around
        align-items: center

        img
          width: .38rem
          height: .38rem

      .lineBox
        flex-grow: 1
        flex-shrink: 1
        display: flex
        flex-direction: column
        justify-content: center

        .line
          // flex-basis: 100%
          // width: .04rem
          height: 1.06rem
          // height: 100%
          font-size: 0
          display: flex
          flex-direction: column
          justify-content: center

          img
            // width: 100%
            height: 100%

    .contBox
      // flex-basis:
      flex-grow: 1
      flex-shrink: 1
      display: flex
      flex-direction: column
      padding: .06rem 0 0 0

      .contTitle
        color: $greyb
        font-size: .32rem
        line-height: .45rem
        font-weight: $fontWeightCommon
        margin: 0 0 $separate08 0

      .contSubTitle
        color: $grey9
        font-size: .24rem
        line-height: .28rem
        margin: 0

  .itemBox.active

    .contBox

      .contTitle
        color: $grey6
        font-weight: $fontWeightCommon

  .itemBox.cur

    .iconBox

      .icon

        background-color: $greyd

    .contBox

      .contTitle

        color: $orange
        font-weight: $fontWeightBold

</style>
