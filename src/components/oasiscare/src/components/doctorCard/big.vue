<template>
  <div class="big">
    <div class="imgBox">
      <img :src="compImgUrl" alt="">
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

.big
  display: flex
  flex-wrap: wrap
  background-color: $white
  padding: $paddingTop $paddingRight $paddingBottom $paddingLeft
  
  .imgBox
    border-radius: 50%
    overflow: hidden
    font-size: 0
    margin: 0 $separate24 0 0

    .img
      width: 1rem
      height: 1rem
      border-radius: 50%


</style>
