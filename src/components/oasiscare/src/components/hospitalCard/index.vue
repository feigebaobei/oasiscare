<template>
  <div class="hospitalCard">
    <div class="hcImgBox">
      <img :src="compImgUrl" alt="" class="img">
    </div>
    <div class="hcInfoBox">
      <div class="titleBox">
        <p class="title" v-html="title"></p>
        <img :src="authenticationIcon" alt="" v-if="hasAuthenticationIcon" class="authenticationIcon">
        <hard-corner class="hasHealthTag" v-if="hasHealthTag" :text="health.text" :color="health.color" :borderRadius="health.borderRadius" :bg="health.bg"></hard-corner>
        <hard-corner class="hasBusinessTab" v-if="hasBusinessTab" :text="business.text" :color="business.color" :borderRadius="business.borderRadius" :bg="business.bg"></hard-corner>
      </div>
      <div class="addressAddDistance">
        <span class="address" v-html="address"></span>
        <span class="distance" v-html="distance"></span>
      </div>
      <div class="hctagBox">
        <hard-corner :class="[{tagItem: true, tagItemNoLast: index !== tags.length - 1}]" v-for="(item, index) in tags" :key="index" :text="item" :color="tag.color" :border="tag.border" :borderRadius="tag.borderRadius"></hard-corner>
      </div>
      <grade :value="grade"></grade>
    </div>
    <div class="bottomTrue" v-if="bottom"></div>
    <div class="bottomFalse" v-else></div>
  </div>
</template>

<script>
import hardCorner from '../button/hardCorner.vue'
import grade from '../grade/index.vue'
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    hasAuthenticationIcon: {
      type: Boolean,
      default: false
    },
    hasHealthTag: {
      type: Boolean,
      default: false
    },
    hasBusinessTab: {
      type: Boolean,
      default: false
    },
    address: {
      type: String,
      default: ''
    },
    distance: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default () {
        return []
      }
    },
    grade: {
      type: Number
    },
    bottom: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      authenticationIcon: icon.medal.x2,
      health: {
        text: '医保',
        color: '#4592FF',
        borderRadius: '.08rem',
        bg: 'rgba(69, 146, 255, .123)'
      },
      business: {
        text: '商保',
        color: '#32BF8B',
        borderRadius: '.08rem',
        bg: 'rgba(50, 191, 139, .12)'
      },
      tag: {
        color: '#9b9b9b',
        border: '.02rem solid #d8d8d8',
        borderRadius: '.08rem'
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
    grade
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.hospitalCard
  padding: $paddingTop $paddingRight 0 $paddingLeft
  background-color: $white
  display: flex
  flex-wrap: wrap

  .hcImgBox
    border-radius: .08rem
    overflow: hidden
    margin: 0 $separate24 0 0
    flex-grow: 0
    flex-shrink: 0
    font-size: 0
    width: 1.6rem
    height: 1.6rem

    .img
      width: 1.6rem
      height: 1.6rem

  .hcInfoBox
    flex-basis: 100px
    max-width: calc( 100% - 1.84rem )
    flex-grow: 1
    flex-shrink: 1
    display: flex
    flex-wrap: wrap

    .titleBox
      margin: 0 0 $separate08 0
      display: flex
      align-items: center
      max-width: 100%
      align-items: center

      .title
        margin: 0
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        color: $black
        font-size: .36rem
        line-height: .5rem

      .authenticationIcon
        width: .27rem
        height: .38rem
        margin: 0 0 0 $separate08

      .hasHealthTag
      .hasBusinessTab
        margin: 0 0 0 $separate08
        flex-basis: .64rem
        flex-grow: 0
        flex-shrink: 0

    .addressAddDistance
      margin: 0 0 $separate24 0
      color: $grey6
      display: flex
      justify-content: space-between
      flex-basis: 100%

      .address
        font-size: .28rem
        line-height: .4rem

      .distance
        font-size: .28rem
        line-height: .34rem
        margin: 0 0 0 $separate24

    .hctagBox
      flex-basis: 100%
      flex-grow: 0
      flex-shrink: 0
      font-size: 0

      .tagItem
        margin-bottom: $separate16

      .tagItemNoLast
        margin-right: .08rem
  
  .bottomTrue
    flex-basis: 100%
    height: .32rem
    border-bottom: .01rem solid #f0f0f0

    
  .bottomFalse
    flex-basis: 100%
    height: .32rem
    border-bottom: none

</style>
