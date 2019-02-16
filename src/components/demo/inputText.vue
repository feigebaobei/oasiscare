<template>
  <div class="basic">
    <h2>基本样式</h2>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="a0.placeHolderAlign" v-model="a0.value" :valueAlign="a0.valueAlign"></input-text>
    <h2>多种label对齐方式</h2>
    <input-text :keyItem="a1.keyItem" :keyW="a1.keyW" :keyAlign="'left'" :placeHolder="a1.placeHolder" :placeHolderAlign="a1.placeHolderAlign" v-model="a1.value" :valueAlign="a1.valueAlign"></input-text>
    <input-text :keyItem="a1.keyItem" :keyW="a1.keyW" :keyAlign="'center'" :placeHolder="a1.placeHolder" :placeHolderAlign="a1.placeHolderAlign" v-model="a1.value" :valueAlign="a1.valueAlign"></input-text>
    <input-text :keyItem="a1.keyItem" :keyW="a1.keyW" :keyAlign="'right'" :placeHolder="a1.placeHolder" :placeHolderAlign="a1.placeHolderAlign" v-model="a1.value" :valueAlign="a1.valueAlign"></input-text>
    <input-text :keyItem="a1.keyItem" :keyW="a1.keyW" :keyAlign="'space-around'" :placeHolder="a1.placeHolder" :placeHolderAlign="a1.placeHolderAlign" v-model="a1.value" :valueAlign="a1.valueAlign"></input-text>
    <input-text :keyItem="a1.keyItem" :keyW="a1.keyW" :keyAlign="'space-between'" :placeHolder="a1.placeHolder" :placeHolderAlign="a1.placeHolderAlign" v-model="a1.value" :valueAlign="a1.valueAlign"></input-text>
    <h2>多种文本样式</h2>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="'left'" v-model="a0.value" :valueAlign="a0.valueAlign"></input-text>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="'center'" v-model="a0.value" :valueAlign="a0.valueAlign"></input-text>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="'right'" v-model="a0.value" :valueAlign="a0.valueAlign"></input-text>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="'left'" v-model="a0.value" :valueAlign="'left'"></input-text>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="'left'" v-model="a0.value" :valueAlign="'center'"></input-text>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="'left'" v-model="a0.value" :valueAlign="'right'"></input-text>
    <h2>必填符样式</h2>
    <input-text :keyItem="a0.keyItem" :keyAlign="a0.keyAlign" :isRequire="true" :isBold="a0.isBold" :placeHolder="a0.placeHolder" :placeHolderAlign="'left'" v-model="a0.value" :valueAlign="'right'"></input-text>
  </div>
</template>

<script>
import { inputText } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
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
        valueAlign: 'right'
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
      }
    }
  },
  computed: {
  },
  components: {
    inputText
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
