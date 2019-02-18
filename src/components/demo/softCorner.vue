<template>
  <div class="hardCorner">
    <h2>基本样式</h2>
    <soft-corner :text="a2.text" :color="a2.color" :border="a2.border" :borderRadius="a2.borderRadius" :bg="a2.bg" :area="a2.area" :maxW="a2.maxW"></soft-corner>
    <soft-corner :text="a1.text" :color="a1.color" :border="a1.border" :borderRadius="a1.borderRadius" :bg="a1.bg" :area="a1.area" :maxW="a1.maxW"></soft-corner>
    <h2>设置宽度</h2>
    <soft-corner :text="a0.text" :color="a0.color" :border="a0.border" :borderRadius="a0.borderRadius" :bg="a0.bg" :area="a0.area" :width="a0.width"></soft-corner>
    <soft-corner :text="a1.text" :color="a1.color" :border="a1.border" :borderRadius="a1.borderRadius" :bg="a1.bg" :area="a1.area" :width="a1.width"></soft-corner>
    <h2>控制bg</h2>
    <soft-corner :text="a2.text" :color="'#ff7e00'" :border="a2.border" :borderRadius="a2.borderRadius" :bg="'#fff'" :area="a2.area" :maxW="a2.maxW"></soft-corner>
    <h2>控制border</h2>
    <soft-corner :text="a2.text" :color="a2.color" :border="a2.border" :borderRadius="a2.borderRadius" :bg="a2.bg" :area="a2.area" :maxW="a2.maxW"></soft-corner>
    <soft-corner :text="a2.text" :color="'#ff7e00'" :border="'.02rem solid #ff7e00'" :borderRadius="a2.borderRadius" :bg="'#fff'" :area="a2.area" :maxW="a2.maxW"></soft-corner>
    <h2>控制area</h2>
    <soft-corner :text="a2.text" :color="a2.color" :border="a2.border" :borderRadius="a2.borderRadius" :bg="a2.bg" :area="a2.area"></soft-corner>
    <soft-corner :text="a2.text" :color="a2.color" :border="a2.border" :borderRadius="a2.borderRadius" :bg="a2.bg" :area="'area72'"></soft-corner>
    <soft-corner :text="a2.text" :color="a2.color" :border="a2.border" :borderRadius="a2.borderRadius" :bg="a2.bg" :area="'area56'"></soft-corner>
    <soft-corner :text="a3.text" :color="'#666'" :border="a3.border" :borderRadius="a3.borderRadius" :area="'area52'"></soft-corner>
    <soft-corner :text="a3.text" :color="'#666'" :border="a3.border" :borderRadius="a3.borderRadius" :area="'area48'"></soft-corner>
    <h2>块级样式</h2>
    <soft-corner :text="a0.text" :color="a0.color" :border="a0.border" :borderRadius="a0.borderRadius" :bg="a0.bg" :area="a0.area" :maxW="a0.maxW" :isBlock="a0.isBlock"></soft-corner>
    <soft-corner :text="a0.text" :color="a0.color" :border="a0.border" :borderRadius="a0.borderRadius" :bg="a0.bg" :area="a0.area" :isBlock="a0.isBlock"></soft-corner>
    <h2>可删除</h2>
    <soft-corner :text="a2.text" :color="a2.color" :border="a2.border" :borderRadius="a2.borderRadius" :bg="a2.bg" :area="a2.area" :hasDelIcon="true"></soft-corner>
    <soft-corner :text="a2.text" :color="a2.color" :border="a2.border" :borderRadius="a2.borderRadius" :bg="a2.bg" :area="'area72'" :hasDelIcon="true"></soft-corner>
    <soft-corner :text="a2.text" :color="a2.color" :border="a2.border" :borderRadius="a2.borderRadius" :bg="a2.bg" :area="'area56'" :hasDelIcon="true"></soft-corner>
    <soft-corner :text="a3.text" :color="'#666'" :border="a3.border" :borderRadius="a3.borderRadius" :area="'area52'" :hasDelIcon="true"></soft-corner>
    <soft-corner :text="a3.text" :color="'#666'" :border="a3.border" :borderRadius="a3.borderRadius" :area="'area48'" :hasDelIcon="true"></soft-corner>
  </div>
</template>

<script>
import {softCorner} from '@/components/oasiscare'
export default {
  props: {},
  data () {
    return {
      a0: {
        text: '提交',
        color: '#fff',
        border: 'none',
        borderRadius: '100px',
        bg: 'linear-gradient(to right, #ffa12c, #ff7913)',
        area: 'area88',
        maxW: '2rem',
        width: '2rem',
        minW: '100%',
        hasDelIcon: true,
        isBlock: true
      },
      a1: {
        text: '提交',
        color: '#fff',
        border: 'none',
        borderRadius: '100px',
        bg: 'linear-gradient(to right, rgba(255, 161, 44, .5) , rgba(255, 121, 19, 0.5))',
        area: 'area88',
        maxW: '5.76rem',
        width: '2.5rem',
        minW: '100%'
      },
      a2: {
        text: '提交',
        color: '#fff',
        border: 'none',
        borderRadius: '100px',
        bg: 'linear-gradient(to right, #ffa12c, #ff7913)',
        area: 'area88',
        maxW: '3rem',
        width: '1.5rem',
        minW: '100%'
      },
      a3: {
        text: '提交',
        color: '#fff',
        border: '.01rem solid rgba(0, 0, 0, .2)',
        borderRadius: '100px',
        bg: 'linear-gradient(to right, #ffa12c, #ff7913)',
        area: 'area88',
        maxW: '3rem',
        width: '1.5rem',
        minW: '100%'
      }
    }
  },
  computed: {
  },
  components: {
    softCorner
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>

.hardCorner

  h2
    font-size: .36rem

</style>
