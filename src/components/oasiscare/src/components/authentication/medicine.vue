<template>
  <div class="medicine">
    <div class="iconBox">
      <span>医</span>
    </div>
    <span class="auText" v-html="text"></span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '认证'
    }
  },
  data () {
    return {
    }
  },
  computed: {
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

.medicine
  display: flex
  flex-wrap: wrap
  align-items: center
  position: relative

  .iconBox
    position: absolute
    box-sizing: border-box
    width: .32rem
    height: .32rem
    border: .01rem solid #fff
    border-radius: 50%
    background: linear-gradient(to right, #e2b774, #b68a50)
    display: flex
    align-items: center
    padding: .03rem .06rem
    align-items: center
    justify-content: center
    font-size: .18rem
    line-height: .24rem
    color: $white

  .auText
    color: $white
    font-size: .18rem
    line-height: .24rem
    padding: .02rem .08rem .02rem .18rem
    margin: 0 0 0 .16rem
    font-weight: $fontWeightBold
    border-top-right-radius: 100px
    border-bottom-right-radius: 100px
    background: linear-gradient(to right, #d1d6dc, #a5abb1)

</style>
