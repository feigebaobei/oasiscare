<template>
  <div class="addressCard">
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
  </div>
</template>

<script>
import {addressCard} from '@/components/oasiscare'
export default {
  props: {},
  data () {
    return {
      a0: {
        address: '北京市 朝阳区 北辰汇宾大厦19层a座 北辰汇宾大厦19层a座 北辰汇宾大厦19层a座北辰汇宾大厦19层a座北辰汇宾大厦19层a座北辰汇宾大厦19层a座',
        name: 'name',
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
      }
    }
  },
  computed: {
  },
  components: {
    addressCard
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

  .addressCard

    h2
      font-size: .36rem

</style>
