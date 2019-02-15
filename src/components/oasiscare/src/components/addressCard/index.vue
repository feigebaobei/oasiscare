<template>
  <div class="addressCard" @click="trigger">
    <div class="addressCardInfo">
      <h2 class="addressCardInfoAddress" :style="compDisableCss" v-html="address"></h2>
      <p class="addressCardInfos" :style="compDisableCss">
        <span class="aciName" v-html="name"></span>
        <span class="aciPhone" v-html="phone"></span>
      </p>
    </div>
    <div class="addressCardFunction">
      <div class="addressCardDefault" v-if="hasDefaultBt" @click.stop="triggerDefault">
        <img :src="compSelIcon" alt="">
        <span class="acfDefaultText" v-html="addressBtText"></span>
      </div>
      <div class="acfCenter"></div><!-- 这个div是为了撑开空间 -->
      <div class="acfRight">
        <div class="addressCardDel" v-if="hasDelBt" @click.stop="triggerDel">
          <img :src="compDelIcon" alt="">
          <span class="acfDelText" v-html="delBtText"></span>
        </div>
        <div class="acfCenter" v-if="hasEditBt && hasDelBt"></div><!-- 这个div是为了撑开空间 -->
        <div class="addressCardEdit" v-if="hasEditBt" @click.stop="triggerEdit">
          <img :src="compEditIcon" alt="">
          <span class="acfEditText" v-html="editBtText"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
export default {
  props: {
    disable: {
      type: Boolean,
      default: false
    },
    address: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    phone: {
      type: [String, Number],
      default: ''
    },
    hasDefaultBt: {
      type: Boolean,
      default: true
    },
    defaultBtSel: { // disable在优先级大于defaultBtSel
      type: Boolean,
      default: false
    },
    defaultBtIcons: { // 必须传入2个值,0:不选中 1：选中
      type: Array,
      default () {
        return ['', '']
      },
      validator: function (value) {
        return value.length === 2
      }
    },
    addressBtText: {
      type: String,
      default: '默认地址'
    },
    hasEditBt: {
      type: Boolean,
      default: true
    },
    editBtIcon: {
      type: String,
      default: ''
    },
    editBtText: {
      type: String,
      default: '编辑'
    },
    hasDelBt: {
      type: Boolean,
      default: true
    },
    delBtIcon: {
      type: String,
      default: ''
    },
    delBtText: {
      type: String,
      default: '删除'
    },
    eventType: {
      type: String,
      default: ''
    },
    eventTypeData: {
      default () {
        return {}
      }
    },
    eventTypeDefault: {
      type: String,
      default: ''
    },
    eventTypeDefaultData: {
      default () {
        return {}
      }
    },
    eventTypeEdit: {
      type: String,
      default: ''
    },
    eventTypeEditData: {
      default () {
        return {}
      }
    },
    eventTypeDel: {
      type: String,
      default: ''
    },
    eventTypeDelData: {
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
    compDisableCss () {
      if (this.disable) {
        return {
          color: '#bbb'
        }
      }
    },
    compSelIcon () {
      if (this.disable) {
        let img = this.defaultBtIcons[0]
        if (img) {
          return img
        } else {
          return icon.unSelectOnly.x2
        }
      } else {
        if (this.defaultBtSel) {
          let img = this.defaultBtIcons[1]
          if (img) {
            return img
          } else {
            return icon.selectOnly.x2
          }
        } else {
          let img = this.defaultBtIcons[0]
          if (img) {
            return img
          } else {
            return icon.unSelectOnly.x2
          }
        }
      }
    },
    compEditIcon () {
      // return this.editBtIcon ? this.editBtIcon : icon.default.x2
      let img = this.editBtIcon
      if (img) {
        return img
      } else {
        return icon.editIcon.x2
      }
    },
    compDelIcon () {
      let img = this.delBtIcon
      if (img) {
        return img
      } else {
        return icon.delIcon.x2
      }
    }
  },
  components: {
  },
  methods: {
    trigger () {
      if (this.eventType && !this.disable) {
        this.$emit(this.eventType, this.eventTypeData)
      }
    },
    triggerDefault () {
      if (this.eventTypeDefault && !this.disable) {
        this.$emit(this.eventTypeDefault, this.eventTypeDefaultData)
      }
    },
    triggerEdit () {
      if (this.eventTypeEdit && !this.disable) {
        this.$emit(this.eventTypeDefault, this.eventTypeEditData)
      }
    },
    triggerDel () {
      if (this.eventTypeDel && !this.disable) {
        this.$emit(this.eventTypeDel, this.eventTypeDelData)
      }
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

  .addressCard
    background-color: $white

    .addressCardInfo
      padding: .44rem .28rem

      .addressCardInfoAddress
        color: $block
        font-size: .32rem
        line-height: .45rem
        margin: 0 0 $separate16 0

      .addressCardInfos
        color: $grey4
        font-size: .28rem
        line-height: .4rem
        margin: 0

    .addressCardFunction
      padding: .32rem .28rem
      color: $grey6
      font-size: .24rem
      display: flex
      justify-content: space-between
      flex-grow: 1
      flex-shrink: 1

      .addressCardDefault
        flex-grow: 0
        flex-shrink: 0
        display: flex
        align-items: center

        img
          width: .36rem
          height: .36rem
          margin: 0 $separate08 0 0

      .acfCenter
        flex-grow: 1
        flex-shrink: 1

      .acfRight
          flex-basis: 2.2rem
          flex-grow: 0
          flex-shrink: 0
          display: flex
          justify-content: space-between
          flex-direction: row-reverse

          .addressCardEdit
            display: flex
            align-items: center
            // margin: 0 .64rem 0 0

            img
              width: .28rem
              height: .28rem
              margin: 0 $separate08 0 0

          .addressCardDel
            display: flex
            align-items: center

            img
              width: .28rem
              height: .28rem
              margin: 0 $separate08 0 0

</style>
