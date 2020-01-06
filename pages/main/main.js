Page({
  data: {
    content1_row1: [
      { id: 1, img: 'https://jwshop.gesilaa6.club/images/shop/icon1.png', txt: '每日签到' },
      { id: 2, img: 'https://jwshop.gesilaa6.club/images/shop/icon2.png', txt: '全球零食' },
      { id: 3, img: 'https://jwshop.gesilaa6.club/images/shop/icon3.png', txt: '进口饮品' },
      { id: 4, img: 'https://jwshop.gesilaa6.club/images/shop/icon4.png', txt: '进口酒类' },
      { id: 5, img: 'https://jwshop.gesilaa6.club/images/shop/icon5.png', txt: '粮油调味' },
    ],
    content1_row2: [
      { id: 6, img: 'https://jwshop.gesilaa6.club/images/shop/icon6.png', txt: '美妆个护' },
      { id: 7, img: 'https://jwshop.gesilaa6.club/images/shop/icon7.png', txt: '家居家清' },
      { id: 8, img: 'https://jwshop.gesilaa6.club/images/shop/icon8.png', txt: '母婴用品' },
      { id: 9, img: 'https://jwshop.gesilaa6.club/images/shop/icon9.png', txt: '冷冻冷藏' },
      { id: 10, img: 'https://jwshop.gesilaa6.club/images/shop/icon10.png', txt: '健康保健' },
    ],
    content2: [],
    content3: [
      { id: 1, img: 'https://jwshop.gesilaa6.club/images/shop/country1.png' },
      { id: 2, img: 'https://jwshop.gesilaa6.club/images/shop/country2.png' },
      { id: 3, img: 'https://jwshop.gesilaa6.club/images/shop/country3.png' },
      { id: 4, img: 'https://jwshop.gesilaa6.club/images/shop/country4.png' },
      { id: 5, img: 'https://jwshop.gesilaa6.club/images/shop/country5.png' },
      { id: 6, img: 'https://jwshop.gesilaa6.club/images/shop/country6.png' },
      { id: 7, img: 'https://jwshop.gesilaa6.club/images/shop/country7.png' },
      { id: 8, img: 'https://jwshop.gesilaa6.club/images/shop/country8.png' },
      { id: 9, img: 'https://jwshop.gesilaa6.club/images/shop/country9.png' },
    ]
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://jwshop.gesilaa6.club/index.php/index/commodity/getCommodityByType.html',
      data: { type: 0 },
      success: function (res) {
        that.setData({ content2: res.data.data})
      }
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ffffff',
    })
  },
  onShow: function () {

  },
  onPullDownRefresh: function () {

  },
  onShareAppMessage: function () {

  },
  toClassify: function (e) {
    if (e.currentTarget.id == 1) {
      wx.showToast({
        title: '奖励1积分',
      })
    } else {
      wx.setStorageSync("classifyId", e.currentTarget.id - 2)
      wx.switchTab({
        url: '../classify/classify',
      })
    }
  }
})