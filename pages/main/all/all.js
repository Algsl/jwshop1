// pages/index/more/more.js
Page({
  data: {
    //SwitchTab的标识位，包含综合、最新、价格、销量
    sindex: 0,
    //后台获取自驾游/周边游所有旅游景区的信息
    lists: [],
    //类型id：自驾游、周边游有
  },
  onLoad: function (options) {
    var that = this
    wx.setNavigationBarTitle({
      title: '国家馆',
    })


    //设置头部导航字体颜色及背景颜色
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ffffff',
    })
  },
  onShow: function () {

  },
  onShareAppMessage: function () {

  },
  switch: function (e) {
    var that = this
    that.setData({ sindex: e.target.id })
  }
})