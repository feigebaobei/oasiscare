import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import index from '@/components/index.vue'
import titleArea from '@/components/demo/titleArea.vue'
import addressPhone from '@/components/demo/addressPhone.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: '',
    //   component: ''
    // },
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
    }
  ]
})
