import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import index from '@/components/index.vue'
import titleArea from '@/components/demo/titleArea.vue'
import addressPhone from '@/components/demo/addressPhone.vue'

import {appendix} from './appendix.js'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'index',
      component: resolve => {
        require(['@/components/index.vue'], resolve)
      }
    },
    {
      path: '/titleArea',
      name: '/titleArea',
      component: titleArea
    },
    {
      path: '/addressPhone',
      name: '/addressPhone',
      component: addressPhone
    },
    {
      path: '/orderStatus',
      name: '/orderStatus',
      component: resolve => {
        require(['@/components/demo/orderStatus.vue'], resolve)
      }
    },
    {
      path: '/addressCard',
      name: '/addressCard',
      component: resolve => {
        require(['@/components/demo/addressCard.vue'], resolve)
      }
    },
    {
      path: '/authentication',
      name: '/authentication',
      component: resolve => {
        require(['@/components/demo/authentication.vue'], resolve)
      }
    },
    {
      path: '/addressItem',
      name: '/addressItem',
      component: resolve => {
        require(['@/components/demo/addressItem.vue'], resolve)
      }
    },
    {
      path: '/hint',
      name: '/hint',
      component: resolve => {
        require(['@/components/demo/hint.vue'], resolve)
      }
    },
    {
      path: '/grade',
      name: '/grade',
      component: resolve => {
        require(['@/components/demo/grade.vue'], resolve)
      }
    },
    {
      path: '/navItem',
      name: '/navItem',
      component: resolve => {
        require(['@/components/demo/navItem.vue'], resolve)
      }
    },
    {
      path: '/infoItem',
      name: '/infoItem',
      component: resolve => {
        require(['@/components/demo/infoItem.vue'], resolve)
      }
    },
    // {
    //   path: '/formItem',
    //   name: '/formItem',
    //   component: resolve => {
    //     require(['@/components/demo/formItem.vue'], resolve)
    //   }
    // },
    {
      path: '/inputText',
      name: '/inputText',
      component: resolve => {
        require(['@/components/demo/formItem/inputText.vue'], resolve)
      }
    },
    {
      path: '/inputRadio',
      name: '/inputRadio',
      component: resolve => {
        require(['@/components/demo/formItem/inputRadio.vue'], resolve)
      }
    },
    {
      path: '/common',
      name: '/common',
      component: resolve => {
        require(['@/components/demo/common/index.vue'], resolve)
      }
    },
    {
      path: '/hardCorner',
      name: '/hardCorner',
      component: resolve => {
        require(['@/components/demo/hardCorner.vue'], resolve)
      }
    },
    {
      path: '/softCorner',
      name: '/softCorner',
      component: resolve => {
        require(['@/components/demo/softCorner.vue'], resolve)
      }
    },
    {
      path: '/step',
      name: '/step',
      component: resolve => {
        require(['@/components/demo/step.vue'], resolve)
      }
    },
    // {
    //   path: '/assetCard',
    //   name: '/assetCard',
    //   component: resolve => {
    //     require(['@/components/demo/assetCard.vue'], resolve)
    //   }
    // },
    {
      path: '/orderInfoItem',
      name: '/orderInfoItem',
      component: resolve => {
        require(['@/components/demo/orderInfoItem.vue'], resolve)
      }
    },
    {
      path: '/drug',
      name: '/drug',
      component: resolve => {
        require(['@/components/demo/drug.vue'], resolve)
      }
    },
    {
      path: '/directionItem',
      name: '/directionItem',
      component: resolve => {
        require(['@/components/demo/directionItem.vue'], resolve)
      }
    },
    {
      path: '/serveCard',
      name: '/serveCard',
      component: resolve => {
        require(['@/components/demo/serveCard.vue'], resolve)
      }
    },
    {
      path: '/hospitalCard',
      name: '/hospitalCard',
      component: resolve => {
        require(['@/components/demo/hospitalCard.vue'], resolve)
      }
    },
    {
      path: '/hospitalCardInfo',
      name: '/hospitalCardInfo',
      component: resolve => {
        require(['@/components/demo/hospitalCardInfo.vue'], resolve)
      }
    },
    {
      path: '/signTeamCard',
      name: '/signTeamCard',
      component: resolve => {
        require(['@/components/demo/signTeamCard.vue'], resolve)
      }
    },
    {
      path: '/doctorCardBig',
      name: '/doctorCardBig',
      component: resolve => {
        require(['@/components/demo/doctorCardBig.vue'], resolve)
      }
    },
    {
      path: '/doctorCardSmall',
      name: '/doctorCardSmall',
      component: resolve => {
        require(['@/components/demo/doctorCardSmall.vue'], resolve)
      }
    },
    {
      path: '/doctorCardInfo',
      name: '/doctorCardInfo',
      component: resolve => {
        require(['@/components/demo/doctorCardInfo.vue'], resolve)
      }
    },
    {
      path: '/recordCard',
      name: '/recordCard',
      component: resolve => {
        require(['@/components/demo/recordCard.vue'], resolve)
      }
    },
    {
      path: '/evaluationCard',
      name: '/evaluationCard',
      component: resolve => {
        require(['@/components/demo/evaluationCard.vue'], resolve)
      }
    },
    {
      path: '/confirm',
      name: '/confirm',
      component: resolve => {
        require(['@/components/demo/confirm.vue'], resolve)
      }
    },
    {
      path: '/tabBarTime',
      name: '/tabBarTime',
      component: resolve => {
        require(['@/components/demo/tabBarTime.vue'], resolve)
      }
    },
    ...appendix
  ]
})
