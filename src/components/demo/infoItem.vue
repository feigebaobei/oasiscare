<template>
  <div class="basic">
    <h2>基本样式</h2>
    <info-item :keyItem="a0.keyItem" :value="a0.value"></info-item>
    <h2>最小宽度</h2>
    <info-item :keyItem="a0.keyItem" :keyW="a0.keyW" :value="a0.value"></info-item>
    <h2>key的对齐方式</h2>
    <info-item :keyItem="a0.keyItem" :keyW="a0.keyW" :value="a0.value"></info-item>
    <info-item :keyItem="a0.keyItem" :keyW="a0.keyW" :keyAlign="a2.keyAlign" :value="a0.value"></info-item>
    <info-item :keyItem="a0.keyItem" :keyW="a0.keyW" :keyAlign="a1.keyAlign" :value="a0.value"></info-item>
    <info-item :keyItem="a0.keyItem" :keyW="a0.keyW" :keyAlign="a3.keyAlign" :value="a0.value"></info-item>
    <info-item :keyItem="a0.keyItem" :keyW="a0.keyW" :keyAlign="a4.keyAlign" :value="a0.value"></info-item>
    <h2>插入value</h2>
    <info-item :keyItem="a0.keyItem">
      <div class="box">
        <p v-html="box.text"></p>
        <img :src="item" alt="" v-for="(item, index) in box.imgs" :key="index">
      </div>
    </info-item>
    <h2>极限样式</h2>
    <info-item :keyItem="a1.keyItem" :value="a1.value"></info-item>
    <info-item :keyItem="a1.keyItem + a1.keyItem + a1.keyItem" :value="a1.value"></info-item>
  </div>
</template>

<script>
import { infoItem } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
export default {
  props: {},
  data () {
    return {
      a0: {
        keyItem: '护理工具',
        value: '自备',
        keyAlign: 'right',
        keyW: '2rem'
      },
      a1: {
        keyItem: '护理工具护理工具护理工具',
        value: '免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险.',
        keyAlign: 'right',
        keyW: '2rem'
      },
      a2: {
        keyItem: '护理工具',
        value: '免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险.',
        keyAlign: 'center',
        keyW: '2rem'
      },
      a3: {
        keyItem: '护理工具',
        value: '免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险.',
        keyAlign: 'space-around',
        keyW: '2rem'
      },
      a4: {
        keyItem: '护理工具',
        value: '免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险，免费为服务对象投保中国人保意外险.',
        keyAlign: 'space-between',
        keyW: '2rem'
      },
      box: {
        text: '感冒发烧流鼻涕，头痛',
        imgs: [
          icon.logo.x1,
          icon.test.x1,
          icon.logo.x1
        ]
      }
    }
  },
  computed: {
  },
  components: {
    infoItem
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

    .box
      font-size: 0

      p
        font-size: .2rem
        color: #283

      img
        width: 30px
        height: 30px

</style>
