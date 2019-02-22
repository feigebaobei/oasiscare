<template>
  <div class="infoBlock">
    <div class="first">
      <img :src="compImgUrl" alt="" class="img">
      <span class="value" v-html="value" :style="[compColor]"></span>
    </div>
    <p class="title" v-html="title"></p>
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    valueColor: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
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
    compColor () {
      return {
        color: this.valueColor
      }
    }
  },
  components: {
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.infoBlock
  display: flex
  flex-wrap: wrap
  background-color: $white
  padding: .32rem 0 .32rem 0
  font-size: .24rem
  line-height: .33rem
  justify-content: center

  .first
    display: flex
    justify-content: center
    margin: 0 0 $separate08 0

    .img
      width: .32rem
      height: .32rem
      margin: 0 .04rem 0 0

    .value
      font-size: .32rem
      font-weight: $fontWeightBold

  .title
    color: $grey9
    margin: 0
    flex-basis: 100%
    flex-grow: 0
    flex-shrink: 0
    text-align: center

</style>
