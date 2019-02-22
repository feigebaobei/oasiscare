<template>
  <div class="recordCard" @click="trigger">
    <span class="identity" v-html="identity"></span>
    <div class="firstUser">
      <div class="imgBox">
        <img :src="compImgUrl" alt="" class="img">
      </div>
      <div class="right">
        <div class="first">
          <span class="name" v-html="name"></span>
          <span class="post" v-html="post"></span>
          <hard-corner class="workTime" :text="compWorkTime" :color="dataWorkTime.color" :borderRadius="dataWorkTime.borderRadius" :border="dataWorkTime.border"></hard-corner>
        </div>
        <div class="second">
          <span class="hospital" v-html="hospital"></span>
          <span class="subject" v-html="subject"></span>
        </div>
      </div>
    </div>
    <div class="secondUser">
      <div class="left">
        <info-item :class="[{item: true, margin: index !== dataItems.length - 1}]" v-for="(item, index) in dataItems" :key="index" :keyW="item.keyW" :keyItem="item.keyItem" :keyAlign="item.keyAlign" :value="item.value"></info-item>
      </div>
      <img :src="dataImgUp" alt="" class="img" v-if="hasUp">
    </div>
    <div class="buttonBox">
      <soft-corner class="viewCaseHistory" :text="dataViewCaseHistory.text" :color="dataViewCaseHistory.color" :border="dataViewCaseHistory.border" @click.native.stop="triggerHistory" @triggerHistory="triggerHistory"></soft-corner>
      <div class="pointBox" v-if="hasCaseHistoryInfo">
        <div class="point"></div>
      </div>
      <soft-corner class="gotoEvaluate margin" :text="dataGotoEvaluate.text" :color="dataGotoEvaluate.color" :border="dataGotoEvaluate.border" @click.native.stop="triggerEvaluate" @triggerEvaluate="triggerEvaluate"></soft-corner>
    </div>
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
import hardCorner from '../button/hardCorner.vue'
import softCorner from '../button/softCorner.vue'
import infoItem from '../infoItem/index.vue'
import { workTime } from '../../data/index.js'
export default {
  props: {
    identity: {
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
    imgUrl: {
      type: String,
      default: ''
    },
    workTime: {
      type: [String, Number],
      default: ''
    },
    hospital: {
      type: String,
      default: ''
    },
    subject: {
      type: String,
      default: ''
    },
    dataItems: {
      type: Array,
      default () {
        return [
          // {
          //   keyW: '',
          //   keyAlign: '',
          //   keyItem: '',
          //   value: ''
          // }
        ]
      }
    },
    hasUp: {
      type: Boolean,
      default: false
    },
    hasCaseHistoryInfo: {
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
    eventTypeHistory: {
      type: String,
      default: ''
    },
    dataHistory: {
      default () {
        return {}
      }
    },
    eventTypeEvaluate: {
      type: String,
      default: ''
    },
    dataEvaluate: {
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      dataImgUp: icon.caseHistoryUp.x2,
      dataWorkTime: {
        color: '#ff9f00',
        borderRadius: '.08rem',
        border: '.02rem solid #ff9f00'
      },
      dataViewCaseHistory: {
        text: '查看病历',
        color: '#666',
        border: '.01rem solid #bbb'
      },
      dataGotoEvaluate: {
        text: '去评价',
        color: '#ff7e00',
        border: '.01rem solid #ff7e00'
      }
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
    softCorner,
    infoItem
  },
  methods: {
    trigger () {
      if (this.eventType) {
        this.$emit(this.eventType, this.data)
      }
    },
    triggerHistory (ev) {
      if (this.eventTypeHistory) {
        this.$emit(this.eventTypeHistory, this.dataHistory)
      }
    },
    triggerEvaluate () {
      if (this.eventTypeEvaluate) {
        this.$emit(this.eventTypeEvaluate, this.dataEvaluate)
      }
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.recordCard
  display: flex
  flex-wrap: wrap
  background-color: $white
  padding: $paddingTop $paddingRight 0 $paddingLeft
  position: relative
  overflow: hidden

  .identity
    position: absolute
    padding: 1rem 1rem .02rem 1rem
    background: #0ab474
    color: #fff
    font-size: .18rem
    line-height: .25rem
    font-weight: $fontWeightBold
    transform: rotate(-45deg) translate(-.4rem, -1.84rem)

  .firstUser
    flex-basis: 100%
    flex-grow: 0
    flex-shrink: 0
    display: flex
    padding-bottom: .16rem

    .imgBox
      flex-basis: 1rem
      flex-grow: 0
      flex-shrink: 0
      margin: 0 $separate24 0 0

      .img
        width: 1rem
        height: 1rem
        border-radius: 50%

    .right
      flex-basis: 100px
      flex-grow: 1
      flex-shrink: 1
      display: flex
      flex-wrap: wrap
      border-bottom: .01rem solid $greyf

      .first
        flex-basis: 100%
        flex-grow: 0
        flex-shrink: 0
        display: flex
        align-items: center
        font-size: .36rem
        line-height: .5rem
        margin: 0 0 $separate08 0

        .name
          font-weight: $fontWeightBold

        .post
          color: $grey6
          margin: 0 0 0 $separate08

        .workTime
          margin: 0 0 0 $separate08

      .second
        display: flex
        font-size: .32rem
        line-height: .45rem
        font-weight: $fontWeightBold
        margin: 0 0 $separate16 0

        .subject
          margin: 0 0 0 $separate16

  .secondUser
    flex-basis: 100%
    flex-grow: 0
    flex-shrink: 0
    display: flex
    justify-content: space-between
    padding: .16rem 0 $paddingBottom 0

    .left
      flex-basis: 100px
      flex-grow: 1
      flex-shrink: 1
      display: flex
      flex-wrap: wrap
      margin: 0 $separate24 0 0

      .item
        flex-basis: 100%
        flex-grow: 1
        flex-shrink: 1

      .margin
        margin: 0 0 $separate24 0

    .img
      width: 1.51rem
      align-self: center

  .buttonBox
    flex-basis: 100%
    flex-grow: 0
    flex-shrink: 0
    display: flex
    justify-content: flex-end
    padding: .16rem 0

    // .viewCaseHistory
    // .gotoEvaluate
    .pointBox
      position: relative

      .point
        position: absolute
        top: -.06rem
        left: -.18rem
        width: .24rem
        height: .24rem
        border-radius: 50%
        background: linear-gradient(to bottom, #ff2f51, #e51515)

    .margin
      margin: 0 0 0 $separate28

</style>
