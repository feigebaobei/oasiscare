<template>
  <div class="basic">
    <div class="import">
      <h2>引用</h2>
      <code>import {inputRadio} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <input-radio :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isBold="a0.isBold" :options="a0.options" v-model="a0.value"></input-radio>
    <h2>多种label对齐方式</h2>
    <input-radio :keyItem="a0.keyItem" :keyW="a1.keyW" :keyAlign="'left'" :isBold="a0.isBold" :options="a0.options" v-model="a0.value"></input-radio>
    <input-radio :keyItem="a0.keyItem" :keyW="a1.keyW" :keyAlign="'center'" :isBold="a0.isBold" :options="a0.options" v-model="a0.value"></input-radio>
    <input-radio :keyItem="a0.keyItem" :keyW="a1.keyW" :keyAlign="'right'" :isBold="a0.isBold" :options="a0.options" v-model="a0.value"></input-radio>
    <input-radio :keyItem="a0.keyItem" :keyW="a1.keyW" :keyAlign="'space-around'" :isBold="a0.isBold" :options="a0.options" v-model="a0.value"></input-radio>
    <input-radio :keyItem="a0.keyItem" :keyW="a1.keyW" :keyAlign="'space-between'" :isBold="a0.isBold" :options="a0.options" v-model="a0.value"></input-radio>
    <h2>多个选项样式</h2>
    <input-radio :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isBold="a0.isBold" :options="a1.options" v-model="a0.value"></input-radio>
    <input-radio :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isBold="a0.isBold" :options="a2.options" v-model="a0.value"></input-radio>
    <h2>必填符样式</h2>
    <input-radio :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isBold="a0.isBold" :isRequire="a0.isRequire" :options="a0.options" v-model="a0.value"></input-radio>
    <h2>无下边框</h2>
    <input-radio :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isBold="a0.isBold" :isRequire="a0.isRequire" :options="a0.options" v-model="a0.value" :hasBottom="false"></input-radio>
    <input-radio :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isBold="a0.isBold" :isRequire="a0.isRequire" :options="a0.options" v-model="a0.value" :hasBottom="false"></input-radio>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { inputRadio } from '@/components/oasiscare'
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
        isRequire: true,
        options: [
          {
            imgUrls: [
              '',
              ''
            ],
            text: 'first',
            value: 'no1'
          },
          {
            // imgUrls: [
            //   '',
            //   ''
            // ],
            text: 'second',
            value: 'no2'
          }
        ],
        value: null
      },
      a1: {
        keyItem: '身份证号',
        keyW: '2rem',
        keyAlign: 'space-between',
        isBold: true,
        options: [
          {
            imgUrls: [
              icon.logo.x1,
              icon.test.x1
            ],
            text: 'first',
            value: 'no1'
          },
          {
            imgUrls: [
              icon.logo.x1,
              icon.test.x1
            ],
            text: 'second',
            value: 'no2'
          },
          {
            imgUrls: [
              icon.logo.x1,
              icon.test.x1
            ],
            text: 'three',
            value: 'no3'
          }
        ],
        value: null
      },
      a2: {
        keyItem: '身份证号',
        keyW: '2rem',
        keyAlign: 'space-between',
        isBold: true,
        options: [
          {
            imgUrls: [
              icon.logo.x1,
              icon.test.x1
            ],
            text: 'first',
            value: 'no1'
          },
          {
            imgUrls: [
              icon.logo.x1,
              icon.test.x1
            ],
            text: 'second',
            value: 'no2'
          },
          {
            imgUrls: [
              icon.logo.x1,
              icon.test.x1
            ],
            text: 'three',
            value: 'no3'
          },
          {
            imgUrls: [
              icon.logo.x1,
              icon.test.x1
            ],
            text: 'four',
            value: 'no4'
          }
        ],
        value: null
      },
      attrs: [
        ['keyW', 'String', '', 'key的宽度', '-'],
        ['keyAlign', 'String', 'left', '对齐方式。\'left\', \'center\', \'right\', \'space-around\', \'space-between\'', '-'],
        ['keyItem', 'String', '', 'key的文本', '-'],
        ['isBold', 'Boolean', 'false', '是否加粗', '-'],
        ['isRequire', 'Boolean', 'false', '是否有必填符', '-'],
        ['v-model', '-', 'null', 'value', '-'],
        ['options', 'Array', '[]', '由选项对象组成的数组。选项对象的属性有：imgUrls: [\'\', \'\'] 0:非选中，1：选中, text: 选项的文本，value: 选项的值，该值会与v-model对应。例：<code>[{imgUrls: [\'unselect\', \'select\'], text: \'text\', value: \'value\'}]</code>', '-'],
        ['hasBottom', 'Boolean', 'true', '是否有下边框', '-'],
        ['eventType', 'String', '', '当点击选项时触发的事件', '-'],
        ['data', '-', '{}', '当点击选项时触发的事件对应方法的参数', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    inputRadio,
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
