<template>
  <div class="grade">
    <span class="empty" @click="setValue(0)"></span>
    <img :src="mImgUrl(index)" alt="" class="starIcon" v-for="(index) in total" :key="index" @click="setValue(index)">
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
    },
    eventAble: {
      type: Boolean,
      default: false
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
    },
    mImgUrl (index) {
      if (this.activeNumber >= index) {
        return this.activeIcon
      } else {
        return this.unActiveIcon
      }
    },
    setValue (index) {
      if (this.eventAble) {
        this.$emit('input', index)
      }
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

  .empty
    width: .24rem
    height: .24rem

  .starIcon
    width: .24rem
    height: .24rem
    margin: 0 $separate08 0 0

  .gradeValue
    color: $grey6
    font-size: .24rem
    margin: 0

</style>
