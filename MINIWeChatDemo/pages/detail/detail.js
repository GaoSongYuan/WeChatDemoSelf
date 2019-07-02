// pages/detail/detail.js

let datas = require('../../datas/list-data.js');
let appDatas = getApp();
console.log(appDatas);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    index: null,
    isCollected: false,
    isMusicPlay : false
  },

  // 收藏按钮的点击事件
  handleCollection : function () {
    let isCollected = !this.data.isCollected;
    // 更新图片
    this.setData({
      // isCollected 可以简写
      isCollected : isCollected
    });

    // 提示toast
    let title = isCollected ? '收藏成功' : '取消收藏'
    wx:wx.showToast({
      title: title,
      icon: 'success'
    });

    // 缓存数据到本地
    // {1:true, 2:false,3:true......}
    let {index} = this.data;
    // let index = this.data.index;
    
    // 不可行，会覆盖之前的状态
    // let obj = {};

    wx.getStorage({
      key: 'isCollectedStorage',
      success:(storageDatas) => {

        // 需要写在拿到缓存数据成功之后的回调里，因为是异步的
        let obj = storageDatas.data; // {0 : true}
        obj[index] = isCollected; // eg：存入 {0:,true, 1：true} 或者更改 {0：false}
        wx.setStorage({
          key: 'isCollectedStorage',
          data: obj,
          success: () => { }
        });
      }
    });
  },

  // 音乐播放点击事件
  handleMusicPlay: function () {
    // 处理音乐播放
    let isMusicPlay = !this.data.isMusicPlay;
    this.setData({
      isMusicPlay
    });
    
    let detailObj0 = this.data.detailObj; 
    // 控制音乐播放
    if(isMusicPlay) {
      // 播放音乐
      wx.playBackgroundAudio({
        dataUrl: detailObj0.music.dataUrl,
        title: detailObj0.music.title,
        coverImgUrl: detailObj0.music.coverImgUrl,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    } else {
      // 暂停音乐
      wx.pauseBackgroundAudio();
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取参数index
    let index = options.index;
    this.setData({
      detailObj: datas.list_data[index],
      index : index
    });

    // 根据本地缓存的数据，判断用户是否收藏当前文章
    let detailStorage = wx.getStorageSync('isCollectedStorage');
    // 如果一开始没有缓存数据的时候
    if (!detailStorage) {
      // 在缓存中初始化一个空对象
      wx.setStorageSync('isCollectedStorage', {});
    }
    // 判断用户是否收藏
    if (detailStorage[index]) {
      this.setData({
        isCollected : true
      });
    } 

    // 监听音乐播放
    wx.onBackgroundAudioPlay(() => {
      // 音乐播放，修改isMusicPlay的状态值
      this.setData({
        isMusicPlay : true
      });

      // 修改appDatas全局的数据
      appDatas.data.isPlay = true;
      appDatas.data.pageIndex = index;
    })
    // 判断音乐是否在播放
    if(appDatas.data.isPlay && appDatas.data.pageIndex == index) {
      // 音乐正在播放，修改isMusicPlay的状态值
      this.setData({
        isMusicPlay: true
      });
    }
    // 监听音乐暂停
    wx.onBackgroundAudioPause(() => {
      // 音乐暂停，修改isMusicPlay的状态值
      this.setData({
        isMusicPlay: false 
      });

      // 修改appDatas全局的数据
      appDatas.data.isPlay = false;
    })
  },

  // 点击分享按钮事件
  handleShare() {
    wx.showActionSheet({
      itemList: [
        '分享到朋友圈','分享到QQ空间','分享到微博'
      ],
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