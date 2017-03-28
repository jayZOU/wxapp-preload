# wxapp-preload   
微信小程序图片预加载

## Usage

1、将```compontents```目录复制到你的项目中，然后在页面wxml中添加预加载模版   

```html
<import src="../../compontents/preload/preload.wxml" />   
<template is="preload" data="{{imgLoadList}}"/>
```

2、在页面JS文件中引入预加载脚本，实例化预加载并传入需要加载的图片地址(可多张或单张)   

```javascript
import Preload from '../../compontents/preload/preload';

const preload = new Preload(this);
const imgList = [
      'https://1x.com/images/user/e532db2968d553b3253095cd8572d0d3-ld.jpg',
      'https://1x.com/images/user/356ec5fd19e63e01af9ac64f8e317b48-ld.jpg',
      'https://1x.com/images/user/8fbec1e74cda9d286e409986f0bf5395-ld.jpg',
      'https://1x.com/images/user/68fded846b209b23a88fd1f71045adc8-ld.jpg',
      'https://1x.com/images/user/9c22479cb7d139b7c1fe66f8bd4b8ffe-ld.jpg',
];
preload.loadList(imgList)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(res);
  })
```

## API   

### loadList(arr)  
加载多种图片，与```load```API可串联使用

### load(url)  
加载单张图片，与```loadList```API可串联使用

```javascript
preload.loadList(imgList)
    .then((res) => {
        console.log(res);
        return preload.load('https://1x.com/images/user/9c22479cb7d139b7c1fe66f8bd4b8ffe-ld.jpg')
    })
    .then((res) => {
    console.log(res);
  })
    .catch((err) => {
        console.log(res);
    })
```