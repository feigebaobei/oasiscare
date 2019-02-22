<template>
  <div class="info">
    <div class="imgBox">
      <img :src="compImgUrl" alt="" class="img">
    </div>
    <div class="right">
      <div class="first">
        <span class="name" v-html="name"></span>
        <hard-corner class="leader" v-if="isLeader" :text="dataLeader.text" :color="dataLeader.color" :bg="dataLeader.bg" :borderRadius="dataLeader.borderRadius"></hard-corner>
        <span class="post" v-html="post"></span>
      </div>
      <div class="second">
        <span class="hospital" v-html="hospital"></span>
        <hard-corner class="subject" v-if="isLeader" :text="subject" :color="dataSubject.color" :border="dataSubject.border" :area="dataSubject.area" :borderRadius="dataSubject.borderRadius"></hard-corner>
      </div>
    </div>
    <div class="separateLine"></div>
    <div class="dataBox">
      <info-block class="dataItem" v-for="(item, index) in dataItems" :key="index" :imgUrl="item.imgUrl" :value="item.value" :valueColor="item.valueColor" :title="item.title"></info-block>
    </div>
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
import hardCorner from '../button/hardCorner.vue'
import infoBlock from '../common/infoBlock.vue'
export default {
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    isLeader: {
      type: Boolean,
      default: false
    },
    post: {
      type: String,
      default: ''
    },
    hospital: {
      type: String,
      default: ''
    },
    hasSubject: {
      type: Boolean,
      default: true
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
          //   imgUrl: 'imgUrl',
          //   value: 'value',
          //   valueColor: 'valueColor',
          //   title: 'title'
          // }
        ]
      }
    }
  },
  data () {
    return {
      dataLeader: {
        text: '团长',
        color: '#fff',
        bg: 'linear-gradient(to right, #ff9261, #ff7461)',
        borderRadius: '.08rem'
      },
      dataSubject: {
        area: 'middle',
        color: '#ff9f00',
        border: '.02rem solid #ff9f00',
        borderRadius: '.04rem'
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
    }
  },
  components: {
    hardCorner,
    infoBlock
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.info
  display: flex
  flex-wrap: wrap
  background-color: $white
  padding: .22rem 0 0 0
  border-radius: .24rem

  .imgBox
    flex-basis: 1.6rem
    flex-grow: 0
    flex-shrink: 0
    position: relative
    margin: 0 $separate24 0 $paddingLeft

    .img
      position: absolute
      top: -.88rem
      width: 1.6rem
      height: 1.6rem
      border-radius: 50%

  .right
    flex-basis: 100px
    flex-grow: 1
    flex-shrink: 1
    // display: flex

    .first
      flex-basis: 100%
      flex-grow: 0
      flex-shrink: 0
      margin: 0 0 $separate08 0
      display: flex
      align-items: center

      .name
        color: $grey4
        font-size: .44rem
        font-weight: .62rem
        font-weight: $fontWeightBold

      .leader
        margin: 0 0 0 $separate16

      .post
        color: $grey9
        margin: 0 0 0 $separate08
        font-size: .24rem
        line-height: .33rem

    .second
      margin: 0 0 .32rem 0
      display: flex
      align-items: center

      .hospital
        color: $grey4
        font-size: .28rem
        line-height: .4rem
        font-weight: $fontWeightBold

      .subject
        margin: 0 0 0 $separate16

  .separateLine
    flex-basis: 100%
    margin: 0 $paddingRight 0 $paddingLeft
    border-bottom: .01rem solid $greyf

  .dataBox
    flex-basis: 100%
    flex-grow: 0
    flex-shrink: 0
    display: flex
    justify-content: space-around

    .dataItem
      flex-basis: 100px
      flex-grow: 1
      flex-shrink: 1

</style>
