var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    commodity: [],
    iscollect: false,
    commId: 0,
    
  },
  onLoad: function (options) {
    var that = this
    that.setData({ commId: options.id })
    wx.request({
      url: 'https://jwshop.gesilaa6.club/index.php/index/commodity/getCommodityById.html',
      data: { id: options.id },
      success: function (res) {
        that.setData({ commodity: res.data.data })
      }
    })
    wx.request({
      url: 'https://jwshop.gesilaa6.club/index.php/index/caco/getIsCollect.html',
      data: { openId: app.globalData.openId, type: 1, commId: that.data.commId },
      success: function (res) {
        that.setData({ iscollect: res.data.data})
      }
    })
  },
  onShow: function () {

  },


  onPullDownRefresh: function () {

  },
  onShareAppMessage: function () {

  },
  switchNav: function (e) {
    var that = this
    that.setData({ current: e.target.id })
  },
  collect: function () {
    var that = this
    if (that.data.iscollect) {
      wx.request({
        url: 'https://jwshop.gesilaa6.club/index.php/index/caco/delCollect.html',
        data: { openId: app.globalData.openId, type: 1, commId: that.data.commId },
        success: function (res) {
          that.setData({ iscollect: false })
        }
      })
    } else {
      wx.request({
        url: 'https://jwshop.gesilaa6.club/index.php/index/caco/addScaco.html',
        data: { openId: app.globalData.openId, type: 1, commId: that.data.commId },
        success: function (res) {
          that.setData({ iscollect: true })
        }
      })
    }
  },
  addCar: function () {
    var that = this
    wx.request({
      url: 'https://jwshop.gesilaa6.club/index.php/index/caco/addScaco.html',
      data: { openId: app.globalData.openId, type: 0, commId: that.data.commId },
      success: function (res) {
        wx.showToast({
          title: '添加购物车成功',
        })
      }
    })
  },
  buy:function(){
    var that = this
    wx.request({
      url: 'https://jwshop.gesilaa6.club/index.php/index/caco/addScaco.html',
      data: { openId: app.globalData.openId, type: 0, commId: that.data.commId },
      success: function (res) {
        wx.request({
          url: 'https://jwshop.gesilaa6.club/index.php/index/caco/changeStatus.html',
          data: { openId: app.globalData.openId, commId: that.data.commId, status: '0' },
          success: function (res) {
            wx.navigateTo({
              url: '../../scart/calculate/calculate?sum=' + that.data.commodity.price + '&array=' + that.data.commId+'&status=0',
            })
          }
        })
      }
    })
  }
})