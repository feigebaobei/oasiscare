<template>
  <div class="titleArea">
    titleArea
    <h2>大标题</h2>
    <title-area :title="big.title" :subTitle="big.subTitle" :hasMore="false" :eventTypeMore="'s'" @s="ss"></title-area>
    <h2>小标题</h2>
    <title-area :title="small.title" :subTitle="small.subTitle" :moreText="small.moreText" :eventTypeMore="'s'" @s="ss"></title-area>
    <h2>极限标题</h2>
    <title-area :title="extremity.title" :subTitle="extremity.subTitle" :moreText="extremity.moreText" :eventTypeMore="'s'" @s="ss"></title-area>
    <h2>58标题</h2>
    <first></first>
    <five-eight></five-eight>
    <!-- <five-eight :title="five.title" :subTitle="five.subTitle" :moreText="five.moreText" :eventTypeMore="'s'" @s="ss"></five-eight> -->
  </div>
</template>

<script>
import {titleArea, first, fiveEight} from '@/components/oasiscare'
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
        moreText: 'more'
      },
      extremity: {
        title: 'extremity极限标题标题',
        subTitle: 'extremity极限标题标题副标题extremity极限标题标题副标题extremity极限标题标题副标题extremity极限标题标题副标题',
        moreText: 'more'
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
    titleArea,
    first,
    fiveEight
  },
  methods: {
    ss () {
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

  .titleArea
    // color: red

    h2
      font-size: .36rem

</style>
