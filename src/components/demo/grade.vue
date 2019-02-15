<template>
  <div class="grade">
    <h2>基本样式</h2>
    <grade :value="a0.value"></grade>
    <h2>小数</h2>
    <grade :value="a1.value"></grade>
    <h2>负数</h2>
    <grade :value="a2.value"></grade>
    <p style="font-size: .2rem; margin: 0">sss</p>
    <span style="font-size: .2rem">行内元素</span>
    <h2>大于5</h2>
    <grade :value="a3.value"></grade>
    <h2>和其它块级元素一起使用</h2>
    <div class="box">
      <grade :value="a2.value"></grade>
      <p>first</p>
      <p>second</p>
    </div>
    <h2>此组件只能做为块级元素使用。原因与authentication组件一样。</h2>
    <h2>value的显示范围在0-5。</h2>
  </div>
</template>

<script>
import { grade } from '@/components/oasiscare'
export default {
  props: {},
  data () {
    return {
      a0: {
        value: 2
      },
      a1: {
        value: 2.8
      },
      a2: {
        value: -2
      },
      a3: {
        value: 8
      }
    }
  },
  computed: {
  },
  components: {
    grade
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .grade

    h2
      font-size: .36rem

    .box
      display: flex
      flex-wrap: wrap
      justify-content: space-between

      p
        margin: 0

</style>
