//index.js  
//获取应用实例  
var app = getApp()  
Page( {  
  data: {  
    // 页面配置 
    winWidth: 0,  
    winHeight: 0,  
    // tab切换  
    currentTab: 0, 
    //银行类别 
    buyerbank:["---请选择---","中国人民银行会计营业部门","中国人民银行国家金库","中国工商银行"],
    buyerbankindex:0,
    //代开人类型
     persontype: [
      {name: 'USA', value: '自然人', checked: 'true'},
      {name: 'CHN', value: '其他纳税人'}
    ],
    //是否减免税
    freetax: [
      {name: 'USA', value: "是"},
      {name: 'CHN', value: '否', checked: 'true'}
    ]
  },  
  //购买方银行类别
  buyerbankpicker: function(e) {
    this.setData({
      buyerbankindex: e.detail.value
    })
  },
  onLoad: function() {  
    var that = this;  
  
    // 获取系统信息   
    wx.getSystemInfo( {  
  
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
        });  
      }  
  
    });  
  },  
  /** 
     * 滑动切换tab 
     */  
  bindChange: function( e ) {  
  console.log(e)
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
  
  },  
  /** 
   * 点击tab切换 
   */  
  swichNav: function( e ) {  
  
    var that = this;  
  
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    }  
  }  
})  


