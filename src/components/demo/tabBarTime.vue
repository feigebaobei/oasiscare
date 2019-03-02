<template>
  <div class="tabBarTime">
    <h2>基本样式</h2>
    <tab-bar-time v-model="a0.value" :timeStart="a0.timeStart" :timeEnd="a0.timeEnd"></tab-bar-time>
    <h2>有全部bt</h2>
    <tab-bar-time v-model="a1.value" :hasAll="a1.hasAll" :timeStart="a1.timeStart" :timeEnd="a1.timeEnd"></tab-bar-time>
    <h2>设置timeStart/timeEnd</h2>
    <tab-bar-time v-model="a1.value" :hasAll="a1.hasAll" :timeStart="a1.timeStart" :timeEnd="a1.timeEnd"></tab-bar-time>
    <h2>设置timeStart/timeStep</h2>
    <tab-bar-time v-model="a2.value" :hasAll="a2.hasAll" :timeStart="a2.timeStart" :timeStep="a2.timeStep"></tab-bar-time>
    <h2>设置timeEnd/timeStep</h2>
    <tab-bar-time v-model="a3.value" :hasAll="a3.hasAll" :timeStep="a3.timeStep" :timeEnd="a3.timeEnd"></tab-bar-time>
    <h2>无value时，其实这时是不可用的。</h2>
    <tab-bar-time :hasAll="a1.hasAll" :timeStart="a1.timeStart" :timeEnd="a1.timeEnd"></tab-bar-time>
    <h2>绑定事件</h2>
    <tab-bar-time v-model="a2.value" :hasAll="a2.hasAll" :timeStart="a2.timeStart" :timeEnd="a2.timeEnd" :eventTypeAll="'mAll'" :dataAll="{k: 'vAll'}" @mAll="mAll" :eventTypeItem="'mItem'" :dataItem="{k: 'vItem'}" @mItem="mItem"></tab-bar-time>
  </div>
</template>

<script>
import { tabBarTime } from '@/components/oasiscare'
export default {
  props: {},
  data () {
    return {
      a0: {
        // value: '2019-02-27',
        value: new Date(2019, 1, 28),
        timeStart: new Date(2019, 1, 25),
        timeEnd: new Date(2019, 2, 5)
      },
      a1: {
        // value: '2019-02-27',
        value: new Date(2019, 1, 27),
        hasAll: true,
        timeStart: new Date(2019, 1, 25),
        timeEnd: new Date(2019, 2, 5)
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
      }
    }
  },
  computed: {
  },
  components: {
    tabBarTime
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

  .tabBarTime

    h2
      font-size: .36rem

</style>
