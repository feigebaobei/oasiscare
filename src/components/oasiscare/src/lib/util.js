const getChinaWeek = (d) => {
  let str = ''
  switch (d.getDay()) {
    case 0:
      str = '周日'
      break
    case 1:
      str = '周一'
      break
    case 2:
      str = '周二'
      break
    case 3:
      str = '周三'
      break
    case 4:
      str = '周四'
      break
    case 5:
      str = '周五'
      break
    case 6:
    default:
      str = '周六'
      break
  }
  return str
}

export {
  getChinaWeek
}
