<template>
  <div class="basic">
    <h2>基本样式</h2>
    <basicvue></basicvue>
  </div>
</template>

<script>
import { basicvue } from '@/components/oasiscare'
export default {
  props: {},
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
    basicvue
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .basic

    h2
      font-size: .36rem

</style>
