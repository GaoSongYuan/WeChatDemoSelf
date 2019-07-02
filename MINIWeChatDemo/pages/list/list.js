// pages/list/list.js

let datas = require('../../datas/list-data.js');

Page({

  /**
   * 页面的初始数据  
   */
  data: {
    listArr: []
  },

  // 点击模板，跳转到detail详情页  
  toDetail : function (event) {
    // 获取点击跳转对应的下标
    let index = event.currentTarget.dataset.indexhenggang;
    
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index,
    })
  },

  // 点击图片轮播器，跳转到对应detail详情页 
  carouselToDetail : function(event) {
    // 获取点击跳转对应的下标
    // 注意这里从event中取值是使用的target，注意区分
    let index = event.target.dataset.imgindex;
    
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listArr : datas.list_data
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})