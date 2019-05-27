var app = getApp();
app.uid=null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sid:null,
    chooseschool: [
      '广东科技学院', '东莞理工学院',
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  bindPickerChange(e) {
    var that = this;
    this.setData({
      index: e.detail.value,
      school: that.data.chooseschool[e.detail.value]
    })
    console.log("school值为" + this.data.school)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  sid: function (e) {
    this.setData({
      sid: e.detail.value
    })
    console.log("sid值为" + this.data.sid)
  },
  login:function(){
   
    var that=this;
    var data={
      sid:this.data.sid
    };
    console.log("sid" + data.sid)
   
    wx.request({ //发起请求
      url: 'http://111.230.53.23:8082/JSY/login',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      data: {
        sid:this.data.sid
      },
      method: 'POST',
      success(res) { //请求成功回调函数
       console.log("ttttt")
       console.log(res)
       app.uid=res.data;
        if(res.data!=0){
          
          wx.switchTab({
            url: '../personCenter/personCenter',
            success: function (e) {
              var page = getCurrentPages().pop();
              console.log(page)
               page.fresh(); 
               
            }
          })
      
        }
        //console.log(app.globalData.userId) //接收的数据
      }
      ,
      fail:function(e){
        console.log("失败")
      }
    })
  },
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
