<template>
  <div class="basic">
    basic
  </div>
</template>

<script>
import { icon } from '../../lib/picMap.js'
import hardCorner from '../button/hardCorner.vue'
export default {
  props: {},
  data () {
    return {
    }
  },
  computed: {
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

.basic
  display: flex
  flex-wrap: wrap
  background-color: $white
  padding: $paddingTop $paddingRight $paddingBottom $paddingLeft

</style>
