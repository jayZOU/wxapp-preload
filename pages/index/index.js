
import Preload from '../../compontents/preload/preload';
//index.js
//获取应用实例
var app = getApp()


Page({
  data: {
    // array: [],
    // cdnUrl: CDNURl
    isShow: false
  },
  onLoad: function() {
    const preload = new Preload(this);
    const imgList = [
      'https://1x.com/images/user/e532db2968d553b3253095cd8572d0d3-ld.jpg',
      'https://1x.com/images/user/356ec5fd19e63e01af9ac64f8e317b48-ld.jpg',
      'https://1x.com/images/user/8fbec1e74cda9d286e409986f0bf5395-ld.jpg',
      'https://1x.com/images/user/68fded846b209b23a88fd1f71045adc8-ld.jpg',
      'https://1x.com/images/user/9c22479cb7d139b7c1fe66f8bd4b8ffe-ld.jpg',
    ];
    const _this = this;
    preload.loadList(imgList)
        .then((res) => {
          _this.setData({
            'pageData.isShow': true
          })
        })
        .catch((err) => {
          _this.setData({
            err: {
              isShowErr: true,
              errMsg: '数据加载失败，请重新刷新'
            }
          })
        })
  },
  onShow: function() {
    
    
  },

  
  
  

})
