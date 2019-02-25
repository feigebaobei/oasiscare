<template>
  <div class="tabBarTime">
    <h2>基本样式</h2>
    <tab-bar-time v-model="a0.value" :hasAll="a0.hasAll" :dataItems="a0.dataItems"></tab-bar-time>
    <tab-bar-time v-model="a1.value" :hasAll="a1.hasAll" :dataItems="a1.dataItems"></tab-bar-time>
    <h2>使用时间</h2>
    <tab-bar-time v-model="a2.value" :timeStart="a2.timeStart" :timeEnd="a2.timeEnd" :eventTypeAll="'mAll'" @mAll="mAll" :eventTypeItem="'mItem'" @mItem="mItem"></tab-bar-time>
    <tab-bar-time v-model="a2.value" :hasAll="true" :timeStart="a2.timeStart" :timeEnd="a2.timeEnd" :eventTypeAll="'mAll'" @mAll="mAll" :eventTypeItem="'mItem'" @mItem="mItem"></tab-bar-time>
  </div>
</template>

<script>
import { tabBarTime } from '@/components/oasiscare'
export default {
  props: {},
  data () {
    return {
      a0: {
        value: 'second',
        hasAll: true,
        hasDownArrow: false,
        dataItems: [
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'first'
          },
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'second'
          },
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'three'
          },
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'four'
          },
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'second'
          },
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'three'
          }
        ]
      },
      a1: {
        value: 'three',
        hasAll: false,
        hasDownArrow: true,
        dataItems: [
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'first'
          },
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'first'
          },
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'first'
          },
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'first'
          },
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'first'
          },
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'second'
          },
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'three'
          },
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'four'
          },
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'second'
          },
          {
            weekText: 'weekText',
            dayText: 'dayText',
            value: 'three'
          }
        ]
      },
      a2: {
        value: '02-27',
        // timeStart: new Date(),
        timeStart: '2019-02-25',
        timeEnd: '2019-03-05'
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
