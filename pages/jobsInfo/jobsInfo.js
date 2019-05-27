// pages/jobsInfo/jobsInfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    work:[
      {
        ptid: 0,
        workNmae: '可以只做七天的玩具寒假工',
        area: '常平',
        sal: '13元/小时',
        public_time: '2018-12-14'
      }, {
        ptid: 1,
        workNmae: '国贸城sanse与nike门店长期兼职',
        area: '东城',
        sal: '120元/天',
        public_time: '2018-12-14'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: '',
    //   data:{
    //     info: options.info
    //   }
    // })
    this.setData({
      workInfo:options.info
      })
    console.log(this.data.workInfo)
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

  },
  showWork:function(){

  },
  workDetail: function (e) {
    if (this.data.workInfo == 'signUp') {
      console.log("signUp")
    }
    var id = e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '../workDetail/workDetail?pattern=jobsInfo&ptid=' + id,
    })
  },
  share:function(){
    console.log("分享助力页面")
  }
})