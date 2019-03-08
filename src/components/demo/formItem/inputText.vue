<template>
  <div class="basic">
    <div class="import">
      <h2>引用</h2>
      <code>import {inputText} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="a0.placeHolderAlign" v-model="a0.value" :valueAlign="a0.valueAlign"></input-text>
    <h2>多种label对齐方式</h2>
    <input-text :keyItem="a1.keyItem" :keyW="a1.keyW" :keyAlign="'left'" :placeHolder="a1.placeHolder" :placeHolderAlign="a1.placeHolderAlign" v-model="a1.value" :valueAlign="a1.valueAlign"></input-text>
    <input-text :keyItem="a1.keyItem" :keyW="a1.keyW" :keyAlign="'center'" :placeHolder="a1.placeHolder" :placeHolderAlign="a1.placeHolderAlign" v-model="a1.value" :valueAlign="a1.valueAlign"></input-text>
    <input-text :keyItem="a1.keyItem" :keyW="a1.keyW" :keyAlign="'right'" :placeHolder="a1.placeHolder" :placeHolderAlign="a1.placeHolderAlign" v-model="a1.value" :valueAlign="a1.valueAlign"></input-text>
    <input-text :keyItem="a1.keyItem" :keyW="a1.keyW" :keyAlign="'space-around'" :placeHolder="a1.placeHolder" :placeHolderAlign="a1.placeHolderAlign" v-model="a1.value" :valueAlign="a1.valueAlign"></input-text>
    <input-text :keyItem="a1.keyItem" :keyW="a1.keyW" :keyAlign="'space-between'" :placeHolder="a1.placeHolder" :placeHolderAlign="a1.placeHolderAlign" v-model="a1.value" :valueAlign="a1.valueAlign"></input-text>
    <h2>多种文本样式</h2>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :hasBottom="a0.hasBottom" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="'left'" v-model="a0.value" :valueAlign="a0.valueAlign"></input-text>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :hasBottom="a0.hasBottom" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="'center'" v-model="a0.value" :valueAlign="a0.valueAlign"></input-text>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :hasBottom="a0.hasBottom" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="'right'" v-model="a0.value" :valueAlign="a0.valueAlign"></input-text>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :hasBottom="a0.hasBottom" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="'left'" v-model="a0.value" :valueAlign="'left'"></input-text>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :hasBottom="a0.hasBottom" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="'left'" v-model="a0.value" :valueAlign="'center'"></input-text>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :hasBottom="a0.hasBottom" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="'left'" v-model="a0.value" :valueAlign="'right'"></input-text>
    <h2>必填符样式</h2>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isRequire="true" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="'left'" v-model="a0.value" :valueAlign="'right'"></input-text>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { inputText } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
import explainTable from '../../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: {
        keyItem: '身份证号',
        keyW: '2rem',
        keyAlign: 'space-between',
        isBold: true,
        delImgUrl: icon.logo.x1,
        dirtImgUrl: icon.test.x1,
        placeHolder: 'placeHolder',
        placeHolderAlign: 'left',
        value: '',
        valueAlign: 'right',
        hasBottom: false
      },
      a1: {
        keyItem: '身份证号',
        keyW: '2rem',
        keyAlign: 'space-between',
        isBold: true,
        delImgUrl: icon.logo.x1,
        dirtImgUrl: icon.test.x1,
        placeHolder: 'placeHolder',
        placeHolderAlign: 'left',
        value: 'value',
        valueAlign: 'right'
      },
      a2: {
        keyItem: '身份证号',
        keyW: '2rem',
        keyAlign: 'space-between',
        isBold: true,
        delImgUrl: icon.logo.x1,
        dirtImgUrl: icon.test.x1,
        placeHolder: 'placeHolder',
        placeHolderAlign: 'left',
        value: 'value',
        valueAlign: 'right'
      },
      a3: {
        keyItem: '身份证号',
        keyW: '2rem',
        keyAlign: 'space-between',
        isBold: true,
        delImgUrl: icon.logo.x1,
        dirtImgUrl: icon.test.x1,
        placeHolder: 'placeHolder',
        placeHolderAlign: 'left',
        value: 'value',
        valueAlign: 'right'
      },
      attrs: [
        ['keyW', 'Boolean', '', 'key的宽度', '-'],
        ['keyAlign', 'Boolean', 'left', '对齐方式：\'left\', \'center\', \'right\', \'space-around\', \'space-between\'', '-'],
        ['keyItem', 'String', '', 'key的文本', '-'],
        ['isBold', 'Boolean', 'false', '是否有下边框', '-'],
        ['isRequire', 'Boolean', 'false', '是否出现必选符', '-'],
        ['placeHolder', 'String', '', 'placeholder的文本', '-'],
        ['placeHolderAlign', 'Boolean', 'true', 'placeholder的对齐方式。\'left\' \'right\' \'center\'', '-'],
        ['v-model', '[String, Number]', '', 'value', '-'],
        ['valueAlign', 'Boolean', 'true', 'value的对齐方式。\'left\' \'right\' \'center\'', '-'],
        ['imgUrlDel', 'String', '', '自定义删除图片', '-'],
        ['imgUrlDirt', 'String', '', '自定义方向图片', '-'],
        ['hasDelIcon', 'Boolean', 'true', '是否有删除图片', '-'],
        ['hasDirtIcon', 'Boolean', 'false', '是否有方向图片', '-'],
        ['hasBottom', 'Boolean', 'true', '是否有下边框', '-'],
        // ['eventType', 'Boolean', 'true', '点击这个组件时触发的事件', '-'],
        // ['data', 'Boolean', 'true', '点击这个组件时触发的事件对应的方法的参数', '-'],
        ['eventTypeDel', 'String', '', '点击删除按钮时触发的事件。日后可能会添加这个配置项。', '-'],
        ['dataDel', '-', '{}', '点击删除按钮时触发的事件对应的方法的参数。日后可能会添加这个配置项。', '-'],
        ['eventTypeDirt', 'String', '', '点击方向按钮时触发的事件', '-'],
        ['dataDirt', '-', '{}', '点击方向按钮时触发的事件对应的方法的参数', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    inputText,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/style/basic.styl'

  .basic

    h2
      font-size: .36rem

</style>
