//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   thing:"这是个啥"
  },
  //事件处理函数
 btn(){
   this.setData({
     thing : "点了也不告诉你"
   })
   console.log('hehe')
 },
 clear(){
   this.setData({
     thing:""
   })
 },
  outer(){
    console.log('outer')
  },
  middle() {
    console.log('middle')
  },
  inner() {
    console.log('inner')
  }

})