<template>
  <div class="addressCard">
    <div class="import">
      <h2>引用</h2>
      <code>import {addressCard} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <address-card :address="a0.address" :name="a0.name" :phone="a0.phone"></address-card>
    <h2>基本样式(无默认)</h2>
    <address-card :address="a0.address" :name="a0.name" :phone="a0.phone" :hasDefaultBt="a0.hasDefaultBt"></address-card>
    <h2>基本样式(无编辑)</h2>
    <address-card :address="a0.address" :name="a0.name" :phone="a0.phone" :hasEditBt="a0.hasEditBt"></address-card>
    <h2>基本样式(无删除)</h2>
    <address-card :address="a0.address" :name="a0.name" :phone="a0.phone" :hasDelBt="a0.hasDelBt"></address-card>
    <h2>给4个位置（整个卡片，默认地址，编辑，删除）绑定事件</h2>
    <address-card :address="a1.address" :name="a1.name" :phone="a1.phone" :eventType="'m0'" @m0="m0" :eventTypeData="{msg: a1.eventTypeData}" :eventTypeDefault="'m1'" @m1="m1" :eventTypeDefaultData="{msg: a1.eventTypeDefaultData}" :eventTypeEdit="'m2'" @m2="m2" :eventTypeEditData="{msg: a1.eventTypeEditData}" :eventTypeDel="'m3'" @m3="m3" :eventTypeDelData="{msg: a1.eventTypeDelData}"></address-card>
    <h2>disable为true时事件不可用</h2>
    <address-card :address="a1.address" :name="a1.name" :phone="a1.phone" :disable="a1.disable" :eventType="'m0'" @m0="m0" :eventTypeData="a1.eventTypeData"></address-card>
    <h2>disable在优先级大于defaultBtSel</h2>
    <address-card :address="a2.address" :name="a2.name" :phone="a2.phone" :disable="a2.disable" :defaultBtSel="a2.defaultBtSel"></address-card>
    <h2>选中状态</h2>
    <address-card :address="a2.address" :name="a2.name" :phone="a2.phone" :defaultBtSel="a2.defaultBtSel"></address-card>
    <h2>disable为true时选中状态不可用</h2>
    <address-card :address="a2.address" :name="a2.name" :phone="a2.phone" :disable="a2.disable" :defaultBtSel="a2.defaultBtSel"></address-card>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import {addressCard} from '@/components/oasiscare'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: {
        address: '北京市 朝阳区 北辰汇宾大厦19层a座 北辰汇宾大厦19层a座 北辰汇宾大厦19层a座北辰汇宾大厦19层a座北辰汇宾大厦19层a座北辰汇宾大厦19层a座',
        name: '姓名',
        phone: '18545545521',
        hasDefaultBt: false,
        hasEditBt: false,
        hasDelBt: false
      },
      a1: {
        address: '北京市 朝阳区 北辰汇宾大厦19层a座 北辰汇宾大厦19层a座 北辰汇宾大厦19层a座北辰汇宾大厦19层a座北辰汇宾大厦19层a座北辰汇宾大厦19层a座',
        name: 'name',
        phone: '18545545521',
        disable: true,
        eventTypeData: 'a1.eventTypeData',
        eventTypeDefaultData: 'a1.eventTypeDefaultData',
        eventTypeEditData: 'a1.eventTypeEditData',
        eventTypeDelData: 'a1.eventTypeDelData'
      },
      a2: {
        address: '北京市 朝阳区 北辰汇宾大厦19层a座 北辰汇宾大厦19层a座 北辰汇宾大厦19层a座北辰汇宾大厦19层a座北辰汇宾大厦19层a座北辰汇宾大厦19层a座',
        name: 'name',
        phone: '18545545521',
        disable: true,
        defaultBtSel: true
      },
      attrs: [
        ['disable', 'Boolean', 'false', '是否可用。在该组件中优先级最高。', '-'],
        ['address', 'String', '', '地址的文本', '-'],
        ['name', 'String', '', '姓名的文本', '-'],
        ['phone', '[String, Number]', '', '电话的文本', '-'],
        ['hasDefaultBt', 'Boolean', 'true', '是否有默认按钮', '-'],
        ['defaultBtSel', 'Boolean', 'false', '是否选中默认按钮', '-'],
        ['defaultBtIcons', 'Array', '[\'\', \'\']', '默认按钮的2个状态的图片。必须传入2个值,0:不选中 1：选中', '-'],
        ['addressBtText', 'String', '默认地址', '默认按钮的文本', '-'],
        ['hasEditBt', 'Boolean', 'true', '是否有编辑按钮', '-'],
        ['editBtIcon', 'String', '', '自定义编辑按钮的icon', '-'],
        ['editBtText', 'String', '编辑', '编辑按钮的文本', '-'],
        ['hasDelBt', 'Boolean', 'true', '是否有删除按钮', '-'],
        ['delBtIcon', 'String', '', '自定义删除按钮的icon', '-'],
        ['delBtText', 'String', '删除', '删除按钮的文本', '-'],
        ['eventType', 'String', '', '点击该组件时触发的事件，如果需要给事件对应的方法传入参数需要配合<code>eventTypeData</code>属性。', '-'],
        ['eventTypeData', '-', '{}', '点击该组件时触发的事件对应的方法的参数', '-'],
        ['eventTypeDefault', 'String', '', '点击该组件的默认按钮时触发的事件，如果需要给事件对应的方法传入参数需要配合<code>eventTypeDefaultData</code>属性。', '-'],
        ['eventTypeDefaultData', '-', '{}', '点击该组件的默认按钮时触发的事件对应的方法的参数', '-'],
        ['eventTypeEdit', 'String', '', '点击该组件的编辑按钮时触发的事件，如果需要给事件对应的方法传入参数需要配合<code>eventTypeEdit</code>属性。', '-'],
        ['eventTypeEditData', '-', '{}', '点击该组件的编辑按钮时触发的事件对应的方法的参数', '-'],
        ['eventTypeDel', 'String', '', '点击该组件的删除按钮时触发的事件，如果需要给事件对应的方法传入参数需要配合<code>eventTypeDel</code>属性。', '-'],
        ['eventTypeDelData', '-', '{}', '点击该组件的删除按钮时触发的事件对应的方法的参数', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    addressCard,
    explainTable
  },
  methods: {
    m0 (data) {
      alert(data.msg)
    },
    m1 (data) {
      alert(data.msg)
    },
    m2 (data) {
      alert(data.msg)
    },
    m3 (data) {
      alert(data.msg)
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .addressCard

    h2
      font-size: .36rem

</style>
