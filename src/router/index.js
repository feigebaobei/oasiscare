import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import index from '@/components/index.vue'
import titleArea from '@/components/demo/titleArea.vue'

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
    }
  ]
})
