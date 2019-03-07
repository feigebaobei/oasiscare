<template>
  <div class="appendix">
    <h2>appendix</h2>
    <nav class="nav">
      <router-link to="/appendix/imgs">图片集</router-link>
      <router-link to="/appendix/data">数据集</router-link>
    </nav>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
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

  .appendix

    h2, .nav
      font-size: .36rem

</style>
