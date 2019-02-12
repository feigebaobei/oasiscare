// icon不在这里使用了。改为icon.vue
// icon里的渐变的由icon.vue控制。
// icon里的线性的由iconfont控制。
const icon = {
  // address: {
  //   x1: '', // 1倍图
  //   x2: '', // 2倍图
  //   x3: require('@/static/img/icons/address.png') // 3倍图
  // },
  plateTitle: {
    x1: '',
    x2: require('../assets/imgs/plateTitle.png'),
    x3: ''
  },
  arrows: {
    x1: require('../assets/imgs/arrows1x.png'),
    x2: require('../assets/imgs/arrows2x.png'),
    x3: require('../assets/imgs/arrows3x.png')
  },
  address: {
    x1: require('../assets/imgs/address1x.png'),
    x2: require('../assets/imgs/address2x.png'),
    x3: require('../assets/imgs/address3x.png')
  },
  phone: {
    x1: '',
    x2: require('../assets/imgs/phone2x.png'),
    x3: require('../assets/imgs/phone3x.png')
  }
}
const pic = {
  // default: { // 默认图片
  //   x1: '',
  //   x2: require('@/static/img/pic/default.png'),
  //   x3: ''
  // }
}
export {icon, pic}
