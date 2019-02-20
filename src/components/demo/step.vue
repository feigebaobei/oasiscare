<template>
  <div class="basic">
    <h2>基本样式</h2>
    <step v-model="a0.value" :stepList="a0.stepList" :clickAble="a0.clickAble"></step>
    <step v-model="a2.value" :stepList="a2.stepList" :clickAble="a2.clickAble"></step>
    <h2>自定义图片</h2>
    <step v-model="a1.value" :stepList="a1.stepList" :clickAble="a1.clickAble"></step>
    <h2>无点击事件</h2>
    <step v-model="a1.value" :stepList="a1.stepList"></step>
  </div>
</template>

<script>
import {step} from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
export default {
  props: {},
  data () {
    return {
      a0: {
        value: 'second',
        stepList: [
          {
            title: 'title',
            subTitle: 'subTitle',
            value: 'first',
            useImg: true,
            imgNames: ['', ''],
            imgUrls: ['', '']
          },
          {
            title: 'title1',
            subTitle: 'subTitle1',
            value: 'second',
            useImg: true,
            imgNames: ['', ''],
            imgUrls: ['', '']
          },
          {
            title: 'title2',
            subTitle: 'subTitle2',
            value: 'three',
            useImg: true,
            imgNames: ['', ''],
            imgUrls: ['', '']
          },
          {
            title: 'title3',
            subTitle: 'subTitle3',
            value: 'four',
            useImg: true,
            imgNames: ['', ''],
            imgUrls: ['', '']
          },
          {
            title: 'title4',
            subTitle: 'subTitle4',
            value: 'five',
            useImg: true,
            imgNames: ['', ''],
            imgUrls: ['', '']
          }
        ],
        clickAble: true
      },
      a1: {
        value: 1,
        stepList: [
          {
            title: 'title',
            subTitle: 'subTitle',
            value: 'first',
            useImg: true,
            imgNames: ['', ''],
            imgUrls: ['', '']
          },
          {
            title: 'title1',
            subTitle: 'subTitle1',
            value: 'second',
            useImg: true,
            imgNames: ['', ''],
            imgUrls: [icon.logo.x1, icon.test.x1]
          },
          {
            title: 'title2',
            subTitle: 'subTitle2',
            value: 'three',
            useImg: true,
            imgNames: ['servedGrey', 'servedColor']
            // imgUrls: [icon.logo.x1, icon.test.x1]
          },
          {
            title: 'title3',
            subTitle: 'subTitle3',
            value: 'four',
            useImg: true,
            imgNames: ['submitedGrey', 'submitedColor'],
            imgUrls: ['', '']
          },
          {
            title: 'title4',
            subTitle: 'subTitle4',
            value: 'five',
            useImg: true,
            imgNames: ['', ''],
            imgUrls: ['', '']
          }
        ],
        clickAble: true
      },
      a2: {
        value: 'second',
        stepList: [
          {
            title: '标题',
            subTitle: '副标题',
            value: 'first',
            useImg: true,
            imgNames: ['', ''],
            imgUrls: ['', '']
          },
          {
            title: '标题1',
            subTitle: '副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题',
            value: 'second',
            useImg: true,
            imgNames: ['', ''],
            imgUrls: ['', '']
          },
          {
            title: '标题2',
            subTitle: '副标题',
            value: 'three',
            useImg: true,
            imgNames: ['', ''],
            imgUrls: ['', '']
          },
          {
            title: '标题3',
            subTitle: '副标题',
            value: 'four',
            useImg: true,
            imgNames: ['', ''],
            imgUrls: ['', '']
          },
          {
            title: '标题4',
            subTitle: '副标题',
            value: 'five',
            useImg: true,
            imgNames: ['', ''],
            imgUrls: ['', '']
          }
        ],
        clickAble: true
      }
    }
  },
  computed: {
  },
  components: {
    step
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
