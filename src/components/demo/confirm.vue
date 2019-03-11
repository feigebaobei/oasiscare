<template>
  <div class="confirm">
    <div class="import">
      <h2>引用</h2>
      <code>import {confirm} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <button @click="sShow(a0)">show0</button>
    <confirm v-model="a0.show" :title="a0.title" :cont="a0.cont"></confirm>
    <h2>只有标题样式</h2>
    <button @click="sShow(a1)">show1</button>
    <confirm v-model="a1.show" :title="a1.title" :cont="a1.cont"></confirm>
    <h2>只有内容样式</h2>
    <button @click="sShow(a2)">show2</button>
    <confirm v-model="a2.show" :title="a2.title" :cont="a2.cont"></confirm>
    <h2>只有确定按钮</h2>
    <button @click="sShow(a3)">show2</button>
    <confirm v-model="a3.show" :title="a3.title" :cont="a3.cont" :hasCancelBt="a3.hasCancelBt"></confirm>
    <h2>只有取消按钮</h2>
    <button @click="sShow(a4)">show2</button>
    <confirm v-model="a4.show" :title="a4.title" :cont="a4.cont" :hasOkBt="a4.hasOkBt"></confirm>
    <h2>内容插槽</h2>
    <button @click="sShow(a5)">show2</button>
    <confirm v-model="a5.show" :title="a5.title" :cont="a5.cont" :cancelText="a5.cancelText" :okText="a5.okText" :data="'data'" :eventTypeCancel="'cancel'" @cancel="cancel" :eventTypeOk="'ok'" @ok="ok">
      <h2>内容插槽</h2>
    </confirm>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { confirm } from '@/components/oasiscare'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: {
        show: false,
        title: '标题文字标题',
        cont: '描述部分描述部分描述部分描述部分描述部分描述部分描述部分'
      },
      a1: {
        show: false,
        title: '标题文字标题',
        cont: ''
      },
      a2: {
        show: false,
        title: '',
        cont: '描述部分描述部分描述部分描述部分描述部分描述部分描述部分'
      },
      a3: {
        show: false,
        title: '',
        cont: '描述部分描述部分描述部分描述部分描述部分描述部分描述部分',
        hasCancelBt: false
      },
      a4: {
        show: false,
        title: '',
        cont: '描述部分描述部分描述部分描述部分描述部分描述部分描述部分',
        hasOkBt: false
      },
      a5: {
        show: false,
        title: '',
        cont: '描述部分描述部分描述部分描述部分描述部分描述部分描述部分',
        cancelText: '取消',
        okText: '确定'
      },
      attrs: [
        ['v-model', 'Boolean', 'false', '是否显示', '-'],
        ['title', 'String', '', '标题', '-'],
        ['cont', 'String', '', '内容', '-'],
        ['cancelText', 'String', 'cancel', '取消按钮的文本', '-'],
        ['okText', 'String', 'ok', '确定按钮的文本', '-'],
        ['hasCancelBt', 'Boolean', 'true', '是否出现取消按钮', '-'],
        ['hasOkBt', 'Boolean', 'true', '是否出现确定按钮', '-'],
        ['eventTypeCancel', 'String', '', '点击取消按钮时触发的事件', '-'],
        ['eventTypeOk', 'String', '', '点击确定按钮时触发的事件', '-'],
        ['eventTypeOpen', 'String', '', '打开组件时触发的事件', '-'],
        ['eventTypeClose', 'String', '', '关闭组件时触发的事件', '-'],
        ['data', '-', '{}', '以上4个事件对应的方法的参数', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    confirm,
    explainTable
  },
  methods: {
    sShow (data) {
      data.show = !data.show
    },
    ok (data) {
      alert(data)
    },
    cancel (data) {
      alert(data)
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .confirm

    h2
      font-size: .36rem

</style>
