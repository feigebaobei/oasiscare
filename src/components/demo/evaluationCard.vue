<template>
  <div class="evaluationCard">
    <div class="import">
      <h2>引用</h2>
      <code>import {evaluationCard} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <evaluation-card :name="a0.name" :gradeValue="a0.gradeValue" :time="a0.time" :text="a0.text" :line="a0.line" :showExpandBtn="a0.showExpandBtn"></evaluation-card>
    <h2>极限样式</h2>
    <evaluation-card :name="a1.name" :gradeValue="a1.gradeValue" :time="a1.time" :text="a1.text" :line="a1.line" :showExpandBtn="a1.showExpandBtn" :data="'data'" :eventType="'m0'" @m0="m0"></evaluation-card>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { evaluationCard } from '@/components/oasiscare'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: {
        name: '姓名',
        gradeValue: 2,
        time: '2018-10-27',
        text: '医生态度超好，耐心讲解，方便快捷，医生态度超好，耐心讲解，方便快捷，医生态度超好，耐心讲医生态度超好，耐心讲解，方便快捷，医生态度超好，耐心讲解，方便快捷，医生态度超好，耐心讲',
        line: 2,
        autoCollapse: false,
        endChars: '###',
        showExpandBtn: false,
        expandBtnText: 'expand',
        showCollapseBtn: false,
        collapseBtnText: 'more'
      },
      a1: {
        name: '姓名姓名姓名姓名姓名',
        gradeValue: 3,
        time: '2018-10-27',
        text: '医生态度超好，耐心讲解，方便快捷，医生态度超好，耐心讲解，方便快捷，医生态度超好，耐心讲医生态度超好，耐心讲解，方便快捷，医生态度超好，耐心讲解，方便快捷，医生态度超好，耐心讲',
        line: 2,
        autoCollapse: false,
        endChars: '###',
        showExpandBtn: true,
        expandBtnText: 'expand',
        showCollapseBtn: false,
        collapseBtnText: 'more'
      },
      attrs: [
        ['name', 'String', '', '姓名', '-'],
        ['gradeValue', 'String', '', '级别', '-'],
        ['time', 'String', '', '时间', '-'],
        ['text', 'String', '', '内容', '-'],
        ['line', 'String', '', '展示的行数', '-'],
        ['autoCollapse', 'Boolean', 'true', '是否默认收起', '-'],
        ['endChars', 'String', '…', '结尾符号', '-'],
        ['showExpandBtn', 'Boolean', 'true', '是否显示展开按钮', '-'],
        ['expandBtnText', 'String', '展开', '展开按钮的文本', '-'],
        ['showCollapseBtn', 'Boolean', 'true', '是否显示', '-'],
        ['collapseBtnText', 'String', 'area56', '是否显示收起按钮', '-'],
        ['eventType', 'String', '', '当点击组件的非评论内容时触发的事件', '-'],
        ['data', '-', '{}', '当点击组件的非评论内容时触发的事件对应方法的参数', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    evaluationCard,
    explainTable
  },
  methods: {
    m0 (data) {
      alert(data)
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .evaluationCard

    h2
      font-size: .36rem

</style>
