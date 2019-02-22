<template>
  <div class="infoItem">
    <div class="keyBox space-between" :style="[compKeyW]" v-if="keyAlign === 'space-between'">
      <span v-for="(item, index) in keys" :key="index" v-html="item"></span>
    </div>
    <div class="keyBox space-around" :style="[compKeyW]" v-if="keyAlign === 'space-around'">
      <span v-for="(item, index) in keys" :key="index" v-html="item"></span>
    </div>
    <div class="keyBox" :style="[compKeyW]" v-if="['left', 'center', 'right'].indexOf(keyAlign) > -1">
      <span :style="[compAlign]" v-html="keyItem"></span>
    </div>
    <div class="valueBox">
      <slot><span class="valueSpan" v-html="value"></span></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    keyW: {
      type: String, // 需要有单位
      // default: '1.4rem'
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
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
    }
  },
  computed: {
    keys () {
      let arr = this.keyItem.split('')
      return arr
    },
    compKeyW () {
      let obj = {
        flexBasis: this.keyW
      }
      return obj
    },
    compAlign () {
      let obj = Object.create(null)
      switch (this.keyAlign) {
        case 'left':
        default:
          obj.textAlign = 'left'
          obj.width = '100%'
          break
        case 'center':
          obj.textAlign = 'center'
          obj.width = '100%'
          break
        case 'right':
          obj.textAlign = 'right'
          obj.width = '100%'
          break
      }
      return obj
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

.infoItem
  display: flex

  .keyBox
    color: $grey9
    margin: 0 $separate24 0 0
    font-weight: $fontWeightBold
    flex-grow: 0
    flex-shrink: 0
    display: flex

    span
      display: inline-block
      font-size: .28rem
      line-height: .4rem

  .space-around
    justify-content: space-around

  .space-between
    justify-content: space-between

  .valueBox
    display: flex
    color: $grey4

    .valueSpan
      font-size: .28rem
      line-height: .4rem
      color: $grey6
      flex-grow: 1
      flex-shrink: 1

</style>
