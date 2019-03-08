<template>
  <div class="tabBarTime">
    <div class="import">
      <h2>引用</h2>
      <code>import {tabBarTime} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <tab-bar-time v-model="a0.value" :timeStart="a0.timeStart" :timeEnd="a0.timeEnd"></tab-bar-time>
    <h2>有全部bt</h2>
    <h2>设置timeStart/timeEnd</h2>
    <tab-bar-time v-model="a1.value" :hasAll="a1.hasAll" :timeStart="a1.timeStart" :timeEnd="a1.timeEnd"></tab-bar-time>
    <h2>设置timeStart/timeStep</h2>
    <tab-bar-time v-model="a2.value" :hasAll="a2.hasAll" :timeStart="a2.timeStart" :timeStep="a2.timeStep"></tab-bar-time>
    <h2>设置timeEnd/timeStep</h2>
    <tab-bar-time v-model="a3.value" :hasAll="a3.hasAll" :timeStep="a3.timeStep" :timeEnd="a3.timeEnd"></tab-bar-time>
    <h2>无value时，其实这时是不可用的。</h2>
    <tab-bar-time :hasAll="a1.hasAll" :timeStart="a1.timeStart" :timeEnd="a1.timeEnd"></tab-bar-time>
    <tab-bar-time v-model="a5.value" :hasAll="a5.hasAll" :timeStep="a5.timeStep" :timeEnd="a5.timeEnd"></tab-bar-time>
    <h2>绑定事件</h2>
    <tab-bar-time v-model="a2.value" :hasAll="a2.hasAll" :timeStart="a2.timeStart" :timeEnd="a2.timeEnd" :eventTypeAll="'mAll'" :dataAll="{k: 'vAll'}" @mAll="mAll" :eventTypeItem="'mItem'" :dataItem="{k: 'vItem'}" @mItem="mItem"></tab-bar-time>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { tabBarTime } from '@/components/oasiscare'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      date: new Date(),
      a0: {
        // value: '2019-02-27',
        value: new Date(2019, 1, 28),
        timeStart: new Date(2019, 1, 25),
        timeEnd: new Date(2019, 2, 5)
      },
      a1: {
        value: new Date(2019, 1, 27),
        hasAll: true,
        timeStart: new Date(2019, 1, 25),
        timeEnd: new Date(2019, 1, 28)
      },
      a2: {
        // value: '2019-02-27',
        value: new Date(2019, 1, 27),
        hasAll: true,
        timeStart: new Date(2019, 1, 25),
        timeStep: 4
      },
      a3: {
        // value: '2019-02-27',
        value: new Date(2019, 1, 27),
        hasAll: true,
        timeStep: 7,
        timeEnd: new Date(2019, 2, 5)
      },
      a4: {
        // value: '2019-02-27',
        value: new Date(2019, 1, 27),
        hasAll: true,
        timeStart: new Date(2019, 1, 25),
        timeEnd: new Date(2019, 2, 5)
      },
      a5: {
        value: '',
        hasAll: true,
        timeStart: new Date(2019, 1, 25),
        timeEnd: new Date(2019, 2, 5)
      },
      attrs: [
        ['v-model', '[Date, String]', '*', '当前的值。数据类型为String时只能是\'*\'或\'\'。若要不选中可以传空字符串。', '-'],
        ['hasAll', 'Boolean', 'false', '是否有全部按钮', '-'],
        // ['hasDownArrow', 'Boolean', 'false', '是否有方向箭头', '-'],
        ['timeStart', 'Date', '-', '开始时间', '-'],
        ['timeEnd', 'Date', '-', '结束时间。显示时[timeStart, timeEnd)', '-'],
        ['timeSeparate', 'String', '-', '显示时间的分隔符', '-'],
        ['dateFormat', 'String', 'mm-dd', '时间格式', '-'],
        ['timeStep', 'Number', '7', '显示时间的天数。timeStart/timeEnd/timeStep任意两者出现就可以正确运行。若三者都出现优先选择timeStart和timeEnd。', '-'],
        ['eventTypeAll', 'Boolean', 'true', '点击全部按钮时的事件', '-'],
        ['dataAll', 'Boolean', 'true', '点击全部按钮时的事件对应的方法的参数', '-'],
        ['eventTypeItem', 'Boolean', 'true', '点击日期选项时的事件。该事件对应的方法的参数是该按钮的date。', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    tabBarTime,
    explainTable
  },
  methods: {
    mAll (data) {
      console.log(data, 'mAll')
    },
    mItem (data) {
      console.log(data, 'mItem')
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .tabBarTime

    h2
      font-size: .36rem

</style>
