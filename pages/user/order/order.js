var app = getApp()
Page({
  data: {
    current: 0,
    commodity: [],
  },
  onLoad: function (options) {
    var that = this
    that.setData({ current: options.id })
    wx.request({
      url: 'https://jwshop.gesilaa6.club/index.php/index/caco/getCommodityByStatus.html',
      data: { openId: app.globalData.openId, status: options.id },
      success: function (res) {
        that.setData({ commodity: res.data.data })
      }
    })
  },
  onShow: function () {


  },
  onShareAppMessage: function () {

  },
  switchNav: function (e) {
    var that = this
    that.setData({ current: e.target.id })
    wx.request({
      url: 'https://jwshop.gesilaa6.club/index.php/index/caco/getCommodityByStatus.html',
      data: { openId: app.globalData.openId, status: e.target.id },
      success: function (res) {
        that.setData({ commodity: res.data.data })
      }
    })
  }
})