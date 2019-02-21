<template>
  <div class="basic">
    <div class="leaderBox">
      <span>团长</span>
    </div>
    <div class="headerBox">
      <img :src="compHeaderImg" alt="" class="headerImg">
    </div>

  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
// import hardCorner from '../button/hardCorner.vue'
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
    compHeaderImg () {
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

.basic
  display: flex
  flex-wrap: wrap
  background-color: $white
  padding: $paddingTop $paddingRight $paddingBottom $paddingLeft

</style>
