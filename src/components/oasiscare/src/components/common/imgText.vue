<template>
  <div class="imgText" @click="trigger">
    <img :src="compImgUrl" alt="">
    <span v-html="text"></span>
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
    },
    eventType: {
      type: String,
      default: ''
    },
    data: {
      defautl () {
        return {}
      }
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
  methods: {
    trigger () {
      if (this.eventType) {
        this.$emit(this.eventType, this.data)
      }
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.imgText
  display: flex
  align-items: center

  img
    width: .36rem
    height: .36rem
    margin: 0 $separate08 0 0

  span
    color: $grey4
    font-size: .28rem
    line-height: .4rem

</style>
