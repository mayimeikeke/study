// pages/demo1/demo1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myImg: "/img/1.jpg",
    imgArr: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"]
  },
  click(e) {
    clearInterval(this.timer)
    console.log(e)
    let id = e.target.id;
    let myImg = this.data.imgArr[id];
    this.setData({
      myImg : myImg
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.timer = setInterval(() => {
      let ind = Math.floor(Math.random() * 3)
      this.setData({
        myImg: this.data.imgArr[ind]
      })
    }, 500)
  }
})