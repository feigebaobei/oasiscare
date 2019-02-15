<template>
  <div class="authentication">
    <div class="aBox">
      <img :src="compImgUrl" alt="" class="auImg">
      <span class="auText" v-text="text"></span>
    </div>
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
    text: {
      type: String,
      default: '全球医联体认证'
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
        return icon.medal.x2
      }
    }
  },
  components: {
  },
  methods: {
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.authentication
  font-size: 0

  .aBox
    display: inline-flex
    position: relative
    // font-size: 0

    .auImg
      width: .27rem
      height: .38rem
      position: absolute

    .auText
      // display: inline-block
      color: $white
      font-size: .24rem
      line-height: .38rem
      padding: 0 .14rem 0 .16rem
      margin: 0 0 0 .14rem
      font-weight: $fontWeightBold
      border-top-right-radius: 50rem
      border-bottom-right-radius: 50rem
      background: linear-gradient(to right, #d0cdd6, #a09ea7)

</style>
