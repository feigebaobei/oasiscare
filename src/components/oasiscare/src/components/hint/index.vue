<template>
  <div class="hint">
    <img :src="compImgUrl" alt="" class="hintIcon">
    <p class="hintText" v-html="text"></p>
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
        return icon.hint.x2
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

.hint
  background-color: #ffefd1
  padding: .16rem $paddingRight .16rem $paddingLeft
  display: flex
  align-items: center

  .hintIcon
    width: .19rem
    height: .24rem
    margin: 0 $separate16 0 0

  .hintText
    color: $grey6
    font-size: .24rem
    line-height: .33rem
    margin: 0

</style>
