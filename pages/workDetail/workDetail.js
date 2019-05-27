// pages/workDetail/workDetail.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: null,
    // 113.7556780000
    latitude: null,
    // 22.9717900000
    // name:'深圳大学',
    // address:'深圳大学',
    wdptcontent:'',
    pattern:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
   //接收跳转前页面数据，识别是什么页面跳转过来的
    this.setData({ pattern: options.pattern})
    console.log("跳转页面为" + options.pattern)    
    console.log("兼职id为" +options.ptid)
    console.log("here" + JSON.stringify(app.ptcontent));
    var info=app.ptcontent.filter(
      function(value){
        if(value.ptid==options.ptid)
        return value;
      }
      )
      console.log("info",info[0].ptid);
    wx.request({
      url: 'http://111.230.53.23:8082/JSY/rssum',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      data: {
        ptid:info[0].ptid,
      },
      success: function (res) {
        console.log("这里", res.data);
        that.setData({
          sum:res.data
        })
      }
    })
    console.log("aaa", info[0].latitude, info[0].longitude);
    var longitude=parseFloat(info[0].longitude);
    var latitude=parseFloat(info[0].latitude);
    console.log(longitude);
    that.setData({
      wdptcontent:info,
      longitude:longitude,
      latitude:latitude
    })
                //发送http请求  获取id为x的兼职数据
  },
  lijibaoming:function(){
    console.log("立即报名"+app.islogin);

    if(app.islogin==false || app.islogin==undefined){

      console.log("寄哪里"+app.islogin);
      //-----------------
      wx.navigateTo({
        url: '../jobsInfo/jobsInfo?info=signUping&ptid=options.ptid'
      })
      //----------------
    }else{
      console.log("AAAA")
      wx.request({ //发起请求
        url: 'http://111.230.53.23:8082/JSY/createimage',
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        data: {
          uid: app.uid
        },
        method: 'POST',
        success(res) { //请求成功回调函数
          console.log("ttttt")
          console.log(res)
          //console.log(app.globalData.userId) //接收的数据
        }
        ,
        fail: function (e) {
          console.log("失败")
        }
      })
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

  },
  navigation : function(){
    var that = this;
    
    wx.getLocation({//获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息    
      success: function (res) {
        
        // wx.openLocation({//​使用微信内置地图查看位置。
        //   latitude: res.latitude,//要去的纬度-地址
        //   longitude: res.longitude,//要去的经度-地址
        //   name: res.name,
        //   address: res.address,
        //   success:fun
        // });

        wx.chooseLocation({
          success: function (res) {
            wx.openLocation({
              latitude: res.latitude,
              longitude: res.longitude,
              name:res.name,
              address:res.address
            })
          },
          fail: function () {
            console.log("失败");
          }
        });
        
    
      }
    })
  },
})