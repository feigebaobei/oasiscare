<!-- 这个组件放在这里是计划只用于formItem.不用于common -->
<template>
  <div class="label" :class="[{labelBold: isBold}]">
    <div class="keyBox space-between" :style="[compKeyW]" v-if="keyAlign === 'space-between'">
      <span v-for="(item, index) in keys" :key="index" v-html="item"></span>
    </div>
    <div class="keyBox space-around" :style="[compKeyW]" v-if="keyAlign === 'space-around'">
      <span v-for="(item, index) in keys" :key="index" v-html="item"></span>
    </div>
    <div class="keyBox" :style="[compKeyW]" v-if="['left', 'center', 'right'].indexOf(keyAlign) > -1">
      <span :style="[compAlign]" v-html="keyItem"></span>
    </div>
  </div>
</template>

<script>
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
        // flexBasis: this.keyW
        width: this.keyW
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

.label

  .keyBox
    display: flex

  .space-around
    justify-content: space-around

  .space-between
    justify-content: space-between

.labelBold
  font-weight: $fontWeightBold

</style>
