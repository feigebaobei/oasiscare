<template>
  <div class="info">
    <div class="import">
      <h2>引用</h2>
      <code>import {doctorCardInfo} from '@/components/oasiscare'</code>
    </div>
    <h2>基本样式</h2>
    <doctor-card-info :imgUrl="a0.imgUrl" :name="a0.name" :isLeader="a0.isLeader" :post="a0.post" :hospital="a0.hospital" :hasSubject="a0.hasSubject" :subject="a0.subject" :dataItems="a0.dataItems"></doctor-card-info>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import { doctorCardInfo } from '@/components/oasiscare'
import { icon } from '@/lib/picMap.js'
import explainTable from '../../components/explainTabel.vue'
export default {
  props: {},
  data () {
    return {
      a0: {
        imgUrl: icon.test.x1,
        name: '李敏敏',
        isLeader: true,
        post: '副主任医师',
        hospital: '中国人民解放军总医院',
        hasSubject: true,
        subject: '外科',
        dataItems: [
          {
            imgUrl: icon.test.x1,
            value: '80%',
            valueColor: '#4ca866',
            title: '疗效'
          },
          {
            imgUrl: icon.logo.x1,
            value: '80%',
            valueColor: '#4ca866',
            title: '疗效'
          },
          {
            imgUrl: icon.test.x1,
            value: '80%',
            valueColor: '#4ca866',
            title: '疗效'
          }
        ]
      },
      attrs: [
        ['imgUrl', 'String', '', '自定义图片', '-'],
        ['name', 'String', '', '姓名', '-'],
        ['isLeader', 'Boolean', 'false', '是否是leader', '-'],
        ['post', 'String', '', '职称', '-'],
        ['hospital', 'String', '', '医院', '-'],
        ['hasSubject', 'Boolean', 'true', '是否有科室', '-'],
        ['subject', 'String', '', '科室', '-'],
        ['dataItems', 'String', '', '由对象组成的数组。例：<code>[{imgUrl: \'\', value: \'\', valueColor: \'\', title: \'\'}。详情可见<a href="#/common">common/infoBlock</a>]</code>', '-']
      ]
    }
  },
  computed: {
  },
  components: {
    doctorCardInfo,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .info

    h2
      font-size: .36rem

</style>
