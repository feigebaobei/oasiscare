<template>
  <div class="tabBarTime" :style="[compHeight]">
    <div class="allBox" :class="[{active: activeValue === '*'}]" v-if="hasAll" @click="triggerAll">
      <span>全部</span>
    </div>
    <div class="box" :style="[compScrollWidth]">
      <div class="shelterLeft" v-if="hasAll">&nbsp;</div>
      <div class="scrollBox">
        <div class="item" v-for="(item, index) in dataItems" :key="index" @click="triggerItem(item)">
          <item-time :weekText="item.weekText" :dayText="item.value" :isActive="item.value === activeValue"></item-time>
        </div>
      </div>
      <div class="shelterRight"></div>
    </div>
  </div>
</template>

<script>
import itemTime from './itemTime.vue'
export default {
  props: {
    value: {
      // type: []
      defautl: null
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
      type: [Date, String],
      defautl: '', // yyyy-mm-dd
      valetator (value) {
        return value instanceof Date || typeof value === 'string'
      }
    },
    timeEnd: {
      type: [Date, String],
      default: '',
      valetator (value) {
        return value instanceof Date || typeof value === 'string'
      }
    },
    timeSeparate: {
      type: String,
      default: '-'
    },
    dateFormat: {
      type: String,
      default: 'mm-dd' // yy-m-d, m-d, yyyy-mm-dd, mm-dd ...
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
      activeValue: null,
      dataDataItems: [],
      dataItems: []
    }
  },
  watch: {
    value: function () {
      this.checkValue()
      // let obj = Object.create(null)
      // for ( let i = 0, iLen = this.dataItems.length; i < iLen; i++) {
      //   if (this.dataItems[i].value === newValue) {
      //     break
      //   }
      // }
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
    compDataItems: {
      set (value) {
        this.dataDataItems = value
      },
      get () {
        return this.dataDataItems
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
        let objStart = Object.create(null)
        let objEnd = Object.create(null)
        let arrStart = this.timeStart.split('-')
        let arrEnd = this.timeEnd.split('-')
        if (arrStart.length) {
          objStart = {
            y: Number(arrStart[0]),
            m: Number(arrStart[1]),
            d: Number(arrStart[2])
          }
        }
        if (arrEnd.length) {
          objEnd = {
            y: Number(arrEnd[0]),
            m: Number(arrEnd[1]),
            d: Number(arrEnd[2])
          }
        }
        let step = (new Date(this.timeEnd) - new Date(this.timeStart)) / (1000 * 60 * 60 * 24)
        let arrResult = []
        let dStart = new Date(`${this.timeStart}`)
        
        for (let i = 0; i < step; i++) {
          let d = this.addDay(dStart, i)
          // console.log(d)
          arrResult.push({
            y: d.getFullYear(),
            m: d.getMonth() + 1,
            d: d.getDate()
          })
        }
        // console.log(objStart)
        // console.log(objStart)
        // console.log(step)
        // console.log(arrResult)
        let obj = {}
        if (this.hasAll) {
          
        }
        obj = {
          weekText: '今天',
          yearText: arrResult[0].y,
          monthText: arrResult[0].m < 10 ? `0${arrResult[0].m}` : arrResult[0].m,
          dayText: arrResult[0].d < 10 ? `0${arrResult[0].d}` : arrResult[0].d
          // value: `${arrResult[0].m}-${arrResult[0].d}`
        }
        obj.value = `${obj.monthText}-${obj.dayText}`
        this.dataItems.push(obj)
        obj = {
          weekText: '明天',
          yearText: arrResult[1].y,
          monthText: arrResult[1].m < 10 ? `0${arrResult[1].m}` : arrResult[1].m,
          dayText: arrResult[1].d < 10 ? `0${arrResult[1].d}` : arrResult[1].d
        }
        obj.value = `${obj.monthText}-${obj.dayText}`
        this.dataItems.push(obj)
        for (let i = 2; i < step; i++) {
          obj = {
            weekText: this.getChinaWeek(new Date(arrResult[i].y, arrResult[i].m, arrResult[i].d)),
            yearText: arrResult[i].y,
            monthText: arrResult[i].m < 10 ? `0${arrResult[i].m}` : arrResult[i].m,
            dayText: arrResult[i].d < 10 ? `0${arrResult[i].d}` : arrResult[i].d
          }
          obj.value = `${obj.monthText}-${obj.dayText}`
          this.dataItems.push(obj)
        }
      }
    },
    // 检验数据类型
    checkType (value) {
      // console.log(typeof value)
      // value.
      return typeof value
    },
    addDay (d, n) {
      // return d.setDate(d.getDate() + n)
      return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n)
    },
    // getChinaWeek
    getChinaWeek (d) {
      let str = ''
      switch (d.getDay()) {
        case 0:
          str = '周日'
          break
        case 1:
          str = '周一'
          break
        case 2:
          str = '周二'
          break
        case 3:
          str = '周三'
          break
        case 4:
          str = '周四'
          break
        case 5:
          str = '周五'
          break
        case 6:
        default:
          str = '周六'
          break
      }
      return str
    },
    checkValue () {
      let obj = {}
      for ( let i = 0, iLen = this.dataItems.length; i < iLen; i++) {
        if (this.dataItems[i].value === this.value) {
          // this.activeValue = this.dataItems[i].value
          obj = this.dataItems[i]
          break
        }
      }
      if (obj.value) {
        this.activeValue = obj.value
      } else {
        if (this.value === '*') {
          this.activeValue = '*'
        } else {
          this.activeValue = null
        }
      }
    },
    triggerAll () {
      if (this.eventTypeAll) {
        // this.$emit('input', this.dataAll)
        // let str = ''
        // this.dataItems.forEach((item, index, arr) => {
        //   str += `${item.value}&`
        // }, this)
        // str = str.slice(0, str.length - 2)
        this.$emit('input', '*')
        this.$emit(this.eventTypeAll, this.dataAll)
      }
    },
    triggerItem (data) {
      if (this.eventTypeItem) {
        // this.$emit(this.eventTypeItem, this.dataItem)
        console.log(data)
        this.$emit('input', data.value)
        this.$emit(this.eventTypeItem, this.dataItem)
      }
    }
  },
  created () {},
  mounted () {
    this.createTimeData()
    this.checkValue()
    // this.compDataItems = this.dataItems
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
