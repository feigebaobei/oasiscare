<template>
  <div class="hint">
    <h2>基本样式</h2>
    <hint :imgUrl="a0.imgUrl" :text="a0.text"></hint>
    <h2>极限情况</h2>
    <hint :imgUrl="a1.imgUrl" :text="a1.text"></hint>
  </div>
</template>

<script>
import { hint } from '@/components/oasiscare'
export default {
  props: {},
  data () {
    return {
      a0: {
        imgUrl: '',
        text: '为了更好的为您服务，请准确填写预约信息'
      },
      a1: {
        imgUrl: '',
        text: '为了更好的为您服务，请准确填写预约信好的为您服务，请准确填写预约信好的为您服务，请准确填写预约信息为了更好的为您服务，请准确填写预约信息为了更好的为您服务，请准确填写预约信息'
      }
    }
  },
  computed: {
  },
  components: {
    hint
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .hint

    h2
      font-size: .36rem

</style>
