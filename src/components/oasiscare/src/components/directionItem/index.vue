<template>
  <div class="directionItem" @click="trigger">
    <label-vue class="labelVue" :keyW="keyW" :keyAlign="keyAlign" :keyItem="keyItem" :isBold="isBold"></label-vue>
    <div class="diContBox">
      <slot></slot>
    </div>
    <img :src="compImgUrl" alt="" class="didi" v-if="hasDirectionImg" @click="triggerDI">
  </div>

</template>

<script>
import label from '../common/label.vue'
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    keyW: {
      type: String, // 需要有单位
      default: ''
    },
    keyAlign: {
      type: String, // key的水平对齐方式。
      default: 'left' // 'left', 'center', 'right', 'space-around', 'space-between'
    },
    keyItem: {
      type: String,
      default: ''
    },
    isBold: {
      type: Boolean,
      default: false
    },
    hasDirectionImg: {
      type: Boolean,
      default: true
    },
    directionImgUrl: {
      type: String,
      default: ''
    },
    eventType: {
      type: Boolean,
      default: false
    },
    data: {
      default () {
        return {}
      }
    },
    eventTypeDI: {
      type: Boolean,
      default: false
    },
    dataDI: {
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      a0: {

      }
    }
  },
  computed: {
    compImgUrl () {
      let img = this.directionImgUrl
      if (img) {
        return img
      } else {
        return icon.arrowsBig.x2
      }
    }
  },
  components: {
    labelVue: label
  },
  methods: {
    trigger () {
      if (this.eventType) {
        this.$emit(this.eventType, this.data)
      }
    },
    triggerDI () {
      if (this.eventTypeDI) {
        this.$emit(this.eventTypeDI, this.dataDI)
      }
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.directionItem
  padding: $paddingTop4 $paddingRight $paddingBottom4 $paddingLeft
  background-color: $white
  display: flex
  flex-wrap: wrap
  align-items: center
  justify-content: space-between

  .labelVue
    font-size: .28rem
    line-height: .4rem
    margin: 0 $separate24 0 0
    flex-grow: 0
    flex-shrink: 0

  .diContBox
    flex-basis: 100px
    flex-grow: 1
    flex-shrink: 1

  .didi
    width: .28rem
    height: .28rem
    margin: 0 0 0 $separate24
    flex-grow: 0
    flex-shrink: 0

</style>
