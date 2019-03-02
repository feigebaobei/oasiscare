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
      defautl: null,
      validator: function (value) {
        let isDate = value instanceof Date
        if (isDate) {
          return true
        } else {
          // let arr = value.split('-')
          // return arr.length === 3
          return value === '*'
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
      type: [Date, String], // 日期不全时（年月日）默认当年当月当日
      defautl: new Date(), // yyyy-mm-dd
      validator (value) {
        return value instanceof Date || typeof value === 'string'
      }
    },
    timeEnd: {
      type: [Date, String],
      default: '',
      validator (value) {
        return value instanceof Date || typeof value === 'string'
      }
    },
    timeSeparate: { // 用于从字符串中取时间也用于显示时间。所以必须存在。
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
    },
    dataItem: {
      default () {
        return {}
      }
    }
    // dataItems: {
    //   type: Array,
    //   default () {
    //     return [
    //       // {
    //       //   weekText: 'weekText',
    //       //   yearText: 'yearText',
    //       //   dayText: 'dayText',
    //       //   monthText: 'monthText',
    //       //   value: '',
    //       //   isActive: false
    //       // }
    //     ]
    //   }
    // },
  },
  data () {
    return {
      // dataValue: null,
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
      // this.checkValue()
      this.dataValue = newValue
    },
    timeStart: function () {
      this.createTimeData()
    },
    timeEnd: function () {
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
    },
    compDateFormat: {
      set (value) {
        let str = this.dateFormat.toLowerCase()
      },
      get () {
        return this.dataDateFormat
      }
    }
  },
  components: {
    itemTime
  },
  methods: {
    createTimeData () {
      // timeStart\timeEnd > timeStep
      if (this.timeStart && this.timeEnd) {
        let tempDate = new Date()
        if (this.isDate(this.timeStart)) {
          this.dataTimeStart = this.timeStart
        } else {
          let arr = this.timeStart.split(this.timeSeparate)
          arr.reverse()
          this.dataTimeStart = new Date(arr[2] || new Date().getFullYear(), arr[1] - 1 || new Date().getMonth(), arr[0] || new Date().getDate())
        }
        if (this.isDate(this.timeEnd)) {
          this.dataTimeEnd = this.timeEnd
        } else {
          if (this.timeEnd === '') {
            return 
          }
          let arr = this.timeEnd.split(this.timeSeparate)
          arr.reverse()
          this.dataTimeEnd = new Date(arr[2] || new Date().getFullYear(), arr[1] - 1 || new Date().getMonth(), arr[0] || new Date().getDate())
        }
        this.dataTimeStep = (this.dataTimeEnd - this.dataTimeStart) / (1000 * 60 * 60 * 24)
        for (let i = 0; i < this.dataTimeStep; i++) {
          this.dataItems.push(
            this.laterDate(this.dataTimeStart, i),
          )
        }
      }
      if (this.timeStart && this.timeStep) {

      }
    },
    // opDateFormat () {
    //   let str = this.data
    // },
    // 检验数据类型
    isDate (value) {
      // console.log(typeof value)
      // return typeof value
      return value instanceof Date
    },
    laterDate (d, n) {
      return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n)
    },
    checkValue () {
      let obj = {}
      for ( let i = 0, iLen = this.dataItems.length; i < iLen; i++) {
        if (this.dataItems[i].value === this.value) {
          obj = this.dataItems[i]
          break
        }
      }
      if (obj.value) {
        this.dataValue = obj.value
      } else {
        if (this.value === '*') {
          this.dataValue = '*'
        } else {
          this.dataValue = null
        }
      }
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
      return `${m}-${d}`
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
        let arr = this.value.split('-')
        return objData.y === arr[0] * 1 && objData.m === arr[1] * 1 - 1 && objData.d === arr[2] * 1
      }
    },
    triggerAll () {
      this.$emit('input', '*')
      if (this.eventTypeAll) {
        this.$emit(this.eventTypeAll, this.dataAll)
      }
    },
    triggerItem (data) {
      this.$emit('input', data)
      if (this.eventTypeItem) {
        this.$emit(this.eventTypeItem, this.dataItem)
      }
    }
  },
  created () {},
  mounted () {
    this.createTimeData()
    // this.checkValue()
    // this.opDateFormat()
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
    overflow-x: scroll
    overflow-y: hidden
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
      overflow-x: scroll
      overflow-y: hidden
      flex-basis: 100%
      flex-grow: 0
      flex-shrink: 0
      display: flex
      // flex-wrap: wrap

      .item
        flex-basis: 1.36rem
        flex-grow: 0
        flex-shrink: 0
        display: flex

    .shelterRight
      position: absolute
      top: 0
      right: 0
      width: .7rem
      height: 100%
      background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, .5)) 
      pointer-events: none

</style>
