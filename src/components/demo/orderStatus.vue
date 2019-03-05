<template>
  <div class="orderStatus">
    <div class="import">
      <h2>引用</h2>
      <code>import {orderStatus} from '@/components/oasiscare'</code>
    </div>
    <h2>被驳回</h2>
    <order-status :title="a0.title" :subTitle="a0.subTitle" :imgName="a0.imgName" :active="a0.active"></order-status>
    <h2>审核中</h2>
    <order-status :title="a1.title" :subTitle="a1.subTitle" :imgName="a1.imgName" :active="a1.active"></order-status>
    <h2>已过期</h2>
    <order-status :title="a2.title" :subTitle="a2.subTitle" :imgName="a2.imgName" :active="a2.active"></order-status>
    <h2>订单已取消</h2>
    <order-status :title="a3.title" :subTitle="a3.subTitle" :imgName="a3.imgName" :active="a3.active"></order-status>
    <h2>待确认</h2>
    <order-status :title="a4.title" :subTitle="a4.subTitle" :imgName="a4.imgName" :active="a4.active"></order-status>
    <h2>签约成功</h2>
    <order-status :title="a5.title" :subTitle="a5.subTitle" :imgName="a5.imgName" :active="a5.active"></order-status>
    <h2>待付款</h2>
    <order-status :title="a6.title" :subTitle="a6.subTitle" :imgName="a6.imgName" :active="a6.active"></order-status>
    <h2>订单已支付</h2>
    <order-status :title="a7.title" :subTitle="a7.subTitle" :imgName="a7.imgName" :active="a7.active"></order-status>
    <h2>卖家已发货</h2>
    <order-status :title="a8.title" :subTitle="a8.subTitle" :imgName="a8.imgName" :active="a8.active"></order-status>
    <h2>交易成功</h2>
    <order-status :title="a9.title" :subTitle="a9.subTitle" :imgName="a9.imgName" :active="a9.active"></order-status>
    <h2>待服务</h2>
    <order-status :title="a10.title" :subTitle="a10.subTitle" :imgName="a10.imgName" :active="a10.active"></order-status>
    <h2>自定义图片</h2>
    <order-status :title="a11.title" :subTitle="a11.subTitle" :imgUrl="a11.imgUrl" :active="a11.active"></order-status>
    <h2>iconName的优先级大于iconUrl</h2>
    <order-status :title="a11.title" :subTitle="a11.subTitle" :imgName="a11.imgName" :imgUrl="a11.imgUrl" :active="a11.active"></order-status>
    <h2>属性说明</h2>
    <explain-table :tds="attrs"></explain-table>
    <h2>相关issue</h2>
    <h2>发布日志</h2>
  </div>
</template>

<script>
import {orderStatus} from '@/components/oasiscare'
import explainTable from '../../components/explainTabel.vue'
import { icon } from '@/lib/picMap.js'
export default {
  props: {},
  data () {
    return {
      a0: {
        title: '被驳回',
        subTitle: 'subTitle',
        imgName: 'reject',
        active: false
      },
      a1: {
        title: '审核中',
        subTitle: 'subTitle',
        imgName: 'checking',
        active: false
      },
      a2: {
        title: '已过期',
        subTitle: 'subTitle',
        imgName: 'staleDate',
        active: false
      },
      a3: {
        title: '订单已取消',
        subTitle: 'subTitle',
        imgName: 'orderCancelGrey',
        active: false
      },
      a4: {
        title: '待确认',
        subTitle: 'subTitle',
        imgName: 'affirmGrey',
        active: false
      },
      a5: {
        title: '签约成功',
        subTitle: 'subTitle',
        imgName: 'dealSuccessColor',
        active: true
      },
      a6: {
        title: '待付款',
        subTitle: 'subTitle',
        imgName: 'topayColor',
        active: true
      },
      a7: {
        title: '订单已支付',
        subTitle: 'subTitle',
        imgName: 'paidColor',
        active: true
      },
      a8: {
        title: '卖家已发货',
        subTitle: 'subTitle',
        imgName: 'transportColor',
        active: true
      },
      a9: {
        title: '交易成功',
        subTitle: 'subTitle',
        imgName: 'orderSuccessColor',
        active: true
      },
      a10: {
        title: '待服务',
        subTitle: 'subTitle',
        imgName: 'toServeColor',
        active: true
      },
      a11: {
        title: '自定义图片',
        subTitle: 'subTitle',
        imgName: 'reject',
        imgUrl: icon.logo.x1,
        active: true
      },
      attrs: [
        ['title', 'String', '', '标题', '-',],
        ['subTitle', 'String', '', '副标题', '-',],
        ['imgName', 'String', '', '组件内预设的图片的名称。（reject / checking / staleDate / orderCancelGrey / affirmGrey / dealSuccessColor / topayColor / paidColor / transportColor / orderSuccessColor / toServeColor）', '-',],
        ['imgUrl', 'String', '', '自定义图片的url', '-',],
        ['active', 'Boolean', 'true', '是否是激活状态', '-',]
      ]
    }
  },
  computed: {
  },
  components: {
    orderStatus,
    explainTable
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/basic.styl'

  .orderStatus

    h2
      font-size: .36rem

</style>
