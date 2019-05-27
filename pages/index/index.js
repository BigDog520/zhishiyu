const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    workList:[
      {
        id:1,
        workNmae: '可以只做七天的玩具寒假工',
        area: '常平',
        sal: '13元/小时',
        public_time:'2018-12-14'
      }, {
          id: 2,
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
    var that=this;
    wx.request({
      url: 'http://111.230.53.23:8082/JSY/displayPTList',
      method: 'post',
      header: {
        'content-type': 'application/json;charset=utf-8',

      },
      data:{
        ptcontent:{},
        ptuser:{},   
        jsyrsform:{},
        attendance:{},
        
      },
      success:(res)=>{
        console.log(JSON.stringify(res.data.ptcontent));
        that.setData({
          workList: res.data.ptcontent
        })
        app.ptcontent=res.data.ptcontent;
      }
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
    
  },
  showWork : function (e){
    console.log(e.currentTarget.dataset.id);
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url:'../workDetail/workDetail?pattern=index&ptid='+id,
      })
  }
})