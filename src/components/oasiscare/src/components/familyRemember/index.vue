<!-- 
这个组件需要等ui确定后才能开始做
此时还没有增加版本号
 -->
<template>
  <div class="familyRemember">
    <div class="imgBox">
      <img :src="compImgUrl" alt="">
    </div>
  </div>
</template>

<script>
// import { icon } from '../../lib/picMap.js'
export default {
  props: {},
  data () {
    return {
    }
  },
  computed: {
    compImgUrl () {
      let img = this.imgUrl
      if (img) {
        return img
      } else {
        if (this.sex === 'man') {
          // return icon.manDefault.x2
        } else {
          // return icon.womanDefault.x2
        }
      }
    }
  },
  components: {
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/main.styl'

.familyRemember
  display: flex
  flex-wrap: wrap
  background-color: $white
  padding: $paddingTop $paddingRight $paddingBottom $paddingLeft

</style>
