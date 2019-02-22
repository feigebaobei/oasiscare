<template>
  <div class="small">
    <div class="leaderBox" v-if="isLeader">
      <span>团长</span>
    </div>
    <div class="headerBox">
      <img :src="compHeaderImg" alt="" class="headerImg">
      <medicine :text="authenText"></medicine>
    </div>
    <p class="name" v-html="name"></p>
    <p class="post" v-html="post"></p>
    <hard-corner class="workTime" :text="compWorkTime" :color="'#ff9f00'" :border="'.02rem solid #ff9f00'" :area="'middle'"></hard-corner>
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
import medicine from '../authentication/medicine.vue'
import hardCorner from '../button/hardCorner.vue'
import { workTime } from '../../data/index.js'
export default {
  props: {
    isLeader: {
      type: Boolean,
      default: false
    },
    imgUrl: {
      type: String,
      default: ''
    },
    authenText: {
      type: String,
      default: '认证'
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
    }
  },
  data () {
    return {
    }
  },
  computed: {
    compHeaderImg () {
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
    medicine,
    hardCorner
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.small
  border-radius: .16rem
  padding: $paddingTop4 0 $paddingBottom4 0
  overflow: hidden
  display: flex
  // flex-basis: 1.94rem
  width: 1.94rem
  flex-grow: 0
  flex-shrink: 0
  justify-content: center
  flex-wrap: wrap
  background-color: $white
  position: relative

  .leaderBox
    position: absolute
    top: 0
    left: 0
    border-bottom-right-radius: .16rem
    background: linear-gradient(to right, #ff9261, #ff7461)
    display: flex
    align-items: center
    justify-content: center
    padding: .02rem .08rem
    font-size: .2rem
    line-height: .28rem
    color: #fff
    font-weight: $fontWeightBold

  .headerBox
    border-radius: 50%
    flex-basis: 100%
    flex-grow: 0
    flex-shrink: 0
    font-size: 0
    display: flex
    justify-content: center
    position: relative
    margin: 0 0 .2rem 0

    .headerImg
      width: 1rem
      height: 1rem
      border-radius: 50%
      background: $greyd

    .medicine
      position: absolute
      bottom: 0

  .name
    flex-basis: 100%
    flex-grow: 0
    flex-shrink: 0
    display: flex
    justify-content: center
    color: $grey4
    font-size: .28rem
    font-weight: $fontWeightBold
    line-height: .4rem
    margin: 0 0 .04rem 0

  .post
    flex-basis: 100%
    flex-grow: 0
    flex-shrink: 0
    display: flex
    justify-content: center
    color: $grey9
    font-size: .2rem
    line-height: .28rem
    font-weight: $fontWeightCommon
    margin: 0 0 .08rem 0

</style>
