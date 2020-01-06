
Page({
  data: {

  },
  onLoad: function (options) {

  },
  onShow: function () {

  },
  onShareAppMessage: function () {

  },
  formsubmit: function (e) {
    var that = this
    wx.request({
      url: 'https://jwshop.gesilaa6.club/index.php/index/commodity/getLikeCommodity.html',
      data: {title:e.detail.value.input},
      success: function (res) {
        that.setData({ commodity: res.data.data })
      }
    })
  },
})