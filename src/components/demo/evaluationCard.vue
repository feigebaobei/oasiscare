<template>
  <div class="evaluationCard">
    <h2>基本样式</h2>
    <evaluation-card :name="a0.name" :gradeValue="a0.gradeValue" :time="a0.time" :text="a0.text" :line="a0.line" :showExpandBtn="a0.showExpandBtn"></evaluation-card>
    <h2>极限样式</h2>
    <evaluation-card :name="a1.name" :gradeValue="a1.gradeValue" :time="a1.time" :text="a1.text" :line="a1.line" :showExpandBtn="a1.showExpandBtn" :data="'data'" :eventType="'m0'" @m0="m0"></evaluation-card>
  </div>
</template>

<script>
import { evaluationCard } from '@/components/oasiscare'
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
      }
    }
  },
  computed: {
  },
  components: {
    evaluationCard
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

  .evaluationCard

    h2
      font-size: .36rem

</style>
