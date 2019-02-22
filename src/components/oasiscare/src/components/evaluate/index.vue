<template>
  <div class="evaluate" @click="trigger">
    <div class="first">
      <div class="left">
        <span class="name" v-html="name"></span>
        <grade class="gradeVue" :value="gradeValue"></grade>
      </div>
      <span class="time" v-html="time"></span>
    </div>
    <!-- <p class="eCont" v-html="text"></p> -->
    <multline class="eCont" :text="text" :line="line" :autoCollapse="autoCollapse" :endChars="endChars" :showExpandBtn="showExpandBtn" :expandBtnText="expandBtnText" :showCollapseBtn="showCollapseBtn" :collapseBtnText="collapseBtnText" @click.native.stop=""></multline>
  </div>
</template>

<script>
import grade from '../grade/index.vue'
import multline from 'vue-multline'
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    gradeValue: {
      type: Number,
      default: 0
    },
    time: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    line: { // 展示的行数
      type: Number,
      default: 3 // 实际显示的是 line - 1 行
    },
    autoCollapse: { // 是否默认收起
      type: Boolean,
      default: true
    },
    endChars: { // 结尾符号
      type: String,
      default: '…'
    },
    showExpandBtn: {
      type: Boolean,
      default: true
    },
    expandBtnText: {
      type: String,
      default: '展开'
    },
    showCollapseBtn: {
      type: Boolean,
      default: true
    },
    collapseBtnText: {
      type: String,
      default: '收起'
    },
    eventType: {
      type: String,
      default: ''
    },
    data: {
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
    grade,
    multline
  },
  methods: {
    trigger () {
      if (this.eventType) {
        this.$emit(this.eventType, this.data)
      }
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.evaluate
  display: flex
  flex-wrap: wrap
  background-color: $white
  padding: $paddingTop $paddingRight $paddingBottom $paddingLeft

  .first
    flex-basis: 100%
    display: flex
    color: $grey9
    font-size: .24rem
    line-height: .33rem
    justify-content: space-between
    margin: 0 0 $separate24 0

    .left
      flex-basis: 70%
      flex-grow: 1
      flex-shrink: 1
      display: flex

      .name
        //max-width: 1rem
        //overflow: hidden
        //text-overflow: '##'
        //white-space: nowrap

      .gradeVue
        margin: 0 0 0 $separate24

    .time
      flex-basis: 30%
      flex-grow: 1
      flex-shrink: 1
      text-align: right

  .eCont
    color: $grey4
    font-size: .24rem
    line-height: .33rem

</style>
