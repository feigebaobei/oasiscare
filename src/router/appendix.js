const appendix = [
  {
    path: '/appendix',
    // name: 'appendix', // 有默认子路由时不能设置name值
    component: (resolve) => {
      require(['@/components/appendix/index.vue'], resolve)
    },
    // redirect: '/appendix/imgs', // 使用路由重定向
    children: [
      // 这样可以设置默认子路由
      {
        path: '',
        component: (resolve) => {
          require(['@/components/appendix/imgs.vue'], resolve)
        }
      },
      {
        path: 'imgs',
        name: 'imgs',
        component: (resolve) => {
          require(['@/components/appendix/imgs.vue'], resolve)
        }
      },
      {
        path: 'data',
        name: 'data',
        component: (resolve) => {
          require(['@/components/appendix/data.vue'], resolve)
        }
      }
    ]
  }
]

export {
  appendix
}

/*
若写成
export default appendix
则引用时须写成
import appendix from './appendix.js'
 */
