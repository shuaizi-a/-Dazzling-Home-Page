
window.onhashchange = () => {
  // 获取url地址栏 # 后面的 标签值
  document.querySelector('#page').className = location.hash.replace('#', '')
}

let index = 0 //索引值为0
let pageTabs = document.querySelectorAll('nav a')
let gapTime = 1000 
let lastTime = null
let nowTime = null

document.querySelector('#page').onwheel = function(e) {
  // 阻止冒泡事件
  e.preventDefault()
  nowTime = Date.now() 

  if(!lastTime || nowTime - lastTime > gapTime) {
    lastTime = nowTime
    if(e.deltaY > 0 && index < pageTabs.length - 1 ) {
      index++
      pageTabs[index].click()
    } else if(e.deltaY < 0 && index > 0) {
      index--
      pageTabs[index].click()
    }
  }
}




