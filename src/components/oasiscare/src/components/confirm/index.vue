<template>
  <div class="confirm">
    <transition name="fade">
      <div class="confirmBg" v-if="value" @click="close" ref="confirm"></div>
    </transition>
    <transition name="fade">
      <div class="confirmContBox" v-if="value" @click="close">
        <div class="confirmCont">
          <div class="confirmH"></div>
          <div class="confirmB" :style="[compPadding]">
            <!-- 使用内容插槽可以使用确认框内容更多变 -->
            <slot>
              <h2 class="cbTitle" v-html="title"></h2>
              <div class="separate" v-if="compSeparate"></div>
              <p class="cbCont" v-html="cont"></p>
            </slot>
            <!-- <p v-html="confirmCont"></p> -->
          </div>
          <div class="confirmF">
            <span class="confirmCancel" v-if="hasCancelBt" v-html="cancelText" @click.stop="cancel">cancel</span>
            <div class="separate"></div>
            <div class="confirmOk" v-if="hasOkBt" v-html="okText" @click.stop="ok">ok</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    // confirmCont: { // 这个暂时不用了。
    //   type: String,
    //   default: ''
    // },
    title: {
      type: String,
      default: ''
    },
    cont: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: 'cancel'
    },
    okText: {
      type: String,
      default: 'ok'
    },
    hasCancelBt: {
      type: Boolean,
      default: true
    },
    hasOkBt: {
      type: Boolean,
      default: true
    },
    eventTypeCancel: {
      type: String,
      default: ''
    },
    eventTypeOk: {
      type: String,
      default: ''
    },
    eventTypeOpen: {
      type: String,
      default: ''
    },
    eventTypeClose: {
      type: String,
      default: ''
    },
    data: {
      default () {
        return {}
      },
      require: false
    }
  },
  data () {
    return {
    }
  },
  watch: {
    value: function (newValue, oldValue) {
      if (newValue) {
        this.open()
      } else {
        this.close()
      }
    }
  },
  computed: {
    compSeparate () {
      return !(this.title === '' || this.cont === '')
    },
    compPadding () {
      if (this.title !== '' && this.cont === '') { // 只有标题
        return {
          paddingTop: '.72rem',
          paddingBottom: '.64rem'
        }
      }
    }
  },
  components: {
  },
  methods: {
    //
    close: function () {
      this.$emit('input', false)
      this.$emit(this.eventTypeClose, this.data)
    },
    //
    open: function () {
      // this.$emit('input', false)
      if (this.eventTypeOpen) {
        this.$emit(this.eventTypeOpen, this.data)
      }
    },
    //
    cancel: function () {
      if (this.eventTypeCancel) {
        this.$emit(this.eventTypeCancel, this.data)
      }
      this.close()
    },
    //
    ok: function () {
      if (this.eventTypeOk) {
        this.$emit(this.eventTypeOk, this.data)
      }
      this.close()
    },
    //
    init: function () {
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.confirm

  .confirmBg
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    background-color: rgba(0, 0, 0, .4)
    width: 100vw
    height: 100vh

  .confirmContBox
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    display: flex
    flex-direction: column
    justify-content: center
    .confirmCont
      width: 5.4rem
      max-width: 80%
      border-radius: .28rem
      margin-left: auto
      margin-right: auto
      background-color: $white

      .confirmB
        text-align: center
        border: 0
        border-bottom: 1px solid $greyf
        padding: .44rem

        .cbTitle
          color: $grey4
          font-size: .32rem
          line-height: .45rem
          margin: 0

        .separate
          height: .24rem

        .cbCont
          color: $grey4
          font-size: .28rem
          line-height: .4rem
          margin: 0

      .confirmF
        text-align: center
        display: flex
        padding: .2rem 0
        font-size: .36rem
        font-weight: $fontWeightBold
        line-height: .5rem

        .confirmCancel
          box-sizing: border-box
          flex-basis: 50%
          color: $grey9
          flex-grow: 1
          flex-shrink: 1

        .separate
          width: .01rem
          height: .36rem
          align-self: center
          background: $greyf

        .confirmOk
          box-sizing: border-box
          flex-basis: 50%
          color: $orange
          flex-grow: 1
          flex-shrink: 1

  .fade-enter-active, .fade-leave-active
    transition: opacity .4s

  .fade-enter, .fade-leave-to
    opacity: 0

</style>
