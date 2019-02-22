<template>
  <div class="confirm">
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
  </div>
</template>

<script>
import { confirm } from '@/components/oasiscare'
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
      }
    }
  },
  computed: {
  },
  components: {
    confirm
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

  .confirm

    h2
      font-size: .36rem

</style>
