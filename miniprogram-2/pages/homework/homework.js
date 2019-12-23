let timer;
let tag = true;
// pages/homework/homework.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    winCount: 0,
    result: "",
    showArr: ["/img/bu.png", "/img/shitou.png", "/img/jiandao.png"],
    autoShow: "/img/bu.png",
    myShow: "/img/wenhao.png"
  },
  choose(e) {
    clearInterval(timer);
    if (tag == false) return;
    let id = e.target.id;
    let myShow = this.data.showArr[id];
    let autoShow = this.data.autoShow;
    // console.log(myShow)
    // console.log(autoShow)
    let result = "";
    let winCount = this.data.winCount;
    
    if (autoShow == "/img/bu.png" && myShow == "/img/jiandao.png" || autoShow == "/img/shitou.png" && myShow == "/img/bu.png" || autoShow == "/img/jiandao.png" && myShow == "/img/shitou.png") {
      result = "您赢了";
      winCount++
    } else if (autoShow == "/img/bu.png" && myShow == "/img/bu.png" || autoShow == "/img/shitou.png" && myShow == "/img/shitou.png" || autoShow == "/img/jiandao.png" && myShow == "/img/jiandao.png") {
      result = "平局了"
    } else {
      result = "您输了"
    }
    // console.log(this)
    this.setData({
      myShow,
      result,
      winCount
    })
    tag = false;
  },
  // 再来一次
  onceAgain() {
    clearInterval(timer)
    this.setTimer()
    tag = true;
    this.setData({
      myShow: "/img/wenhao.png",
      result: ""
    })
  },
  // 重置
  reset() {
    this.onceAgain();
    this.setData({
      winCount: 0
    })
  },
  // 启动定时器
  setTimer() {
    timer = setInterval(() => {
      let ind = Math.floor(Math.random() * 3);
      let autoShow = this.data.showArr[ind];
      this.setData({
        autoShow: autoShow
      })
    }, 50)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setTimer();
  },
})