<template>
  <div class="itemTime">
    <div class="ITBox" :class="[{'active': isActive}]">
      <span class="week" v-html="weekText"></span>
      <span class="day" v-html="dayText"></span>
    </div>
    <div class="ITCorner" v-if="hasDownArrow"></div>
  </div>
</template>

<script>
export default {
  props: {
    weekText: {
      type: String,
      default: ''
    },
    dayText: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    },
    hasDownArrow: {
      type: Boolean,
      default: false
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

.itemTime
  flex-basis: 100%
  display: flex
  flex-wrap: wrap
  justify-content: center

  .ITBox
    flex-basis: 100%
    display: flex
    flex-wrap: wrap
    justify-content: center
    padding: .16rem 0 .12rem 0

    .week
      flex-basis: 100%
      flex-grow: 0
      flex-shrink: 0
      color: $grey6
      font-size: .28rem
      line-height: .4rem
      text-align: center

    .day
      flex-basis: 100%
      flex-grow: 0
      flex-shrink: 0
      color: $grey9
      font-size: .24rem
      line-height: .33rem
      text-align: center

  .ITCorner
    width: 0
    height: 0
    border-top: .08rem solid $orange
    border-right: .08rem solid transparent
    border-bottom: 0
    border-left: .08rem solid transparent

  .active
    background-color: $orange

    .week
    .day
      color: $white

</style>
