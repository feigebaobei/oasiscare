<template>
  <div class="basic">
    <table class="attrExplainTable" width="100%" border="8" cellpadding="5" cellspacing="0" frame="box" rules="all">
      <thead>
        <tr>
          <th v-for="(item, index) in ths" :key="index" v-html="item"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tds" :key="index">
          <td v-for="(subItem, subIndex) in item" :key="subIndex" v-html="subItem"></td>
        </tr>
      </tbody>
      <!-- <tfoot>
        <tr>
          <td></td>
        </tr>
      </tfoot> -->
    </table>
  </div>
</template>

<script>
export default {
  props: {
    ths: {
      type: Array,
      default () {
        // return []
        return ['属性', '类型', '默认值', '说明', '版本要求']
      }
    },
    tds: {
      type: Array,
      default () {
        return []
      }
    }
  },
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
@import '../assets/style/basic.styl'

  .basic

    h2
      font-size: .36rem

</style>
