<template>
  <div class="tabBarTime" :style="[compHeight]">
    <div class="allBox" :class="[{active: dataValue === '*'}]" v-if="hasAll" @click="triggerAll">
      <span>全部</span>
    </div>
    <div class="box" :style="[compScrollWidth]">
      <div class="shelterLeft" v-if="hasAll">&nbsp;</div>
      <div class="scrollBox">
        <div class="item" v-for="(item, index) in dataItems" :key="index" @click="triggerItem(item)">
          <item-time :weekText="mWeek(item)" :dayText="mDay(item)" :isActive="mValue(item)"></item-time>
        </div>
      </div>
      <div class="shelterRight"></div>
    </div>
  </div>
</template>

<script>
import itemTime from './itemTime.vue'
import { getChinaWeek } from '../../lib/util.js'
export default {
  props: {
    value: { // 若使用字符串必须使用yyyy-mm-dd格式
      type: [Date, String],
      // type: Date,
      defautl: '*',
      validator: function (value) {
        let isDate = value instanceof Date
        if (isDate) {
          return true
        } else {
          // let arr = value.split('-')
          // return arr.length === 3
          return value === '*' || value === ''
        }
      }
    },
    hasAll: {
      type: Boolean,
      default: false
    },
    hasDownArrow: {
      type: Boolean,
      default: false
    },
    timeStart: {
      type: Date
      // defautl: new Date()
    },
    timeEnd: {
      type: Date
      // default: new Date()
    },
    timeSeparate: { // 用于显示时间(副标题)。所以必须存在。
      type: String,
      default: '-',
      require: true
    },
    dateFormat: {
      type: String,
      default: 'mm-dd' // yy-m-d, m-d, yyyy-mm-dd, mm-dd ... 都是小写
    },
    timeStep: {
      type: Number, // x 天
      default: 7
    },
    eventTypeAll: {
      type: String,
      default: ''
    },
    dataAll: {
      default () {
        return {}
      }
    },
    eventTypeItem: {
      type: String,
      default: ''
    }
    // dataItem: { //
    //   default () {
    //     return {}
    //   }
    // }
  },
  data () {
    return {
      dataValue: this.value,
      dataDataItems: [],
      dataItems: [],
      dataTimeStart: '',
      dataTimeEnd: '',
      dataTimeStep: 0,
      dataDateFormat: ''
    }
  },
  watch: {
    value: function (newValue) {
      this.dataValue = newValue
    },
    timeStart: function () {
      this.createTimeData()
    },
    timeEnd: function () {
      this.createTimeData()
    },
    timeStep: function () {
      this.createTimeData()
    }
  },
  computed: {
    compHeight () {
      if (this.hasDownArrow) {
        return {
          height: '1.08rem'
        }
      } else {
        return {
          height: '1rem'
        }
      }
    },
    compScrollWidth () {
      if (this.hasAll) {
        return {
          maxWidth: 'calc( 100% - 1.36rem )'
        }
      } else {
        return {
        }
      }
    }
    // compDateFormat: {
    //   set (value) {
    //     let str = this.dateFormat.toLowerCase()
    //   },
    //   get () {
    //     return this.dataDateFormat
    //   }
    // }
  },
  components: {
    itemTime
  },
  methods: {
    createTimeData () {
      if (!!this.timeStart && !!this.timeEnd) {
        this.dataTimeStart = this.timeStart
        this.dataTimeEnd = this.timeEnd
        this.dataTimeStep = (this.dataTimeEnd - this.dataTimeStart) / (1000 * 60 * 60 * 24)
        for (let i = 0; i < this.dataTimeStep; i++) {
          this.dataItems.push(
            this.laterDate(this.dataTimeStart, i)
          )
        }
        return false
      }
      if (!!this.timeStart && !!this.timeStep) {
        this.dataTimeStart = this.timeStart
        this.dataTimeStep = this.timeStep
        for (let i = 0; i < this.dataTimeStep; i++) {
          this.dataItems.push(
            this.laterDate(this.dataTimeStart, i)
          )
        }
        return false
      }
      if (!!this.timeEnd && !!this.timeStep) {
        this.dataTimeEnd = this.timeEnd
        this.dataTimeStep = this.timeStep
        this.dataTimeStart = this.dataTimeEnd
        this.dataTimeStart.setDate(this.dataTimeEnd.getDate() - this.timeStep)
        for (let i = 0; i < this.dataTimeStep; i++) {
          this.dataItems.push(
            this.laterDate(this.dataTimeStart, i)
          )
        }
        return false
      }
    },
    // 检验数据类型
    isDate (value) {
      return value instanceof Date
    },
    laterDate (d, n) {
      return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n)
    },
    mWeek (data) {
      return getChinaWeek(data)
    },
    mDay (data) {
      let str = this.dateFormat.toLowerCase()
      let mLength = str.match(/m/g).length
      let m = ''
      if (mLength > 1) {
        // return `${data.getMonth() < 10 ? }`
        m = (data.getMonth() < 10 ? `0${data.getMonth() + 1}` : data.getMonth() + 1)
      } else {
        m = data.getMonth() + 1
      }
      let dLength = str.match(/d/g).length
      let d = ''
      if (dLength > 1) {
        d = data.getDate() < 10 ? `0${data.getDate()}` : `${data.getDate()}`
      } else {
        d = data.getDate()
      }
      return `${m}${this.timeSeparate}${d}`
    },
    mValue (data) {
      // 若使用日期是否相等判断有会很大误差。所以使用y/m/d是否相等判断
      let objData = {
        y: data.getFullYear(),
        m: data.getMonth(),
        d: data.getDate()
      }
      let objValue = {}
      if (this.isDate(this.value)) {
        objValue = {
          y: this.value.getFullYear(),
          m: this.value.getMonth(),
          d: this.value.getDate()
        }
        return objData.y === objValue.y && objData.m === objValue.m && objData.d === objValue.d
      } else {
        return false
      }
    },
    triggerAll () {
      this.$emit('input', '*')
      if (this.eventTypeAll) {
        this.$emit(this.eventTypeAll, this.dataAll)
      }
    },
    triggerItem (data) {
      // 点击时返回当前item上的时间
      this.$emit('input', data)
      if (this.eventTypeItem) {
        this.$emit(this.eventTypeItem, data)
      }
    }
  },
  created () {},
  mounted () {
    this.createTimeData()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.tabBarTime
  display: flex
  background-color: $white

  .allBox
    flex-basis: 1.36rem
    flex-grow: 0
    flex-shrink: 0
    font-size: .32rem
    font-weight: $fontWeightCommon
    line-height: .45rem
    display: flex
    align-items: center
    justify-content: center

  .active
    color: $white
    background-color: $orange

  .box
    // overflow-x: scroll
    // overflow-y: hidden
    // max-width: calc( 100% - 1.36rem )
    flex-basis: 100%
    flex-grow: 0
    flex-shrink: 0
    display: flex
    position: relative

    .shelterLeft
      position: absolute
      top: 0
      left: 0
      width: .16rem
      height: 100%
      background: linear-gradient(to right, $greyf, rgba(255, 255, 255, 0))
      pointer-events: none

    .scrollBox
      overflow-x: auto
      overflow-y: hidden
      flex-basis: 100%
      flex-grow: 0
      flex-shrink: 0
      display: flex
      user-select: none

      .item
        flex-basis: 1.36rem
        flex-grow: 0
        flex-shrink: 0
        display: flex

    // .scrollBox::-webkit-scrollbar
    //   display: none

    .shelterRight
      position: absolute
      top: 0
      right: 0
      width: .7rem
      height: 100%
      background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, .5))
      pointer-events: none

</style>
