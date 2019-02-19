<template>
  <div class="directionItem">
    <h2>基本样式</h2>
    <direction-item :keyItem="a0.keyItem"></direction-item>
    <direction-item :keyW="a0.keyW" :keyItem="a0.keyItem" :keyAlign="'right'" :isBold="a0.isBold"></direction-item>
    <direction-item :keyW="a0.keyW" :keyItem="a0.keyItem" :keyAlign="a0.keyAlign"></direction-item>
    <h2>无方向icon</h2>
    <direction-item :keyItem="a0.keyItem" :hasDirectionImg="a0.hasDirectionImg"></direction-item>
    <direction-item :keyItem="a0.keyItem" :hasDirectionImg="a0.hasDirectionImg">
      <p class="insertp">hello world</p>
    </direction-item>
    <h2>插入内容</h2>
    <direction-item :keyItem="a0.keyItem">
      <p>hello world</p>
    </direction-item>
    <direction-item :keyItem="a0.keyItem">
      <p class="insertp">hello world</p>
    </direction-item>
  </div>
</template>

<script>
import { directionItem } from '@/components/oasiscare'
export default {
  props: {},
  data () {
    return {
      a0: {
        keyW: '1.5rem',
        keyItem: '问题反馈',
        keyAlign: 'space-between',
        isBold: true,
        hasDirectionImg: false
      }
    }
  },
  computed: {
  },
  components: {
    directionItem
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .directionItem

    h2
      font-size: .36rem

    .insertp
      color: #4a4a4a
      font-size: .28rem
      line-height: .4rem
      margin: 0
      text-align: right

</style>
