// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    regId: 0,
    tselect: '',
    left: [
      { id: 0, title: '全球零食' }, { id: 1, title: '进口饮品' }, { id: 2, title: '进口酒类' },
      { id: 3, title: '粮油调味' }, { id: 4, title: '美妆个护' }, { id: 5, title: '家居家清' },
      { id: 6, title: '母婴用品' }, { id: 7, title: '冷冻冷藏' }, { id: 8, title: '健康保健' },
      { id: 9, title: '鱼宝专享' },
    ],
    right: [

    ]
  },
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ffffff',
    })
    wx.setNavigationBarTitle({
      title: '商品分类',
    })
  },
  onShow: function () {
    var that = this
    var classifyId = wx.getStorageSync("classifyId")
    that.setData({ tselect: classifyId })
    wx.request({
      url: 'https://jwshop.gesilaa6.club/index.php/index/classify/getClassify.html',
      data: { pid: classifyId },
      success: function (res) {
        that.setData({ right: res.data.data })
      }
    })
  },
  onPullDownRefresh: function () {

  },
  onShareAppMessage: function () {

  },
  left: function (e) {
    var that = this
    var regId = e.target.id
    that.setData({ tselect: regId, regId: regId })
    wx.request({
      url: 'https://jwshop.gesilaa6.club/index.php/index/classify/getClassify.html',
      data: { pid: e.target.id },
      success: function (res) {
        that.setData({ right: res.data.data })
      }
    })
  },
})