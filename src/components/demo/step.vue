<template>
  <div class="basic">
    <div class="import">
      <h2>引用</h2>
      <code>import {softCorner} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <step v-model="a0.value" :stepList="a0.stepList" :clickAble="a0.clickAble"></step>
    <step v-model="a2.value" :stepList="a2.stepList" :clickAble="a2.clickAble"></step>
    <h2>自定义图片</h2>
    <step v-model="a1.value" :stepList="a1.stepList" :clickAble="a1.clickAble"></step>
    <h2>无点击事件</h2>
    <step v-model="a1.value" :stepList="a1.stepList"></step>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import {step} from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
import explainTable from '../../components/explainTabel.vue'
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
      },
      attrs: [
        // ['type', 'String', 'vertical', '横向/纵向排布', '-'],
        ['stepList', 'Array', '[]', '由步骤的对象组成的数组。例：<code>[{title: \'\', subTitle: \'\', value: \'\', useImg: \'\', imgNames: \'\', imgUrls: \'\', }]</code>。title: 标题， title: 副标题， value: 值，useImg: 是否使用图片。该属性的优先级高于imgNames/imgUrls。不是使用图片就是使用数字。imgNames: [\'\', \'\']。图片的名字0：不选中，1：选中。imgUrls: [\'\', \'\']。0：不选中，1：选中。图片的url', '-'],
        ['v-model', '[String, Number]', '-', '当前活动元素的序号', '-'],
        // ['onlyShow', 'String', 'none', '边框', '-'],
        // ['stepBasis', 'String', '100px', '圆角值。为是显示为全部圆角，所以默认设置为一个较大值。', '-'],
        // ['curStep', 'String', '', '内边距', '-'],
        ['clickAble', 'Boolean', 'false', '是否可以响应点击事件', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    step,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .basic

    h2
      font-size: .36rem

</style>
