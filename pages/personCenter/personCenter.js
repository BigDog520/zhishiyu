const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    islogin:false,            
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log("onload" + app.globalData.userId)
    if (app.globalData.userId != null){
      console.log(this.data.islogin)
      this.setData({
        islogin: true
      })
    }


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {

      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  login:function(){
    // wx.request({
    //   url: 'http://111.230.53.23:8082/JSY/login',
    //   method:'POST',
    //   header:{
    //     'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    //   },
    //   success:function(res){
        
    //   }
    // })
    wx.navigateTo({
      url: '../login/login',
    })
  },
  fun1:function(){
    this.setData({
      islogin:true
    })
    console.log(this.data.islogin)
  },
  register:function(){
    wx.redirectTo({
      url: '../register/register',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  myJobs:function(e){
    console.log(e.currentTarget.id);
    var info = e.currentTarget.id;
    wx.navigateTo({
      url: '../jobsInfo/jobsInfo?info=' + info,
    })
  },
  updataInfo:function(){
    wx.navigateTo({
      url: '../register/register'
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
  fresh:function(){
    this.setData({
      islogin:true
    })
    app.islogin=true
    console.log(getCurrentPages()[getCurrentPages().length - 1])
    console.log(this.data.islogin)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
  
})