<template>
  <div class="addressPhone">
    <h2>address phone</h2>
    <address-phone :addressText="a0"></address-phone>
    <address-phone :addressText="a1"></address-phone>
  </div>
</template>

<script>
import {addressPhone} from '@/components/oasiscare'
export default {
  props: {},
  data () {
    return {
      a0: '北京市朝阳区朝阳公园北路朝阳大街39 号4栋211',
      a1: '北京市朝阳区朝阳公园北路朝阳大街39 号4栋211北京市朝阳区朝阳公园北路朝阳大街39 号4栋211北京市朝阳区朝阳公园北路朝阳大街39 号4栋211北京市朝阳区朝阳公园北路朝阳大街39 号4栋211'
    }
  },
  computed: {
  },
  components: {
    addressPhone
  },
  methods: {
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .addressPhone
    // color: red

    h2
      font-size: .36rem

</style>
