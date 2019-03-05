<!-- 打电话的提示框不建议写在该组件内。 -->
<template>
  <div class="addressPhone">
    <img :src="addressIcon" alt="" class="addressIcon">
    <span v-html="addressText" class="addressText"></span>
    <div class="separate"></div>
    <img :src="phoneIcon" alt="" class="phoneIcon" @click="triggerTel">
    <div class="bottomTrue" v-if="hasBottom"></div>
    <div class="bottomFalse" v-else></div>
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    // 这里使用addressText是考虑到日后可能会出现addressValue
    addressText: {
      type: String,
      default: ''
    },
    hasBottom: {
      type: Boolean,
      default: true
    },
    // tel: {
    //   type: [String, Number],
    //   default: ''
    // },
    eventTypeTel: {
      type: String,
      default: ''
    },
    dataTel: {
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      addressIcon: icon.address.x2,
      phoneIcon: icon.phone.x2
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
    triggerTel () {
      if (this.eventTypeTel === '') {
        this.$emit(this.eventTypeTel, this.dataTel)
      }
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.addressPhone
  padding: .27rem 0 0 0
  background-color: $white
  display: flex
  align-items: center
  flex-wrap: wrap

  .addressIcon
    width: .26rem
    height: .34rem
    flex-grow: 0
    flex-shrink: 0
    margin: 0 $separate24 0  .28rem

  .addressText
    max-width: calc(100% - 2.5rem)
    flex-grow: 1
    flex-shrink: 1
    margin: 0 $separate24 0 0
    font-size: .28rem
    line-height: .4rem
    padding: .05rem 0

  .separate
    width: .01rem
    flex-grow: 0
    flex-shrink: 0
    background-color: $greyf
    align-self: stretch

  .phoneIcon
    width: .44rem
    height: .44rem
    flex-grow: 0
    flex-shrink: 0
    margin: 0 .48rem

  .bottomTrue
    flex-basis: 100%
    height: .27rem
    border-bottom: .01rem solid $greyf

  .bottomFalse
    flex-basis: 100%
    height: .27rem
    border: none

</style>
