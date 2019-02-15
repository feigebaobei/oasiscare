<!-- 日后会增加点星星时设置数据的功能 -->
<template>
  <div class="grade">
    <!-- <img :src="compImgUrl" alt="" class="starIcon"> -->
    <!-- <img :src="compImgUrl" alt="" class="starIcon"> -->
    <img :src="activeIcon" alt="" class="starIcon activeImg" v-for="(item, activeIndex) in activeNumber" :key="activeIndex">
    <img :src="unActiveIcon" alt="" class="starIcon unActiveImg" v-for="(item, unActiveIndex) in unActiveNumber" :key="unActiveIndex + total">
    <!-- 因为activeIndex 和 unActiveIndex 的值都是从0开始取的。所以会有重复的情况发生。所以故意加一个数（这里使用了total），使这2个值不可能出现相等。 -->
    <span class="gradeValue" v-html="compValue"></span>
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      total: 5,
      dataValue: 0, // 可为小数
      activeNumber: 0, // 不可为小数
      unActiveNumber: 0,
      activeIcon: icon.yellowStar.x2,
      unActiveIcon: icon.greyStar.x2
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
    },
    compValue: {
      set (value) {
        if (value > this.total) {
          this.dataValue = this.total
        } else {
          if (value < 0) {
            this.dataValue = 0
          } else {
            this.dataValue = Math.floor(value)
          }
        }
      },
      get () {
        return this.dataValue
      }
    }
  },
  watch: {
    value: function (newValue) {
      this.mValue(newValue)
    }
  },
  components: {
  },
  methods: {
    mValue (newValue) {
      let box = newValue
      if (newValue < 0) {
        box = 0
      }
      if (newValue > this.total) {
        box = this.total
      }
      this.dataValue = box
      this.activeNumber = Math.floor(box)
      this.unActiveNumber = this.total - this.activeNumber
    }
  },
  created () {},
  mounted () {
    this.mValue(this.value)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.grade
  display: flex
  align-items: center

  .starIcon
    width: .24rem
    height: .24rem
    margin: 0 $separate08 0 0

  // .activeImg

  // .unActiveImg

  .gradeValue
    color: $grey6
    font-size: .24rem
    margin: 0

</style>
