// pages/register/register.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    sex: null,
    school: null,
    chooseschool: [
      '广东科技学院', '东莞理工学院',
    ],
    phone: null,
    sid:null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  userName: function(e) {
    this.setData({
      name: e.detail.value
    })
    console.log("name值为" + this.data.name)
  },
  radioChange: function(e) {
    this.setData({
      sex: e.detail.value
    })
    console.log("sex值为" + this.data.sex)
  },
  bindPickerChange(e) {
    var that = this;
    this.setData({
      index: e.detail.value,
      school: that.data.chooseschool[e.detail.value]
    })
    console.log("school值为" + this.data.school)
  },
  userPhone: function(e) {
    this.setData({
      phone: e.detail.value
    })
    console.log("phone值为" + this.data.phone)
  },
  sid:function(e){
    this.setData({
      sid:e.detail.value
    })
    console.log("sid值为" + this.data.sid)
  },
  saveInfo: function() {
    var data = {
      name: this.data.name,
      sex: this.data.sex,
      school: this.data.school,
      phone: this.data.phone,
      sid:this.data.sid
    }
    console.log(data)
    if (this.data.name == null || this.data.sex == null || this.data.school == null || this.data.phone == null) { //验证信息是否完整
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none',
        duration: 1000,
        mask: true
      })
    } else { //如果完整跳转到个人中心
      wx.request({ //发起请求
        url: 'http://111.230.53.23:8082/JSY/register',
        data: data,
        method:'POST',
        success(res) { //请求成功回调函数
          app.globalData.userId = res.data;
          wx.switchTab({ //跳转个人页面
            url: '../personCenter/personCenter',
          })
          //console.log(app.globalData.userId) //接收的数据
        }
      })
      
    }
  },
  back:function(){
    wx.navigateBack()
  },







  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})