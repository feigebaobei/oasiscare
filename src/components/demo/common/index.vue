<template>
  <div class="common">
    <h2>imgText</h2>
    <img-text :imgUrl="a0.imgUrl" :text="a0.text"></img-text>
    <img-text :imgUrl="a1.imgUrl" :text="a1.text"></img-text>
  </div>
</template>

<script>
import { imgText } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
export default {
  props: {},
  data () {
    return {
      a0: {
        imgUrl: icon.logo.x1,
        text: 'text'
      },
      a1: {
        imgUrl: icon.test.x1,
        text: '文本'
      }
    }
  },
  computed: {
  },
  components: {
    imgText
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .common

    h2
      font-size: .36rem

</style>
