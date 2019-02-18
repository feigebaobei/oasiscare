<template>
  <div class="basic">
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
  </div>
</template>

<script>
import { inputRadio } from '@/components/oasiscare'
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
      }
    }
  },
  computed: {
  },
  components: {
    inputRadio
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
