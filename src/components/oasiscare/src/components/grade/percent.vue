<template>
  <div class="percent">
    <img :src="dataStarGrey" alt="" class="starGrey" :style="[compArea]">
    <div class="colorBox" :style="[compValue]">
      <img :src="dataStarColor" alt="" class="starColor" :style="[compArea]">
    </div>
    <span class="text" v-html="compPercentValue"></span>
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    imgUrls: {
      type: Array,
      default () {
        return ['', '']
      },
      validator (value) {
        return value.length === 2
      }
    },
    imgArea: {
      type: Array,
      default () {
        return ['.28rem', '.28rem']
      },
      validator (value) {
        return value.length === 2
      }
    },
    percentValue: {
      type: [String, Number],
      default: 0
    }
  },
  data () {
    return {
      dataStarGrey: '',
      dataStarColor: '',
      dataValue: ''
    }
  },
  computed: {
    compImgUrl: {
      set (value) {
        let img = value[0]
        if (img) {
          this.dataStarGrey = img
        } else {
          this.dataStarGrey = icon.greyStar.x2
        }
        img = value[1]
        if (img) {
          this.dataStarColor = img
        } else {
          this.dataStarColor = icon.yellowStar.x2
        }
      },
      get () {
        return [this.dataStarGrey, this.dataStarColor]
      }
    },
    compPercentValue: {
      set (value) {
        let val = value
        if (val < 0) {
          val = 0
        } else {
          if (val > 100) {
            val = 100
          }
        }
        this.dataValue = val
      },
      get () {
        return `${this.dataValue}%`
      }
    },
    compArea () {
      return {
        width: this.imgArea[0],
        height: this.imgArea[0]
      }
    },
    compValue () {
      let width = String(this.imgArea[0]).slice(0, 1) === '.' ? '0' + String(this.imgArea[0]) : String(this.imgArea[0])
      let val = parseFloat(width)
      let unit = width.slice(String(val).length)
      return {
        width: val * this.dataValue / 100 + unit,
        height: this.imgArea[0],
        overflow: 'hidden'
      }
    }
  },
  watch: {
    percentValue: function (newValue) {
      this.compPercentValue = this.percentValue
    },
    imgUrls: {
      function (newValue) {
        this.compImgUrl = this.imgUrls
      },
      deep: true
    }
  },
  components: {
  },
  methods: {},
  created () {},
  mounted () {
    this.compImgUrl = this.imgUrls
    this.compPercentValue = this.percentValue
  }
}
</script>

<style lang="stylus" scoped>

.percent
  display: flex
  align-items: center
  position: relative

  .colorBox
    position: absolute
    font-size: 0

  .text
    color: $grey6
    font-size: .28rem
    line-height: .33rem

</style>
