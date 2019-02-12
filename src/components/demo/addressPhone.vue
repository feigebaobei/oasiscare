<template>
  <div class="addressPhone">
    <h2>address phone</h2>
    <address-phone></address-phone>
  </div>
</template>

<script>
import {addressPhone} from '@/components/oasiscare'
export default {
  props: {},
  data () {
    return {
      big: {
        title: '标题标题',
        subTitle: '副标题',
        moreText: 'more'
      },
      small: {
        title: '标题标题',
        subTitle: '副标题',
        moreText: ''
      },
      extremity: {
        title: 'extremity极限标题标题',
        subTitle: 'extremity极限标题标题副标题extremity极限标题标题副标题extremity极限标题标题副标题extremity极限标题标题副标题',
        moreText: 'more more more'
      },
      five: {
        title: '58专用标题',
        subTitle: '58专用副标题',
        moreText: 'more'
      }
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
