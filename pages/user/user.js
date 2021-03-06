var app = getApp()
Page({
  data: {
    animationData: {},
    userInfo: null,
  },
  onLoad: function (options) {
    this.setData({ userInfo: wx.getStorageSync("userInfo") })

    var userInfo = wx.getStorageSync("userInfo")
    var openId = app.globalData.openId
    if (userInfo != '') {
      wx.request({
        url: 'https://jwshop.gesilaa6.club/index.php/index/user/addUser.html',
        data: { openId: openId, nick_name: userInfo.nickName, sex: userInfo.gender, head_img: userInfo.avatarUrl },
      })
    }

    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    var i = 0
    var j = 0
    setInterval(function () {
      i = Math.random() * 3
      j = Math.random() * 8
      animation.translate(i * 50, j * 50).scale(i, i).step()
      this.setData({ animationData: animation.export() })
    }.bind(this), 1000)
    wx.setNavigationBarTitle({
      title: '个人中心',
    })
  },
  onShow: function () {

  },
  onPullDownRefresh: function () {

  },
  onShareAppMessage: function () {

  },
  getUserInfo: function (e) {
    this.setData({ userInfo: e.detail.userInfo })
    wx.setStorageSync('userInfo', e.detail.userInfo)
  }
})