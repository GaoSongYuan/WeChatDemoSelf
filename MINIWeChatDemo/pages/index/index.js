// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "元气少女锅的钢",
    userInfo:{},
    isShow: false
  },

  handleView() {
    console.log("点击了view");
    // 点击跳转到list页面
    wx.navigateTo({
      // url: '../list/list', // 两种方式均可
      url: '/pages/list/list',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfoMethod(); //获取用户信息    
  },

  /**
   * 获取用户信息的方法--包含判断用户是否授权、获取用户信息
   */
  getUserInfoMethod() {
    let that = this;
    // 判断用户是否授权信息获取
    wx.getSetting({
      success(data) {
        //console.log(data);
        if (data.authSetting["scope.userInfo"]) {
          // 用户已经授权
          console.log("用户已经授权");
          that.setData({
            isShow: false
          });
        } else {
          // 用户没有授权
          console.log("用户没有授权");
          that.setData({
            isShow: true
          });
        }
      }
    })

    // 获取用户登录的信息
    wx.getUserInfo({
      success(data) {
        console.log("获取用户数据成功！");
        that.setData({
          userInfo: data.userInfo
        });
      },
      // success: (data)=> { // ES6的箭头函数
      //   this.setData({
      //     userInfo : data.userInfo
      //   });
      // }
      fail() {
        console.log("获取用户数据失败");
      }
    });
  },

  /**
   * 判断用户点击是否授权
   */
  handleGetUserInfo(data) {
    console.log(data);
    // 判断用户点击的是否是允许
    if(data.detail.rawData) {
      // 包含rawData属性，说明用户点击了允许
      this.getUserInfoMethod(); // 重新调用获取用户信息的方法
    } else {
      console.log("用户点击了拒绝授权");
    }
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