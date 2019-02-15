<template>
  <div class="addressItem">
    <div class="aiTitleBox">
      <div class="aiTitle">
        <span v-for="(item, index) in title" :key="index" v-html="item.text" class="aitItem" :class="[{active: item.active}]"></span>
      </div>
      <h2 class="aiAddress" v-html="distance"></h2>
    </div>
    <p class="aiSubTitle" v-if="subTitle.length" v-html="compSubTitle"></p>
    <div class="bottomTrue" v-if="hasBottom"></div>
    <div class="bottomFalse" v-else></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: [Array],
      default () {
        return [
          // {
          //   text: '',
          //   value: '',
          //   active: ''
          // }
        ]
      }
    },
    distance: {
      type: [String, Number],
      default: ''
    },
    subTitle: {
      type: [Array],
      default () {
        return [''] // eg: ['first', 'second']
      }
    },
    subTitleHasSeparate: {
      tyep: Boolean,
      default: true
    },
    hasBottom: {
      tyep: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    compSubTitle () {
      let str = ''
      this.subTitle.forEach((item) => {
        if (this.subTitleHasSeparate) {
          str += `${item} `
        } else {
          str += `${item}`
        }
      }, this)
      return str
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

.addressItem
  background-color: $white
  padding: $paddingTop $paddingRight 0 $paddingLeft

  .aiTitleBox
    display: flex
    // flex-wrap: wrap
    align-items: center
    margin: 0 0 $separate08 0

    .aiTitle
      flex-grow: 1
      flex-shrink: 1
      margin: 0 $separate24 0 0
      font-size: 0

      .aitItem
        color: $grey6
        font-size: .28rem
        line-height: .4rem
        font-weight: $fontWeightBold

      .active
        color: $orange

    .aiAddress
      color: $grey6
      font-size: .28rem
      line-height: .34rem
      flex-grow: 0
      flex-shrink: 0
      margin: 0

  .aiSubTitle
    color: $grey6
    font-size: .24rem
    font-weight: $fontWeightCommon
    line-height: .33rem
    margin: 0

  .bottomTrue
    flex-basis: 100%
    border-bottom: 1px solid $greyf
    height: $paddingBottom
    box-sizing: border-box

  .bottomFalse
    flex-basis: 100%
    border: none
    height: $paddingBottom
    box-sizing: border-box

</style>
