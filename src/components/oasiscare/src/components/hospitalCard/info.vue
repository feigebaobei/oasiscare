<template>
  <div class="info">
    <p class="iTitle" v-html="title"></p>
    <div class="iSecond">
      <div class="left">
        <authentication v-if="hasAuthentication"></authentication>
        <hard-corner class="health" v-if="hasHealth" :text="health.text" :color="health.color" :bg="health.bg"></hard-corner>
        <hard-corner class="business" v-if="hasBusiness" :text="business.text" :color="business.color" :bg="business.bg"></hard-corner>
      </div>
      <grade :value="gradeValue"></grade>
    </div>
    <div class="iThree">
      <div class="left">
        <img :src="dataTimeIcon" alt="" class="timeIcon">
        <span class="timeDay" v-html="timeDay"></span>
        <span class="time" v-html="time"></span>
      </div>
      <div class="right" v-if="hasIntroduce">
        <span>医院简介</span>
        <img :src="dataDirectionIcon" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import authentication from '../authentication/index.vue'
import hardCorner from '../button/hardCorner.vue'
import grade from '../grade/index.vue'
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    hasAuthentication: {
      type: Boolean,
      default: false
    },
    hasHealth: {
      type: Boolean,
      default: false
    },
    hasBusiness: {
      type: Boolean,
      default: false
    },
    gradeValue: {
      type: Number,
      default: 0
    },
    timeDay: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    hasIntroduce: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      dataTimeIcon: icon.timeIcon.x2,
      dataDirectionIcon: icon.arrowsBig.x2,
      // 暂时用不到
      // authen: {
      //   text: '全球医联体认证'
      // },
      health: {
        text: '医保',
        color: '#fff',
        bg: '#8BBFFC'
      },
      business: {
        text: '商保',
        color: '#fff',
        bg: '#87CD72'
      }
    }
  },
  computed: {
  },
  components: {
    authentication,
    hardCorner,
    grade
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.info
  padding: $paddingTop $paddingRight $paddingBottom $paddingLeft
  background-color: $white
  display: flex
  flex-wrap: wrap
  border-radius: .16rem

  .iTitle
    margin: 0 0 .08rem 0
    font-size: .36rem
    font-weight: $fontWeightBold
    line-height: .5rem
    flex-basis: 100%

  .iSecond
    display: flex
    justify-content: space-between
    flex-basis: 100%
    align-items: center
    margin: 0 0 .16rem 0

    .left
      flex-basis: 100px
      flex-grow: 1
      flex-shrink: 1
      margin: 0 $separate24 0 0
      display: flex
      // justify-content:

      .health
      .business
        margin: 0 0 0 $separate08

    .right
      flex-grow: 0
      flex-shrink: 0

  .iThree
    flex-basis: 100%
    display: flex
    justify-content: space-between
    font-size: .24rem
    line-height: .33rem
    align-items: center

    .left
      color: $grey9
      font-size: .24rem
      line-height: .33rem
      display: flex
      align-items: center

      .timeIcon
        width: .21rem
        height: .21rem

      .timeDay
      .time
        margin: 0 0 0 $separate08

    .right
      color: $grey4
      display: flex
      align-items: center

      img
        width: .28rem
        height: .28rem

</style>
