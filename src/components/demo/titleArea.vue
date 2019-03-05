<template>
  <div class="titleArea">
    <div class="import">
      <h2>引用</h2>
      <code>import {titleArea, fiveEight} from '@/components/oasiscare'</code>
    </div>
    <h2>大标题</h2>
    <title-area :title="big.title" :subTitle="big.subTitle" :moreText="big.moreText" :eventTypeMore="'s'" @s="ss"></title-area>
    <title-area :title="big.title" :subTitle="big.subTitle" :eventTypeMore="'s'" @s="ss"></title-area>
    <h2>小标题</h2>
    <title-area :title="small.title" :subTitle="small.subTitle" :hasMore="false" :eventTypeMore="'s'" @s="ss"></title-area>
    <h2>58标题</h2>
    <five-eight :title="five.title" :subTitle="five.subTitle" :moreText="five.moreText" :eventTypeMore="'s'" @s="ss"></five-eight>
    <five-eight :title="five.title" :subTitle="five.subTitle" :moreText="'不可展开'"></five-eight>
    <h2>极限标题</h2>
    <title-area :title="extremity.title" :subTitle="extremity.subTitle" :moreText="extremity.moreText" :eventTypeMore="'s'" @s="ss"></title-area>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import {titleArea, fiveEight} from '@/components/oasiscare'
import explainTable from '../../components/explainTabel.vue'
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
      },
      attrs: [
        ['hasImg', 'Boolean', 'true', '是否有图片', '-'],
        ['imgUrl', 'String', '', '自定义输入的图片', '-'],
        ['title', 'String', '', '主标题', '-'],
        ['subTitle', 'String', '', '副标题', '-'],
        ['moreText', 'String', '查看全部', '更多按钮的文本', '-'],
        ['hasMore', 'Boolean', 'true', '是否有更多按钮', '-'],
        ['hasDirectionIcon', 'Boolean', 'true', '是否有方向icon', '-'],
        ['directionImgUrl', 'String', 'true', '自定义的方向图片', '-'],
        ['directionImgStatus', 'Boolean', 'true', '是否是展开状态', '-'],
        // ['directionImgSwitchDirection', 'Boolean', 'true', '是否有图片', '-'],
        ['directionImgDirection', '[String, Number]', '0', '方向图片初始时的旋转角度值。不需要传入单位。单位是deg', '-'],
        ['directionImgRotation', '[String, Number]', '90', '方向图片切换方向时旋转的角度值。不需要传入单位。单位是deg', '-'],
        ['eventType', 'String', '', '点击该组件时触发的事件，如果需要给事件对应的方法传入参数需要配合<code>data</code>属性。', '-'],
        ['data', '-', '{}', '点击该组件时触发的事件对应的方法的参数', '-'],
        ['eventTypeMore', 'String', '', '点击该组件的更多按钮时触发的事件，如果需要给事件对应的方法传入参数需要配合<code>dataMore</code>属性。', '-'],
        ['dataMore', '-', '{}', '点击该组件的更多按钮时触发的事件对应的方法的参数', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    titleArea,
    fiveEight,
    explainTable
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
@import '../../assets/style/basic.styl'

  .titleArea
    // color: red
    font-size: .36rem

    h2
      font-size: .36rem

</style>
