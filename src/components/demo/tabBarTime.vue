<template>
  <div class="tabBarTime">
    <h2>基本样式</h2>
    <tab-bar-time v-model="a0.value" :timeStart="a0.timeStart" :timeEnd="a0.timeEnd"></tab-bar-time>
    <h2>有全部bt</h2>
    <tab-bar-time v-model="a1.value" :hasAll="a1.hasAll" :timeStart="a1.timeStart" :timeEnd="a1.timeEnd"></tab-bar-time>
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
        timeStart: '02-25',
        timeEnd: '03-06'
      },
      a1: {
        // value: '2019-02-27',
        value: new Date(2019, 1, 28),
        hasAll: true,
        timeStart: '02-25',
        timeEnd: '03-06'
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
